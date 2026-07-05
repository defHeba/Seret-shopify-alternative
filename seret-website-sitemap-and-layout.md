# Seret — Website Sitemap & Conversion Layout Strategy

Research base: Awwwards-winning fragrance sites, DTC fragrance leaders (Phlur, Skylar), the regional/Egyptian perfume retail landscape (Rasasi, Ajmal, noon marketplace), 2026 ecommerce CRO benchmarks, and Nielsen Norman Group homepage/navigation research. Applied to Seret's brand kit (cream/gold/black, quiet luxury + local pride).

---

## 1. What the research says

**From Awwwards-winning fragrance/beauty sites** (Atelier Flou, Jusbox Perfumes, Abel Fragrance): the highest-scoring sites lean into sensory storytelling — large-format photography, scent-note visualizations, and unusual but simple navigation — rather than generic ecommerce templates. Minimal, clean, "fashion" aesthetics score highest on the design axis; usability still comes from a conventional shop/cart/checkout underneath the polish.

**From DTC fragrance leaders (Phlur, Skylar):** the winning pattern is a short, flat primary nav (Shop, About/Our Story, Membership/Loyalty), mega-menus organized by "Bestsellers / New Arrivals / Sets" rather than by note family, and homepage modules ordered: hero → bestseller carousel → brand story → discovery/sample offer → membership or loyalty push. Both brands push a **discovery set / sample-to-full-size path** hard, because fragrance has one of the highest return rates in beauty when bought blind.

**From the Egyptian/regional market (Rasasi, Ajmal, noon):** most competitors are marketplace-driven (noon, ay7aaga) rather than owned-brand experiences — heavy on price/discount messaging, catalog grids, and COD/fast-shipping trust badges, light on brand storytelling. This is a **gap Seret can win on**: nobody in the regional perfume space is doing an Awwwards-caliber brand site. Trust signals that matter locally: cash on delivery, easy returns, authenticity guarantee — these need to be visible, not just Western trust badges like "secure checkout."

**From 2026 CRO benchmarks:** average ecommerce conversion sits at 2.5–3%; top performers hit 4–5%. The highest-leverage levers, in order of documented impact: (1) AI/guided personalization — a fragrance finder quiz converts 3–5x better than open browsing and cuts returns, since fragrance is the most-returned beauty category when bought blind; (2) reviews and social proof — products with 11–30 reviews convert ~68% higher than those with none; (3) mobile-first speed and checkout, since mobile is 70% of traffic but converts at roughly half the desktop rate; (4) trust signals (returns, security, transparent data use) — weak trust signals are cited in a majority of cart abandonments.

**From Nielsen Norman Group homepage/navigation research:** place the clearest value proposition and primary CTA above the fold; keep navigation categories shallow enough to fit without scrolling (no more than ~7 top items); 80% of user attention goes to the left side of the screen, so primary nav belongs there or as a clear horizontal bar; search must be a visible input box, not a hidden icon.

---

## 2. Sitemap

*(see the two sitemap diagrams above — top-level tree, then Shop expanded)*

