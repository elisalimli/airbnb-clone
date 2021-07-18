import React from "react";
import { client } from "../client";
import { useMeQuery } from "../generated/graphql";
import ProtectedRoute from "../ui/utils/ProtectedRoute";

const Home = ({ user }) => {
  // const { data, isLoading } = useMeQuery(client);

  // if (isLoading) return <div>loading...</div>;

  return (
    // <ProtectedRoute>
    <div>username :{user?.username}</div>
    // </ProtectedRoute>
  );
};

const getMe = () => {
  const { data, isLoading } = useMeQuery(client);
  return data;
};

export async function getServerSideProps(context) {
  const data = getMe();
  return {
    props: {
      user: data?.me,
    }, // will be passed to the page component as props
  };
}

export default Home;
