import { MeDocument, MeQuery, RegisterMutation } from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";

export const urqlCacheExchange = {
  updates: {
    Mutation: {
      register: (_result, _, cache, __) => {
        betterUpdateQuery<RegisterMutation, MeQuery>(
          cache,
          { query: MeDocument },
          _result,
          (result, data) => {
            if (result.register.errors) return data;
            return {
              me: result.register.user,
            };
          }
        );
      },
    },
  },
};
