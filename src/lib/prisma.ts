// I import the Prisma Client generated from my schema.
import { PrismaClient } from "../generated/prisma/client";
// I use the PostgreSQL driver adapter to connect Prisma to my database.
import { PrismaPg } from "@prisma/adapter-pg";

// I read the database connection string from the environment instead of hard-coding it.
const connectionString = process.env.DATABASE_URL;

// I stop initialization early with a clear error if the required connection string is missing.
if (!connectionString) {
  throw new Error("DATABASE_URL must be set to connect to the database.");
}

// I configure the PostgreSQL adapter with my connection string.
const adapter = new PrismaPg({ connectionString });

// I export one configured Prisma Client for the rest of my server-side code to reuse.
export const prisma = new PrismaClient({ adapter });