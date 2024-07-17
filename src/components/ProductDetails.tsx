// src/components/ProductDetails.tsx

import Image from "next/image";
import { Product } from "@/helpers/shopify";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    title,
    body_html,
    images,
    product_type,
    published_at,
    updated_at,
    vendor,
    status,
    tags,
    options,
    variants,
  } = product;
  const imageNode = images?.edges[0]?.node;

  return (
    <div className="product-details">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: body_html }}></div>
      <Image
        alt={title || "Product image"}
        src={imageNode?.url || "/placeholder.jpg"}
        width={imageNode?.width || 500}
        height={imageNode?.height || 500}
        className="w-full h-auto"
      />
      <ul>
        <li>
          <strong>Vendor:</strong> {vendor}
        </li>
        <li>
          <strong>Product Type:</strong> {product_type}
        </li>
        <li>
          <strong>Status:</strong> {status}
        </li>
        <li>
          <strong>Tags:</strong> {tags}
        </li>
        <li>
          <strong>Published At:</strong> {published_at}
        </li>
        <li>
          <strong>Updated At:</strong> {updated_at}
        </li>
      </ul>
      <div>
        <h2>Options</h2>
        <ul>
          {options.map((option) => (
            <li key={option.id}>
              {option.name}: {option.values.join(", ")}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Variants</h2>
        <ul>
          {variants.map((variant) => (
            <li key={variant.id}>
              {variant.title} - ${variant.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
