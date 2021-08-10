/* eslint-disable @typescript-eslint/ban-ts-comment */
import Head from "next/head";
import "../styles/globals.css";

if (process.env.NODE_ENV === "production")
  // @ts-ignore
  // there is index css and tailwind css file,but typescript gives error
  import("../styles/index.css");
// @ts-ignore
else import("../styles/tailwind.css");

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
