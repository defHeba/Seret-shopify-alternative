import Link from "next/link";

const navItems = [
  { href: "/shop", label: "Shop" },
  { href: "/fragrance-finder", label: "Fragrance Finder" },
  { href: "/customize", label: "Customize" },
  { href: "/our-story", label: "Our Story" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-stone-200 bg-[#f8f3e8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-[0.3em] text-stone-900 uppercase">
          Seret
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-stone-700 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-stone-950">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-sm text-stone-700">
          <Link href="/cart" className="rounded-full border border-stone-300 px-3 py-2 transition hover:border-stone-900 hover:text-stone-950">
            Cart
          </Link>
          <Link href="/checkout" className="rounded-full bg-stone-900 px-3 py-2 text-white transition hover:bg-stone-700">
            Checkout
          </Link>
        </div>
      </div>
    </header>
  );
}
