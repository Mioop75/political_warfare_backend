-- DropForeignKey
ALTER TABLE "Purchased_improvement" DROP CONSTRAINT "Purchased_improvement_information_id_fkey";

-- AlterTable
ALTER TABLE "Purchased_improvement" ALTER COLUMN "information_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Purchased_improvement" ADD CONSTRAINT "Purchased_improvement_information_id_fkey" FOREIGN KEY ("information_id") REFERENCES "info_improvement"("id") ON DELETE SET NULL ON UPDATE CASCADE;
