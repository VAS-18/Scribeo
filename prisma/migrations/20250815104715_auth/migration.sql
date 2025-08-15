/*
  Warnings:

  - Made the column `name` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX "public"."account_providerId_accountId_key";

-- AlterTable
ALTER TABLE "public"."account" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."session" ALTER COLUMN "createdAt" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."user" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "createdAt" DROP DEFAULT,
ALTER COLUMN "emailVerified" DROP DEFAULT;

-- AlterTable
ALTER TABLE "public"."verification" ALTER COLUMN "createdAt" DROP DEFAULT;
