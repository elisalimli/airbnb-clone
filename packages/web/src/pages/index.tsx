import React from "react";
import { withApollo } from "../utils/withApollo";

const Home = () => {
  return <div>username </div>;
};

export default withApollo({ ssr: true })(Home);
