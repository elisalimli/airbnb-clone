import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";
import { isServer } from "../../utils/isServer";
import Spinner from "../Spinner";

type ReturnType = any;

const ProtectedRoute: React.FC<ReturnType> = ({ children }) => {
  const router = useRouter();
  const [{ data, fetching }] = useMeQuery();
  const user = data?.me;

  useEffect(() => {
    if (!user) router.replace("/register");
  }, [fetching, user]);

  if (user) return children;

  return <Spinner center color="text-primary" size="5" />;
};

export default ProtectedRoute;
