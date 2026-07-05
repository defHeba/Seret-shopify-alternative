import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getFeaturedProducts } from "@/lib/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <main className="flex-1">
      <section className="border-b border-stone-200 bg-[#f8f3e8]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Egyptian fragrance, reimagined
            </p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-stone-900 sm:text-6xl">
              Quiet luxury that smells like memory, ritual, and pride.
            </h1>
            <p className="mt-6 text-lg leading-8 text-stone-700">
              Seret brings handcrafted scent, thoughtful customization, and a beautifully simple shopping experience to the Egyptian market.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/shop" className="rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700">
                Shop now
              </Link>
              <Link href="/fragrance-finder" className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-950">
                Take the scent quiz
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="rounded-[1.5rem] bg-[radial-gradient(circle_at_top_left,_rgba(136,111,36,0.2),_transparent_60%)] p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
                Trust first
              </p>
              <div className="mt-4 space-y-3 text-sm text-stone-700">
                <p>• Free shipping above EGP 2,500</p>
                <p>• Cash on delivery available</p>
                <p>• Easy returns and authenticity guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Bestsellers
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-stone-900">
              Made for discovery and gifting.
            </h2>
          </div>
          <Link href="/shop" className="text-sm font-semibold text-stone-700 transition hover:text-stone-950">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
