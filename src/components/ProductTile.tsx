import Link from "next/link";
import React from "react";
import { Product } from "../db/db";

interface ProductTileProps {
  product: Product;
}

const ProductTile: React.FC<ProductTileProps> = ({ product }) => {
  return (
    <div className="product-tile bg-pink-100 p-4 rounded-lg shadow-md">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="product-image w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="product-name text-pink-800 text-lg font-bold mb-2">
        {product.name}
      </h2>
      <p className="product-description text-pink-700 text-sm mb-2">
        {product.description}
      </p>
      <p className="product-price text-pink-900 font-semibold">
        ${product.price.toFixed(2)}
      </p>
      <Link
        href={`/products/${product.id}`}
        className="view-product-link bg-pink-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-pink-600 text-center block"
      >
        View Product
      </Link>
    </div>
  );
};

export default ProductTile;
