# Seret — Build Plan (Next.js + Supabase + Paymob)

Scoped to what Seret actually needs — not a Shopify clone. Single-brand, single-currency (EGP)-first, Egypt-market checkout via Paymob, everything else trimmed to what the sitemap from the previous doc requires (Shop, Fragrance Finder, Customize, Our Story, Cart/Checkout, Account).

---

## 1. Stack

| Layer | Choice | Why |
|---|---|---|
| Frontend/Backend | Next.js (App Router) | Server components for product pages = fast, SEO-friendly; API routes double as your backend, no separate server needed |
| Styling | Tailwind CSS + shadcn/ui | Fast to theme with your cream/gold/black brand kit |
| Database | Supabase (Postgres) | You already chose this — also gives you Auth and Storage for free, so no separate auth provider needed |
| Auth | Supabase Auth | Email/password + optional phone OTP (common in Egypt) |
| File storage | Supabase Storage | Product images, UGC uploads |
| Payments | Paymob (Intentions API) | Required for Egypt — cards, wallets (Vodafone Cash etc.), kiosk |
| Hosting | Vercel | Zero-config Next.js hosting |
| Email | Resend | Order confirmations, abandoned cart |
| Background jobs | Supabase Edge Functions or Vercel Cron | Abandoned-cart emails, low-stock alerts |

You do **not** need: multi-tenant architecture, theme marketplace, app store, multi-currency, Algolia (Postgres full-text search is enough at your catalog size).

---

## 2. Supabase schema

```
profiles
  id (uuid, FK -> auth.users)
  full_name
  phone
  created_at

addresses
  id
  profile_id (FK -> profiles)
  label            -- "Home", "Work"
  governorate
  city
  street
  building
  phone
  is_default

products
  id
  slug
  name
  description
  scent_family      -- floral, woody, fresh, oriental (used by quiz + filters)
  status             -- draft, active, archived
  seo_title
  seo_description
  created_at

product_variants
  id
  product_id (FK -> products)
  size_ml            -- 30, 50, 100
  price_egp
  compare_at_price_egp
  sku
  stock_quantity
  image_url

collections
  id
  slug               -- bestsellers, gift-sets, limited-drops
  name
  description

product_collections
  product_id (FK)
  collection_id (FK)

orders
  id
  order_number
  profile_id (FK, nullable for guest checkout)
  guest_email
  guest_phone
  status             -- pending, paid, processing, fulfilled, shipped, delivered, cancelled, refunded
  subtotal_egp
  shipping_egp
  discount_egp
  total_egp
  shipping_address (jsonb)
  paymob_order_id
  paymob_transaction_id
  created_at

order_items
  id
  order_id (FK)
  variant_id (FK)
  quantity
  unit_price_egp
  customization (jsonb)   -- label text, engraving, bundle contents

coupons
  id
  code
  type               -- percentage, fixed, free_shipping
  value
  usage_limit
  expires_at

reviews
  id
  product_id (FK)
  profile_id (FK, nullable)
  rating
  body
  created_at

quiz_responses
  id
  session_id
  profile_id (FK, nullable)
  answers (jsonb)
  recommended_product_id (FK)
  email_captured

newsletter_subscribers
  id
  email
  source             -- footer, quiz, popup
  created_at
```

Enable **Row Level Security** on every table. Rough policy shape:
- `products`, `product_variants`, `collections`: public read, admin-only write
- `orders`, `order_items`, `addresses`: readable/writable only by their owning `profile_id` (or via service role from the server for guest checkout)
- Order status changes and payment fields: writable only by the server (service role key), never by the client

---

## 3. Paymob integration (Intentions API — current v1 flow)

Paymob's modern integration path is the **Intentions API**, not the older iframe/HMAC-only flow. Shape:

1. **Customer clicks "Pay"** on your checkout page.
2. **Your server** (never the browser) recomputes the order total from the database — don't trust a client-supplied amount — then calls:
   ```
   POST https://accept.paymob.com/v1/intention/
   Authorization: Token <PAYMOB_SECRET_KEY>
   {
     "amount": 59500,              // piasters — smallest currency unit
     "currency": "EGP",
     "payment_methods": [<integration_id_card>, "wallet"],
     "items": [...],
     "billing_data": {...},
     "special_reference": "<your order id>",
     "notification_url": "https://seret.com/api/paymob/webhook",
     "redirection_url": "https://seret.com/checkout/confirmation"
   }
   ```
   Response returns a `client_secret`.
