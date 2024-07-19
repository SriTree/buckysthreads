import { AppProps } from "next/app";
import Head from "next/head";
import "../globals.css"; // Adjust path if necessary

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Bucky's Threads</title>
    </Head>
    <Component {...pageProps} />
  </>
);

export default MyApp;
