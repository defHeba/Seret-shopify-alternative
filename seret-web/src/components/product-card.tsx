"use client";

import Link from "next/link";
import { useCart } from "@/components/cart-provider";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-sm">
      <div className="h-56 bg-[radial-gradient(circle_at_top_left,_rgba(136,111,36,0.2),_transparent_60%)] p-6">
        <div className="flex h-full items-end justify-between rounded-[1.5rem] border border-stone-200 bg-[#faf5e8] p-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-stone-500">{product.badge}</p>
            <h3 className="mt-2 text-xl font-semibold text-stone-900">{product.name}</h3>
          </div>
          <span className="rounded-full bg-stone-900 px-3 py-1 text-xs font-medium text-white">
            {product.sizeMl}ml
          </span>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <p className="text-sm leading-6 text-stone-600">{product.description}</p>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-stone-900">EGP {product.priceEgp.toLocaleString()}</p>
            {product.compareAtPriceEgp ? (
              <p className="text-sm text-stone-500 line-through">EGP {product.compareAtPriceEgp.toLocaleString()}</p>
            ) : null}
          </div>
          <button
            onClick={() => addItem(product)}
            className="rounded-full bg-stone-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Add to cart
          </button>
        </div>
        <Link href={`/shop/${product.slug}`} className="text-sm font-semibold text-stone-700 transition hover:text-stone-950">
          View details →
        </Link>
      </div>
    </article>
  );
}
