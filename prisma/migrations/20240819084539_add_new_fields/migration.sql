/*
  Warnings:

  - You are about to drop the column `required_level` on the `info_improvement` table. All the data in the column will be lost.
  - Added the required column `level` to the `info_improvement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "info_improvement" DROP COLUMN "required_level",
ADD COLUMN     "level" INTEGER NOT NULL,
ADD COLUMN     "required_character_level" INTEGER;
