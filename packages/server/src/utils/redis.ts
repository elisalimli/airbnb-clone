import Redis from "ioredis";
import connectRedis from "connect-redis";
import session from "express-session";

export const RedisStore = connectRedis(session);
console.log(process.env.REDIS_URL, process.env.DATABASE_URL);

export const redis = new Redis(process.env.REDIS_URL);
