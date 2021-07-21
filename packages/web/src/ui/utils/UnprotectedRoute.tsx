import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";
import Spinner from "../Spinner";

type ReturnType = any;

const UnprotectedRoute: React.FC<ReturnType> = ({ children }) => {
  const router = useRouter();
  const { data, loading } = useMeQuery();
  const user = data?.me;

  useEffect(() => {
    // @todo add dynamic routing
    // user don't always redirect to home page
    // get last path and redirect there
    if (user) router.replace("/");
  }, [loading, user]);

  if (!user) return children;

  return <Spinner center size="5" />;
};

export default UnprotectedRoute;
