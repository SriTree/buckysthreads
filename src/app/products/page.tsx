import { Fragment } from "react";
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

async function fetchProducts(): Promise<Product[]> {
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
}

const Home: React.FC = async () => {
  const products = await fetchProducts();

  return (
    <Fragment>
      <div className="text-center">
        <h1 className="font-bold leading-tight text-palette-primary text-5xl mt-4 py-2 sm:py-4">
          Buckys Signature Collection
        </h1>
        <p className="px-2 text-lg text-gray-600">
          Represent your favorite college town with one-of-one apparel
        </p>
      </div>
      <div className="max-w-7xl flex flex-wrap mx-auto px-6 pt-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
