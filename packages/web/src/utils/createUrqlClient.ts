import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, Exchange, fetchExchange } from "urql";
import { pipe, tap } from "wonka";
import { isServer } from "./isServer";
import { urqlCacheExchange } from "@abb/controller";

const errorExchange: Exchange =
  ({ forward }) =>
  (ops$) => {
    return pipe(
      forward(ops$),
      tap(({ error }) => {
        // @todo improve this
        // if (error?.message.includes("not authenticated")) {
        //   Router.replace("/login");
        // }
      })
    );
  };

export const createUrqlClient = (ssrExchange: any, ctx: any) => {
  const cookie = isServer ? ctx?.req?.headers?.cookie : "";
  console.log(cookie);
  return {
    url: process.env.NEXT_PUBLIC_API_URL,
    fetchOptions: {
      credentials: "include" as RequestCredentials,
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    },
    exchanges: [
      dedupExchange,
      cacheExchange(urqlCacheExchange),
      errorExchange,
      ssrExchange,
      fetchExchange,
    ],
  };
};
