import "reflect-metadata";
import { PrismaClient } from "@prisma/client";
import cors from "cors";
import express from "express";
import { buildSchema } from "type-graphql";
import { isProduction, redis, sessionMiddleware } from "./utils";
import { RegisterResolver } from "./graphql/resolvers";
import { graphqlHTTP } from "express-graphql";
import expressPlayground from "graphql-playground-middleware-express";
import { LoginResolver } from "./graphql/resolvers/user/login/resolver";
import { LogoutResolver } from "./graphql/resolvers/user/logout/resolver";
import { MeResolver } from "./graphql/resolvers/user/me/resolver";

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

  app.use(
    "/graphiql",
    graphqlHTTP((req, res) => ({
      schema,
      context: {
        req,
        res,
        prisma,
        redis,
      },
      graphiql: !isProduction,
    }))
  );
  app.get("/graphql", expressPlayground({ endpoint: "/graphiql" }));

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
};

main().catch((err) => {
  console.log(err);
});
