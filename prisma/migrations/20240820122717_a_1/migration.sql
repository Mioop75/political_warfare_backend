/*
  Warnings:

  - You are about to drop the `purchased_improvement` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[purchased_improvement_id]` on the table `info_improvement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `purchased_improvement_id` to the `info_improvement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "info_improvement" DROP CONSTRAINT "info_improvement_improvement_uuid_fkey";

-- DropForeignKey
ALTER TABLE "purchased_improvement" DROP CONSTRAINT "purchased_improvement_improvement_uuid_fkey";

-- DropForeignKey
ALTER TABLE "purchased_improvement" DROP CONSTRAINT "purchased_improvement_info_Improvement_id_fkey";

-- DropForeignKey
ALTER TABLE "purchased_improvement" DROP CONSTRAINT "purchased_improvement_user_uuid_fkey";

-- AlterTable
ALTER TABLE "info_improvement" ADD COLUMN     "purchased_improvement_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "purchased_improvement";

-- CreateTable
CREATE TABLE "Purchased_improvement" (
    "id" SERIAL NOT NULL,
    "purchased" BOOLEAN NOT NULL DEFAULT false,
    "improvement_uuid" UUID,

    CONSTRAINT "Purchased_improvement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_Purchased_improvementToUser" (
    "A" INTEGER NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Purchased_improvementToUser_AB_unique" ON "_Purchased_improvementToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_Purchased_improvementToUser_B_index" ON "_Purchased_improvementToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "info_improvement_purchased_improvement_id_key" ON "info_improvement"("purchased_improvement_id");

-- AddForeignKey
ALTER TABLE "Purchased_improvement" ADD CONSTRAINT "Purchased_improvement_improvement_uuid_fkey" FOREIGN KEY ("improvement_uuid") REFERENCES "Improvement"("uuid") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "info_improvement" ADD CONSTRAINT "info_improvement_purchased_improvement_id_fkey" FOREIGN KEY ("purchased_improvement_id") REFERENCES "Purchased_improvement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Purchased_improvementToUser" ADD CONSTRAINT "_Purchased_improvementToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Purchased_improvement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Purchased_improvementToUser" ADD CONSTRAINT "_Purchased_improvementToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
