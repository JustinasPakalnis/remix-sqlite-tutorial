// app/db.server.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// Use a global variable to avoid multiple instances of Prisma Client in development mode
declare global {
  var __db: PrismaClient | undefined;
}

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
  }
  prisma = global.__db;
}

export { prisma };
