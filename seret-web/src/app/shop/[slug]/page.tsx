import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/add-to-cart-button";
import { getProductBySlug } from "@/lib/products";

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-10 px-6 py-16 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.5rem] border border-stone-200 bg-[#faf5e8] p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
            {product.badge}
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-900">
            {product.name}
          </h1>
          <p className="mt-4 text-lg leading-8 text-stone-600">{product.description}</p>
          <div className="mt-6 flex items-center gap-4">
            <p className="text-2xl font-semibold text-stone-900">EGP {product.priceEgp.toLocaleString()}</p>
            {product.compareAtPriceEgp ? (
              <p className="text-sm text-stone-500 line-through">
                EGP {product.compareAtPriceEgp.toLocaleString()}
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[1.5rem] border border-stone-200 bg-[#f8f3e8] p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-stone-500">
              Details
            </p>
            <div className="mt-4 space-y-3 text-sm text-stone-700">
              <p>• Scent family: {product.scentFamily}</p>
              <p>• Size: {product.sizeMl}ml</p>
              <p>• Crafted for gifting, daily wear, and discovery</p>
            </div>
          </div>
          <div className="mt-8">
            <AddToCartButton product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}
