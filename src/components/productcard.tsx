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
    return <div className="w-full p-2">Product data is missing</div>;
  }

  const { handle, title, images, priceRange } = product;
  const imageNode = images.edges[0]?.node;
  const price = priceRange.maxVariantPrice.amount.replace(/\.0/g, "");

  return (
    <div className="w-full p-4">
      <Link href={`/${handle}`} passHref>
        <Image
          alt={title || "Product image"}
          src={imageNode?.url || "/placeholder.jpg"}
          width={imageNode?.width || 600} // Increased width
          height={imageNode?.height || 600} // Increased height
          className="w-full h-auto rounded-lg shadow-md"
        />
      </Link>
      <div className="text-center mt-4">
        <p className="text-lg font-semibold mb-1">{title}</p>
        <p className="text-gray-700">${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
