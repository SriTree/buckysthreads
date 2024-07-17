import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: {
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
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  if (!product) {
    return (
      <div className="w-full md:w-1/2 lg:w-1/3 p-2">
        Product data is missing
      </div>
    );
  }

  const { id, handle, title, tags, images, priceRange } = product;
  const imageNode = images?.edges[0]?.node;
  const price = priceRange?.maxVariantPrice?.amount.replace(/\.0/g, "");

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-2">
      <Link href={`/${handle}`} passHref>
        <Image
          alt={title || "Product image"}
          src={imageNode?.url || "/placeholder.jpg"}
          width={imageNode?.width || 500}
          height={imageNode?.height || 500}
          className="w-full h-auto"
        />
      </Link>
      <div>
        <p className="text-center text-l font-semibold mx-4 mt-4 mb-1">
          {title}
        </p>
        <p className="text-center text-gray-700 mb-4">${price}</p>
        {tags && tags.length > 0 && (
          <div className="text-center text-gray-500 mb-2">
            {tags.join(", ")}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
