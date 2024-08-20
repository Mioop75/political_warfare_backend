/*
  Warnings:

  - You are about to drop the column `info_Improvement_id` on the `required_improvements` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[invited_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `info_improvement_id` to the `required_improvements` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "required_improvements" DROP CONSTRAINT "required_improvements_info_Improvement_id_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "invited_id" INTEGER;

-- AlterTable
ALTER TABLE "required_improvements" DROP COLUMN "info_Improvement_id",
ADD COLUMN     "info_improvement_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Referral" (
    "id" SERIAL NOT NULL,
    "referral_uuid" UUID NOT NULL,

    CONSTRAINT "Referral_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_invited_id_key" ON "User"("invited_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_invited_id_fkey" FOREIGN KEY ("invited_id") REFERENCES "Referral"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Referral" ADD CONSTRAINT "Referral_referral_uuid_fkey" FOREIGN KEY ("referral_uuid") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "required_improvements" ADD CONSTRAINT "required_improvements_info_improvement_id_fkey" FOREIGN KEY ("info_improvement_id") REFERENCES "info_improvement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
