import { findProductById } from "@/db/db";
import { Metadata } from "next";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateStaticParams() {
  // Mock API call to fetch all product IDs
  const productIds = ["1", "2", "3"]; // Replace with actual API call if needed
  return productIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params;

  const product = await findProductById(Number(id));

  return {
    title: product?.name ?? "qq",
    description: product?.description ?? "qq",
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const { id } = await params;

  // Mock API call to fetch product data
  const product = await findProductById(Number(id));
  if (!product) {
    throw new Error(`Product with id ${id} not found`);
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ maxWidth: "100%" }}
      />
      <p>{product.description}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductPage;
