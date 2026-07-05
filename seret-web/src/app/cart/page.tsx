"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, itemCount, clearCart } = useCart();

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-16 lg:px-8">
      <div className="flex items-end justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Cart</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">Your curated selection</h1>
        </div>
        <button onClick={clearCart} className="text-sm font-medium text-stone-600 transition hover:text-stone-900">
          Clear cart
        </button>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[2rem] border border-dashed border-stone-300 bg-[#fbf7ee] p-10 text-center text-stone-700">
          <p className="text-lg font-semibold">Your cart is empty.</p>
          <p className="mt-2">Start with the bestsellers and build your ritual.</p>
          <Link href="/shop" className="mt-6 inline-flex rounded-full bg-stone-900 px-5 py-2 text-sm font-medium text-white">
            Browse fragrances
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.8fr]">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex flex-col gap-4 rounded-[1.5rem] border border-stone-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-stone-900">{item.name}</p>
                  <p className="text-sm text-stone-500">EGP {item.priceEgp.toLocaleString()}</p>
                </div>
                <div className="flex items-center gap-3">
                  <select
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.id, Number(event.target.value))}
                    className="rounded-full border border-stone-300 px-3 py-2 text-sm"
                  >
                    {[1, 2, 3, 4, 5].map((value) => (
                      <option key={value} value={value}>{value}</option>
                    ))}
                  </select>
                  <button onClick={() => removeItem(item.id)} className="text-sm font-medium text-stone-600 hover:text-stone-900">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <aside className="rounded-[2rem] border border-stone-200 bg-[#f8f3e8] p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Summary</p>
            <p className="mt-4 text-3xl font-semibold text-stone-900">{itemCount} items</p>
            <div className="mt-6 flex items-center justify-between text-sm text-stone-700">
              <span>Subtotal</span>
              <span>EGP {subtotal.toLocaleString()}</span>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-stone-700">
              <span>Shipping</span>
              <span>Free over EGP 2,500</span>
            </div>
            <Link href="/checkout" className="mt-8 inline-flex w-full justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
              Continue to checkout
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}
