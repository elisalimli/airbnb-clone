import connectRedis from "connect-redis";
import session from "express-session";
import { redis, COOKIE_NAME } from "./index";

const RedisStore = connectRedis(session);

export const sessionMiddleware = session({
  name: COOKIE_NAME,
  store: new RedisStore({
    client: redis,
    disableTouch: true,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 366 * 10, //10 years
    httpOnly: true,
    sameSite: "lax", //csrf,
    domain: ".airbnb-test.netlify.app",
    // secure: isProduction, // cookie only works in https,
  },
  secret: process.env.FRONTEND_HOST as string,
  resave: false,
  saveUninitialized: false,
});
