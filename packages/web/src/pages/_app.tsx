/* eslint-disable @typescript-eslint/ban-ts-comment */
import Head from "next/head";
import "../styles/globals.css";
import "../styles/index.css";

if (process.env.NODE_ENV === "production")
  // @ts-ignore
  import("../styles/tailwind.css");

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
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
