import { getProducts } from "@/db/db";
import { NextResponse } from "next/server";

// To handle a GET request to /api/products
export async function GET(): Promise<NextResponse> {
  try {
    const products = await getProducts();
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
