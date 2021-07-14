import { Session, SessionData } from "express-session";
import { Redis } from "ioredis";
import { PrismaClient } from "@prisma/client";

export interface MyContext {
  req: Request & {
    session: Session & Partial<SessionData> & { userId?: string };
  };
  res: Response;
  redis: Redis;
  prisma: PrismaClient;
}
