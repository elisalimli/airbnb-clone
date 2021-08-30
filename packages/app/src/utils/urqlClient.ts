import { createClient, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { urqlCacheExchange } from "@abb/controller";
import { Platform } from "react-native";

const url =
  Platform.OS === "ios"
    ? "http://localhost:4000/graphql"
    : "http://10.0.2.2:4000/graphql";

export const client = createClient({
  url,
  fetchOptions: {
    credentials: "include" as RequestCredentials,
    // headers: {
    //   cookie:
    //     "connect.sid=s%3AGi-aDdG4-Ysjhrezwyj8DEfdU0Ix6iEp.Dh7Q6c1c9LI0ylrKKWcnr6q74niCwievMXe5lTtelu4",
    // },
  },
  exchanges: [dedupExchange, cacheExchange(urqlCacheExchange), fetchExchange],
});
