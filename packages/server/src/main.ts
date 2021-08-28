import "reflect-metadata";
import cors from "cors";
import "dotenv-safe/config";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "type-graphql";
import { RegisterResolver } from "./graphql/resolvers";
import { LoginResolver } from "./graphql/resolvers/user/login/resolver";
import { LogoutResolver } from "./graphql/resolvers/user/logout/resolver";
import { MeResolver } from "./graphql/resolvers/user/me/resolver";
import { redis, sessionMiddleware, prisma } from "./utils";
import expressPlayground from "graphql-playground-middleware-express";

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
    graphqlHTTP((req, res) => ({
      schema,
      context: {
        req,
        res,
        prisma,
        redis,
      },
      graphiql: true,
    }))
  );

  app.get("/playground", expressPlayground({ endpoint: "/graphql" }));

  app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
  });
};
