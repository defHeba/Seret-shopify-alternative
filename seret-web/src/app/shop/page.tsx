import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/products";

export default function ShopPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Shop</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Fragrance, crafted for the everyday and the unforgettable.
          </h1>
        </div>
        <Link href="/fragrance-finder" className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-950">
          Need help choosing? Take the quiz
        </Link>
      </div>

      <section className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
