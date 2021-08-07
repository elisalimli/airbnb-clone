import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useMeQuery } from "../../generated/graphql";
import Spinner from "../Spinner";

type ReturnType = any;

const ProtectedRoute: React.FC<ReturnType> = ({ children }) => {
  const router = useRouter();
  const { data, loading } = useMeQuery({ notifyOnNetworkStatusChange: true });
  const user = data?.me;

  console.log(loading, data);

  useEffect(() => {
    if (!user) router.replace("/register");
  }, [loading, user]);

  if (user) return children;

  return <Spinner center color="text-primary" size="5" />;
};

export default ProtectedRoute;
