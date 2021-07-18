import { ApolloClient, InMemoryCache } from "@apollo/client";
import { NextPageContext } from "next";
import { isServer } from "./isServer";
import { withApollo as createWithApollo } from "next-apollo";

const createClient = (ctx: NextPageContext) => {
  return new ApolloClient({
    uri: "http://localhost:4000/graphql",
    credentials: "include",
    headers: {
      cookie: isServer ? ctx?.req?.headers.cookie : undefined,
    },
    cache: new InMemoryCache(),
  });
};

export const withApollo = createWithApollo(createClient);
