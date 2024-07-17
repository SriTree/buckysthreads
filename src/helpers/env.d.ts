// env.d.ts

declare namespace NodeJS {
  interface ProcessEnv {
    SHOPIFY_STORE_FRONT_ACCESS_TOKEN: string;
    SHOPIFY_STORE_DOMAIN: string;
  }
}
