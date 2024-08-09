/*
  Warnings:

  - You are about to drop the column `level` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[level_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `level_id` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "level",
ADD COLUMN     "level_id" INTEGER NOT NULL,
ALTER COLUMN "coins" SET DEFAULT 0,
ALTER COLUMN "coins" SET DATA TYPE DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "current" INTEGER NOT NULL DEFAULT 0,
    "sum" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_level_id_key" ON "User"("level_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
