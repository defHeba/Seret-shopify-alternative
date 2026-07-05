import Link from "next/link";

export default function CustomizePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-16 lg:px-8">
      <div className="max-w-3xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">Customize</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-stone-900">Create a gift that feels personal and memorable.</h1>
        <p className="mt-4 text-lg leading-8 text-stone-600">
          Personalized labels, cards, and scent sets are a strong differentiation point for Seret, and this page gives that experience a real home.
        </p>
        <Link href="/shop" className="mt-8 inline-flex rounded-full bg-stone-900 px-5 py-3 text-sm font-medium text-white">
          Shop gift-ready scents
        </Link>
      </div>
    </main>
  );
}
