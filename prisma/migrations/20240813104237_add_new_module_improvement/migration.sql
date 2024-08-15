/*
  Warnings:

  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_user_uuid_fkey";

-- DropTable
DROP TABLE "Session";

-- CreateTable
CREATE TABLE "Improvement" (
    "uuid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "cost" INTEGER NOT NULL,
    "required_level" INTEGER NOT NULL,
    "profit" INTEGER NOT NULL,

    CONSTRAINT "Improvement_pkey" PRIMARY KEY ("uuid")
);
