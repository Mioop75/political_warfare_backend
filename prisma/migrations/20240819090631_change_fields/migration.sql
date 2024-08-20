/*
  Warnings:

  - You are about to drop the column `info_Improvement_id` on the `Improvement` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Improvement" DROP CONSTRAINT "Improvement_info_Improvement_id_fkey";

-- AlterTable
ALTER TABLE "Improvement" DROP COLUMN "info_Improvement_id";

-- CreateTable
CREATE TABLE "_required_improvements" (
    "A" UUID NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_required_improvements_AB_unique" ON "_required_improvements"("A", "B");

-- CreateIndex
CREATE INDEX "_required_improvements_B_index" ON "_required_improvements"("B");

-- AddForeignKey
ALTER TABLE "_required_improvements" ADD CONSTRAINT "_required_improvements_A_fkey" FOREIGN KEY ("A") REFERENCES "Improvement"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_required_improvements" ADD CONSTRAINT "_required_improvements_B_fkey" FOREIGN KEY ("B") REFERENCES "info_improvement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
