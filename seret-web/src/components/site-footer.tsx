import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-900 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-lg font-semibold tracking-[0.3em] uppercase">Seret</p>
          <p className="mt-3 max-w-sm text-sm text-stone-400">
            Quiet luxury, Egyptian pride, and fragrance crafted to feel unforgettable.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li><Link href="/shop" className="hover:text-white">Shop</Link></li>
            <li><Link href="/fragrance-finder" className="hover:text-white">Fragrance Finder</Link></li>
            <li><Link href="/customize" className="hover:text-white">Customize</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Support</h3>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li>Cash on delivery</li>
            <li>Easy returns</li>
            <li>Authenticity guarantee</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
