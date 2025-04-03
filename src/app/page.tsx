import Welcome from "@/components/Welcome";
import { Suspense } from "react";
import ProductGrid from "../components/ProductGrid"; // Assuming you have a ProductGrid component
import { getProducts } from "../db/db"; // Assuming this function fetches products from the database

export default async function Home() {
  const products = await getProducts(); // Fetch products from the database

  return (
    <div>
      <Suspense fallback={<div>Loading your welcome!</div>}>
        <Welcome />
      </Suspense>
      <ProductGrid products={products} />
    </div>
  );
}
