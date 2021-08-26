import "reflect-metadata";
import "dotenv-safe/config";
import { graphqlHTTP } from "express-graphql";
import cors from "cors";
import express from "express";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from "./graphql/resolvers";
import { LoginResolver } from "./graphql/resolvers/user/login/resolver";
import { LogoutResolver } from "./graphql/resolvers/user/logout/resolver";
import { MeResolver } from "./graphql/resolvers/user/me/resolver";
import { MyContext } from "./types/MyContext";
import { redis, sessionMiddleware } from "./utils";
import { prisma } from "./utils/prisma";

const PORT = process.env.PORT || 4000;

export const main: () => any = async () => {
  const app = express();

  app.use(
    cors({
      origin: process.env.FRONTEND_HOST,
      credentials: true,
    })
  );

  app.use(sessionMiddleware);

  // for cookie
  app.set("trust proxy", 1);

  const schema = await buildSchema({
    resolvers: [
      // Mutations
      RegisterResolver,
      LoginResolver,
      LogoutResolver,
      //Queries
      MeResolver,
    ],
    validate: false,
  });

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      context: ({ req, res }: MyContext): MyContext => ({
        req,
        res,
        prisma,
        redis,
      }),
      graphiql: true,
    })
  );

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
};
