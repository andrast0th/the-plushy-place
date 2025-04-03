import ProductGrid from "@/components/ProductGrid";
import Welcome from "@/components/Welcome";
import { getProducts } from "@/db/db";
import { Suspense } from "react";

export default async function Home() {
  const products = await getProducts(); // Fetch products from the database
  return (
    <div className="p-4">
      <Suspense
        fallback={<div className="text-center">Loading Welcome...</div>}
      >
        <Welcome />
      </Suspense>
      <ProductGrid products={products} />;
    </div>
  );
}
