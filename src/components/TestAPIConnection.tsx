"use client";
import { useEffect, useState } from "react";

const TestAPIConnection = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2023-01/graphql.json`;
      const token = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN;

      // Log the environment variable values
      console.log(
        "Shopify Store Domain:",
        process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN
      );
      console.log(
        "Shopify Storefront Access Token:",
        process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN
      );

      if (!endpoint || !token) {
        setError("Shopify API endpoint or access token is missing");
        return;
      }

      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Shopify-Storefront-Access-Token": token,
          },
          body: JSON.stringify({
            query: `
              {
                shop {
                  name
                  description
                }
              }
            `,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", (error as Error).message);
        setError((error as Error).message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Test Shopify API Connection</h1>
      {error && <p>Error: {error}</p>}
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default TestAPIConnection;
