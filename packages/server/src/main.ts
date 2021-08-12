import "reflect-metadata";
import "dotenv-safe/config";
import { ApolloServer } from "apollo-server-express";
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

export const main = async () => {
  const app = express();

  app.use(
    cors({
      origin: process.env.FRONTEND_HOST,
      credentials: true,
    })
  );

  app.use(sessionMiddleware);
  // for cookie
  // app.set("trust proxy", 1);

  const schema = (await buildSchema({
    resolvers: [
      // Mutations
      RegisterResolver,
      LoginResolver,
      LogoutResolver,
      //Queries
      MeResolver,
    ],
    validate: false,
  })) as any;

  const apolloServer = new ApolloServer({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    schema,
    playground: true,
    introspection: true,
    context: ({ req, res }: MyContext): MyContext => ({
      req: req as any,
      res: res as any,
      prisma,
      redis,
    }),
  });

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
};
