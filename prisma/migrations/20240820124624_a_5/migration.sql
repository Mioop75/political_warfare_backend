/*
  Warnings:

  - You are about to drop the column `information_id` on the `Purchased_improvement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[purchased_improvement_id]` on the table `info_improvement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `purchased_improvement_id` to the `info_improvement` table without a default value. This is not possible if the table is not empty.
  - Made the column `improvement_uuid` on table `info_improvement` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Purchased_improvement" DROP CONSTRAINT "Purchased_improvement_information_id_fkey";

-- DropIndex
DROP INDEX "Purchased_improvement_information_id_key";

-- AlterTable
ALTER TABLE "Purchased_improvement" DROP COLUMN "information_id";

-- AlterTable
ALTER TABLE "info_improvement" ADD COLUMN     "purchased_improvement_id" INTEGER NOT NULL,
ALTER COLUMN "improvement_uuid" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "info_improvement_purchased_improvement_id_key" ON "info_improvement"("purchased_improvement_id");

-- AddForeignKey
ALTER TABLE "info_improvement" ADD CONSTRAINT "info_improvement_purchased_improvement_id_fkey" FOREIGN KEY ("purchased_improvement_id") REFERENCES "Purchased_improvement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
