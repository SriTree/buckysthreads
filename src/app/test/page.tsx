"use client";

import { Fragment, useEffect, useState } from "react";
import ProductCard from "@/components/productcard";
import { callShopify, ProductsByHandle } from "@/helpers/shopify";

interface Product {
  id: string;
  handle: string;
  title: string;
  tags: string[];
  images: {
    edges: {
      node: {
        url: string;
        width: number;
        height: number;
      };
    }[];
  };
  priceRange: {
    maxVariantPrice: {
      amount: string;
    };
  };
}

const fetchProductByHandle = async (
  handle: string
): Promise<Product | null> => {
  try {
    const response = await callShopify<{
      productByHandle: Product;
    }>(ProductsByHandle, { handle });

    console.log("Shopify response:", response);

    if (response.errors) {
      console.error("GraphQL errors:", response.errors);
      throw new Error(response.errors[0].message);
    }

    return response.data.productByHandle || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const handles = ["heritage-red", "flower-field", "pink-bascom"];
        const fetchedProducts = await Promise.all(
          handles.map(fetchProductByHandle)
        );
        setProducts(
          fetchedProducts.filter((product) => product !== null) as Product[]
        );
      } catch (error) {
        console.error("Error fetching products:", error);
        setError((error as Error).message);
      }
    };

    fetchData();
  }, []);

  return (
    <Fragment>
      <div className="text-center">
        <h1 className="font-bold leading-tight text-palette-primary text-5xl mt-4 py-2 sm:py-4">
          Bucky's Signature Collection
        </h1>
        <p className="px-2 text-lg text-gray-600">
          Represent your favorite college town with one-of-one apparel
        </p>
      </div>
      <div className="max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 mx-auto px-6 pt-10">
        {error && <p className="text-red-500">{error}</p>}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
