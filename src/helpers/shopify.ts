const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN!;
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN!;

interface ShopifyResponse<T> {
  data: T;
  errors?: { message: string }[];
}

export async function callShopify<T>(
  query: string,
  variables: Record<string, any> = {}
): Promise<ShopifyResponse<T>> {
  const fetchUrl = `https://${domain}/api/2023-04/graphql.json`;

  const fetchOptions: RequestInit = {
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const response = await fetch(fetchUrl, fetchOptions);
    const data: ShopifyResponse<T> = await response.json();

    if (!response.ok) {
      throw new Error(
        data.errors ? data.errors[0].message : "Could not fetch products!"
      );
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Could not fetch products!");
  }
}

const gql = String.raw;

export const ProductsInCollection = gql`
  query ProductsInCollection($title: String!) {
    collections(first: 1, query: $title) {
      edges {
        node {
          id
          title
          products(first: 50) {
            edges {
              node {
                id
                title
                handle
                tags
                images(first: 10) {
                  edges {
                    node {
                      url
                      width
                      height
                    }
                  }
                }
                priceRange {
                  maxVariantPrice {
                    amount
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const ProductsByHandle = gql`
  query ProductsByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      tags
      images(first: 10) {
        edges {
          node {
            url
            width
            height
          }
        }
      }
      priceRange {
        maxVariantPrice {
          amount
        }
      }
    }
  }
`;
