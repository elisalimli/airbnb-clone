import React from "react";
import { client } from "../../client";
import { useMeQuery } from "../../generated/graphql";

const ProtectedRoute: React.FC = (props) => {
  const { data, isLoading } = useMeQuery(client);
  console.log("data", data, props.posts);

  return props.children;
};

export default ProtectedRoute;
