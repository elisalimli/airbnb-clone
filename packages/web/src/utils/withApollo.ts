import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { isServer } from "./isServer";
import { withApollo as createWithApollo } from "next-apollo";

const createClient = (ctx: NextPageContext) => {
  console.log("url", process.env.NEXT_PUBLIC_API_URL);
  return new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL,
    credentials: "include",
    headers: {
      cookie: isServer ? ctx?.req?.headers.cookie : undefined,
    },
    cache: new InMemoryCache(),
  });
};

export const withApollo = createWithApollo(createClient);
