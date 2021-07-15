import { GraphQLClient } from "graphql-request";
import React from "react";
import { useMeQuery } from "../../generated/graphql";

const query = `
query {
  allUsers {
    id
    email
  }
}
`;

const ProtectedRoute: React.FC = ({ children }) => {
  const client = new GraphQLClient("http://localhost:4000/graphiql", {});
  client.request(query, {}).then((data) => console.log(data));

  // const data = useMeQuery(client, {});
  // console.log("data", data);

  return children;
};

export default ProtectedRoute;
