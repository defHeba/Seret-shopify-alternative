import Link from "next/link";

export default function FragranceFinderPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-16 lg:px-8">
      <div className="max-w-3xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Fragrance Finder</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">Discover the scent that fits your day.</h1>
        <p className="mt-4 text-lg leading-8 text-stone-600">
          This quiz will guide visitors toward the right fragrance family and connect them to the best Seret recommendation.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/shop" className="rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white">
            Browse perfumes
          </Link>
          <Link href="/customize" className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700">
            Explore customization
          </Link>
        </div>
      </div>
    </main>
  );
}