**Primary navigation (max 4–5 items, matches NN/g's shallow-nav guidance):**
1. **Shop** — All Perfumes / Bestsellers / Gift & Custom Sets / Limited Drops
2. **Fragrance Finder** — the scent-matching quiz (own nav slot, not buried in Shop — this is the single highest-converting feature per the research above)
3. **Customize** — personalized labels/cards/scent sets (Seret already does this per the social content — give it a real page and PDP flow, not just an Instagram post)
4. **Our Story** — brand story, Egypt-made narrative, football/culture tie-ins, journal/blog
5. Utility row (header icons, not primary nav): Search · Account · Cart · Track Order · Contact/FAQ · Store Locator (if physical retail exists)

**Footer sitemap (full depth, SEO + support):**
- Shop: All Perfumes, Bestsellers, Gift Sets, Limited Drops, Sale
- Discover: Fragrance Finder, Customize, Our Story, Journal, Locations
- Support: Track Order, Shipping & Returns, FAQ, Contact, Authenticity Guarantee
- Company: About, Careers, Wholesale/Distributor enquiries, Instagram/TikTok

---

## 3. Page-by-page layout, optimized for conversion

### Homepage *(see wireframe above)*
Ordered top-to-bottom by the "inverted pyramid" NN/g principle — most decision-critical content first:
1. **Header** — logo centered (quiet, matches brand kit), nav left, utility icons right. Sticky on scroll.
2. **Hero (above the fold)** — real photography (not just typographic cream tiles like the social feed), one clear headline + one primary CTA ("Shop Now") + one secondary CTA ("Take the Scent Quiz"). Two competing CTAs is intentional here — browsing vs. guided discovery are both valid entry points and the research shows the quiz path converts far better for undecided visitors.
3. **Trust strip** — free shipping threshold, 100% original/sealed, cash on delivery, easy returns. This directly answers the "is this store legitimate" question that dominates the regional market.
4. **Bestsellers grid** — 4 products, social-proof-led (star ratings visible on the card itself, not just the PDP).
5. **Fragrance Finder banner** — full-width, high-contrast (black/gold on cream), single CTA. This is the highest-leverage conversion module per the CRO research — treat it as a homepage citizen, not a footer link.
6. **Brand story split** — image + short copy, Egypt-made narrative, links to Our Story.
7. **Social proof / UGC grid** — real customer photos (the brand already generates this organically per the social feed).
8. **Newsletter capture** — 10% off first order, single email field.
9. **Footer** — full sitemap depth for SEO and support.

### Shop / Collection pages
- Left-side filter rail (scent family, occasion, price, size) — matches the 80%-left-attention research and lets shoppers self-segment the way Phlur's mega-menu does.
- Product cards show: image, name, price, star rating count (11+ reviews visibly signals trust), and a quick-add.
- A persistent, non-intrusive "Not sure? Take the quiz" strip pinned above the grid for undecided browsers.

### Product Detail Page (PDP)
- Large image left, purchase panel right (price, size selector, sample/full-size toggle, Add to Cart, buy-now).
- Reviews block directly below the fold — not a separate tab — since review count/recency is one of the biggest documented trust levers.
- "Complete the set" or "customize this bottle" cross-sell directly on the PDP (ties to the Customize page).
- Sample-first path where possible: letting someone try a small size before committing to a full bottle reduces the return risk that's specific to fragrance.

### Fragrance Finder (quiz)
- 5–7 questions max, image-based where possible (mood, occasion, scent family, intensity), each question actually changing the outcome — no throwaway questions.
- Result page is itself shoppable: one best match + two alternatives, with an "Add to Cart" directly on the results screen, not just a redirect.
- Capture email at the result screen (not before) so completion isn't gated — gating before the result kills completion rates.

### Customize page
- Visual builder: choose scent → choose bottle/label → choose card message, mirroring the "Lily x Mark" personalization content already in Seret's social feed.
- Clear pricing and turnaround time up front — customization/gifting shoppers convert on clarity, not surprise.

### Cart & Checkout
- Persistent cart summary, free-shipping progress bar ("You're X EGP away from free shipping").
- Guest checkout as default, account creation optional/after purchase.
- Cash-on-delivery and card payment both visible before the shopper commits to an account.
- Minimize form fields; autofill/address lookup where possible — every extra field is documented friction, and mobile (70% of traffic) is where this friction costs the most.

### Our Story / Journal
- This is where the football-win energy, Egyptian pride, and "the Seret way" voice from the social feed gets a permanent home — currently that content only lives for 24 hours on Instagram. A journal section preserves it and gives search engines something to index.

---

## 4. Why this order, in one line each

- **Quiz gets its own nav slot** because guided discovery measurably outconverts open browsing for fragrance specifically.
- **Trust strip sits above the fold** because regional competitors are marketplace-driven and price-led — Seret earns trust by stating shipping/COD/returns plainly, not by assuming brand recognition does it.
- **Reviews sit high on PDPs** because review count is one of the highest-documented, easiest-to-implement conversion levers available.
- **Customize gets a real page, not just a post** because it's already a proven content angle in the existing Instagram grid — the website should capture that demand instead of letting it evaporate after 24 hours.
