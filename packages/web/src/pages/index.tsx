import { withUrqlClient } from "next-urql";
import React from "react";
import { useMeQuery } from "../generated/graphql";
import ProtectedRoute from "../ui/utils/ProtectedRoute";
import { createUrqlClient } from "../utils/createUrqlClient";

const Home = () => {
  const [{ data }] = useMeQuery();

  return (
    <ProtectedRoute>
      <div>Hello world 2 {data?.me?.username}</div>
    </ProtectedRoute>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Home);
