import { getProducts } from "@/features/products/queries";
import { ProductCard } from "@/features/products/components/product-card";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-3xl font-light tracking-wide">Notre collection</h1>
      <p className="mt-2 text-neutral-500">{products.length} pièces</p>

      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </main>
  );
}