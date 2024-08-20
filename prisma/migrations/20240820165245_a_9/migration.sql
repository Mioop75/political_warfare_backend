/*
  Warnings:

  - You are about to drop the column `invited_id` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[invited_uuid]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_invited_id_fkey";

-- DropIndex
DROP INDEX "User_invited_id_key";

-- AlterTable
ALTER TABLE "Referral" ADD COLUMN     "invited_uuid" UUID;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "invited_id";

-- CreateIndex
CREATE UNIQUE INDEX "Referral_invited_uuid_key" ON "Referral"("invited_uuid");

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_invited_uuid_fkey" FOREIGN KEY ("invited_uuid") REFERENCES "User"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;