3. **Save** `paymob_order_id`/`client_secret` on the `orders` row, status stays `pending`.
4. **Redirect** the customer to Paymob's Unified Checkout (`/unifiedcheckout/?publicKey=...&clientSecret=...`) or mount the embedded Paymob element on your own checkout page.
5. **Paymob sends a webhook** (`notification_url`) with the transaction result once payment completes.
6. **Your webhook route verifies the HMAC** signature (Paymob signs the callback payload with your HMAC secret) before trusting it, then:
   - marks the order `paid` or `failed`
   - decrements `stock_quantity` on the relevant variants
   - triggers the confirmation email via Resend
7. The **confirmation page** polls your own `orders` table (via Supabase) for status rather than trusting query params from the redirect — the webhook is the source of truth, the redirect is just where the customer lands.

Support both **cards** and **mobile wallets** (Vodafone Cash, etc.) as integration IDs in `payment_methods` — wallets are heavily used in Egypt alongside cash on delivery. If you also want COD, that's just an order status path with no Paymob call at all (`status: pending`, marked `paid` manually on delivery, or via a separate COD confirmation flow).

---

## 4. File structure

```
seret-web/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                     # homepage
│   │   ├── our-story/page.tsx
│   │   └── journal/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── shop/
│   │   ├── page.tsx                     # all perfumes, filters
│   │   ├── bestsellers/page.tsx
│   │   ├── gift-sets/page.tsx
│   │   ├── limited-drops/page.tsx
│   │   └── [productSlug]/page.tsx       # PDP
│   ├── fragrance-finder/
│   │   ├── page.tsx                     # quiz flow
│   │   └── results/page.tsx
│   ├── customize/page.tsx
│   ├── cart/page.tsx
│   ├── checkout/
│   │   ├── page.tsx
│   │   └── confirmation/page.tsx
│   ├── account/
│   │   ├── page.tsx
│   │   ├── orders/page.tsx
│   │   └── addresses/page.tsx
│   ├── admin/                           # protected, role-checked
│   │   ├── products/
│   │   ├── orders/
│   │   ├── discounts/
│   │   └── analytics/
│   ├── api/
│   │   ├── paymob/
│   │   │   ├── create-intention/route.ts
│   │   │   └── webhook/route.ts
│   │   ├── quiz/submit/route.ts
│   │   └── newsletter/route.ts
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                              # shadcn primitives
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── product-card.tsx
│   ├── cart-drawer.tsx
│   └── quiz/
│       ├── question-step.tsx
│       └── result-card.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts                    # browser client
│   │   ├── server.ts                    # server component client
│   │   └── admin.ts                     # service-role client, server-only
│   ├── paymob/
│   │   ├── create-intention.ts
│   │   └── verify-webhook.ts            # HMAC check
│   ├── types.ts                         # generated from Supabase schema
│   └── utils.ts
├── supabase/
│   ├── migrations/
│   └── seed.sql
├── public/
├── .env.local
├── tailwind.config.ts
├── next.config.js
└── package.json
```

---

## 5. Environment variables

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=        # server-only, never exposed to client

PAYMOB_SECRET_KEY=                 # server-only
PAYMOB_PUBLIC_KEY=                 # safe for client
PAYMOB_HMAC_SECRET=                # server-only, for webhook verification
PAYMOB_INTEGRATION_ID_CARD=
PAYMOB_INTEGRATION_ID_WALLET=

RESEND_API_KEY=
NEXT_PUBLIC_SITE_URL=
```

---

## 6. Build phases

**Phase 1 — MVP (1–2 weeks)**
Products + variants, product grid/PDP, cart, Supabase auth, Paymob checkout (card + wallet), order confirmation, basic admin (add/edit products, view orders).

**Phase 2 — Store management**
Collections (Bestsellers, Gift Sets, Limited Drops), coupons, guest checkout, addresses, order status emails, inventory decrement + low-stock flag.

**Phase 3 — Conversion features** *(from the sitemap/layout doc)*
Fragrance Finder quiz with shoppable results, Customize builder, reviews on PDP, newsletter capture, UGC section on homepage.

**Phase 4 — Polish**
SEO (sitemap.xml, metadata per product), search, performance pass (image optimization, ISR on product pages), Journal/CMS pages for the Our Story content.

**Phase 5 — Differentiation** *(optional, later)*
AI product description generator for new drops, abandoned-cart email automation, simple sales-analytics summary for the admin dashboard.

---

## 7. What I'd build first if you want me to start scaffolding

Say the word and I can generate:
1. The Supabase migration SQL for the schema above
2. The Next.js project skeleton with the file structure above
3. The Paymob `create-intention` + `webhook` API routes wired to Supabase

Tell me which of those three you want first, or if you want all three in one pass.
