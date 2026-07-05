export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  priceEgp: number;
  compareAtPriceEgp?: number;
  sizeMl: number;
  scentFamily: string;
  badge: string;
  image: string;
  accent: string;
};

export const products: Product[] = [
  {
    id: "seret-oud-amber",
    slug: "seret-oud-amber",
    name: "Seret Oud Amber",
    description:
      "A warm, resinous signature built for evening wear and slow rituals.",
    priceEgp: 2950,
    compareAtPriceEgp: 3400,
    sizeMl: 100,
    scentFamily: "Oriental",
    badge: "Bestseller",
    image: "/images/amber.jpg",
    accent: "Gold",
  },
  {
    id: "seret-fig-mint",
    slug: "seret-fig-mint",
    name: "Seret Fig Mint",
    description:
      "Fresh citrus and green fig with a clean, confident finish.",
    priceEgp: 2450,
    sizeMl: 50,
    scentFamily: "Fresh",
    badge: "New Drop",
    image: "/images/fig.jpg",
    accent: "Cream",
  },
  {
    id: "seret-gold-rose",
    slug: "seret-gold-rose",
    name: "Seret Gold Rose",
    description:
      "Soft florals wrapped in warm spice for gifting and daily wear.",
    priceEgp: 2650,
    sizeMl: 75,
    scentFamily: "Floral",
    badge: "Gift Set",
    image: "/images/rose.jpg",
    accent: "Rose",
  },
  {
    id: "seret-wood-sandal",
    slug: "seret-wood-sandal",
    name: "Seret Wood Sandal",
    description:
      "Deep woods and smooth sandalwood for a grounded, luxurious trail.",
    priceEgp: 3200,
    sizeMl: 100,
    scentFamily: "Woody",
    badge: "Limited Drop",
    image: "/images/wood.jpg",
    accent: "Black",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts() {
  return products.slice(0, 3);
}
