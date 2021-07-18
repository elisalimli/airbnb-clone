import Head from "next/head";
import { FC } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";

const client = new QueryClient();

const MyApp = ({ Component, pageProps }) => {
  // createPageProgressBar();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no,user-scalable=0"
        />
      </Head>
      <QueryClientProvider contextSharing client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
};

export default MyApp;
