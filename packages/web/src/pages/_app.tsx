import Head from "next/head";
import "../styles/globals.css";

// import tailwind css file in development for optimizing performance
if (process.env.NODE_ENV === "development") require("../styles/tailwind.css");
else if (process.env.NODE_ENV === "production") require("../styles/prod.css");

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
