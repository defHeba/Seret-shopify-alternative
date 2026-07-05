"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-16 lg:px-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Checkout</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">Secure checkout for your fragrance ritual</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-stone-900">Payment & delivery</h2>
          <p className="mt-3 text-sm leading-6 text-stone-600">
            This screen is wired for the Paymob checkout flow. The next step will connect the order submission and webhook handling.
          </p>
          <div className="mt-6 space-y-3 rounded-[1.5rem] border border-stone-200 bg-[#fcf8ef] p-5 text-sm text-stone-700">
            <p>• Cash on delivery available</p>
            <p>• Card and wallet payments via Paymob</p>
            <p>• Easy returns and authenticity guarantee</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/cart" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700">
              Back to cart
            </Link>
            <button
              onClick={clearCart}
              className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white"
            >
              Start payment flow
            </button>
          </div>
        </section>
        <aside className="rounded-[2rem] border border-stone-200 bg-[#f8f3e8] p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Order summary</p>
          <div className="mt-6 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center justify-between text-sm text-stone-700">
                <span>{item.name} × {item.quantity}</span>
                <span>EGP {(item.priceEgp * item.quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-stone-300 pt-4 text-sm text-stone-700">
            <div className="flex items-center justify-between">
              <span>Subtotal</span>
              <span>EGP {subtotal.toLocaleString()}</span>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
