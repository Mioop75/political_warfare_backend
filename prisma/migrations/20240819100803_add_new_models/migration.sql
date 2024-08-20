/*
  Warnings:

  - You are about to drop the column `isPurchased` on the `info_improvement` table. All the data in the column will be lost.
  - You are about to drop the column `required_character_level` on the `info_improvement` table. All the data in the column will be lost.
  - You are about to drop the `_ImprovementToUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_required_improvements` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ImprovementToUser" DROP CONSTRAINT "_ImprovementToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_ImprovementToUser" DROP CONSTRAINT "_ImprovementToUser_B_fkey";

-- DropForeignKey
ALTER TABLE "_required_improvements" DROP CONSTRAINT "_required_improvements_A_fkey";

-- DropForeignKey
ALTER TABLE "_required_improvements" DROP CONSTRAINT "_required_improvements_B_fkey";

-- AlterTable
ALTER TABLE "info_improvement" DROP COLUMN "isPurchased",
DROP COLUMN "required_character_level",
ADD COLUMN     "required_level" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "_ImprovementToUser";

-- DropTable
DROP TABLE "_required_improvements";

-- CreateTable
CREATE TABLE "purchased_improvement" (
    "id" SERIAL NOT NULL,
    "improvement_uuid" UUID NOT NULL,
    "user_uuid" UUID NOT NULL,
    "info_Improvement_id" INTEGER NOT NULL,

    CONSTRAINT "purchased_improvement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "required_improvements" (
    "id" SERIAL NOT NULL,
    "info_Improvement_id" INTEGER NOT NULL,
    "other_info_improvement_id" INTEGER NOT NULL,

    CONSTRAINT "required_improvements_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "purchased_improvement" ADD CONSTRAINT "purchased_improvement_improvement_uuid_fkey" FOREIGN KEY ("improvement_uuid") REFERENCES "Improvement"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchased_improvement" ADD CONSTRAINT "purchased_improvement_user_uuid_fkey" FOREIGN KEY ("user_uuid") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "purchased_improvement" ADD CONSTRAINT "purchased_improvement_info_Improvement_id_fkey" FOREIGN KEY ("info_Improvement_id") REFERENCES "info_improvement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "required_improvements" ADD CONSTRAINT "required_improvements_info_Improvement_id_fkey" FOREIGN KEY ("info_Improvement_id") REFERENCES "info_improvement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "required_improvements" ADD CONSTRAINT "required_improvements_other_info_improvement_id_fkey" FOREIGN KEY ("other_info_improvement_id") REFERENCES "info_improvement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
