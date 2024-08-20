/*
  Warnings:

  - You are about to drop the column `purchased_improvement_id` on the `info_improvement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[information_id]` on the table `Purchased_improvement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `information_id` to the `Purchased_improvement` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "info_improvement" DROP CONSTRAINT "info_improvement_purchased_improvement_id_fkey";

-- DropIndex
DROP INDEX "info_improvement_purchased_improvement_id_key";

-- AlterTable
ALTER TABLE "Purchased_improvement" ADD COLUMN     "information_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "info_improvement" DROP COLUMN "purchased_improvement_id";

-- CreateIndex
CREATE UNIQUE INDEX "Purchased_improvement_information_id_key" ON "Purchased_improvement"("information_id");

-- AddForeignKey
ALTER TABLE "Purchased_improvement" ADD CONSTRAINT "Purchased_improvement_information_id_fkey" FOREIGN KEY ("information_id") REFERENCES "info_improvement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
