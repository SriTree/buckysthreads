"use client";

import { Fragment, useEffect, useState } from "react";
import ProductCard from "@/components/productcard";
import { callShopify, ProductsInCollection } from "@/helpers/shopify";

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

const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await callShopify<{
      collections: {
        edges: { node: { products: { edges: { node: Product }[] } } }[];
      };
    }>(ProductsInCollection, { title: "bucky" });

    if (response.data.collections.edges.length === 0) {
      return [];
    }

    const products = response.data.collections.edges[0].node.products.edges.map(
      (edge) => edge.node
    );
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const ProductsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
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
        <h1 className="font-bold leading-tight text-palette-primary text-4xl sm:text-5xl mt-4 py-2 sm:py-4">
          Bucky's Signature Collection
        </h1>
        <p className="px-2 text-base sm:text-lg text-gray-600">
          Represent your favorite college town with one-of-one apparel
        </p>
      </div>
      <div className="max-w-7xl flex flex-wrap mx-auto px-2 pt-10">
        {error && <p className="text-red-500">{error}</p>}
        {products.map((product) => (
          <div key={product.id} className="w-1/2 p-2 sm:p-4 md:w-1/3 lg:w-1/4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
