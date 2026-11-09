import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";

type ProductCardProps = {
  product: Pick<
    Product,
    "slug" | "name" | "priceInCents" | "category" | "madeToMeasure"
  >;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="aspect-3/4 bg-neutral-100" />
      <div className="mt-4 space-y-1">
        <p className="text-xs uppercase tracking-widest text-neutral-500">
          {product.category}
        </p>
        <h2 className="text-lg font-light group-hover:underline">
          {product.name}
        </h2>
        <p>{formatPrice(product.priceInCents)}</p>
      </div>
    </Link>
  );
}