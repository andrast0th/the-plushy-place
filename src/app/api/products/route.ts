import { getProducts } from "@/db/db";
import { NextResponse } from "next/server";

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products);
}
