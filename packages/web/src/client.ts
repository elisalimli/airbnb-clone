import { GraphQLClient } from "graphql-request";

// try to change headers here
export const client = new GraphQLClient("http://localhost:4000/graphiql", {
  credentials: "include",
  //   headers: { cookie: "" },
});
