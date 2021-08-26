import React from "react";
import ProtectedRoute from "../ui/utils/ProtectedRoute";
import { withApollo } from "../utils/withApollo";

const Home = () => {
  return (
    <ProtectedRoute>
      <div>Hello world</div>
    </ProtectedRoute>
  );
};

export default withApollo({ ssr: true })(Home);
