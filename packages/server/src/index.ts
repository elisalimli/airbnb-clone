import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from "./graphql/resolvers";
import { LoginResolver } from "./graphql/resolvers/user/login/resolver";
import { LogoutResolver } from "./graphql/resolvers/user/logout/resolver";
import { MeResolver } from "./graphql/resolvers/user/me/resolver";
import { MyContext } from "./types/MyContext";
import { isProduction, redis, sessionMiddleware } from "./utils";

const PORT = process.env.PORT || 4000;

const main = async () => {
  const app = express();
  // app.set("trust proxy", 1);

  app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true,
    })
  );

  app.use(sessionMiddleware);

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

  const prisma = new PrismaClient({
    log: [
      {
        emit: "stdout",
        level: "query",
      },
      {
        emit: "stdout",
        level: "error",
      },
      {
        emit: "stdout",
        level: "info",
      },
      {
        emit: "stdout",
        level: "warn",
      },
    ],
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req, res }): MyContext => ({
      req: req as any,
      res: res as any,
      prisma,
      redis,
    }),
    plugins: [
      isProduction
        ? ApolloServerPluginLandingPageDisabled
        : ApolloServerPluginLandingPageGraphQLPlayground,
    ],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});
