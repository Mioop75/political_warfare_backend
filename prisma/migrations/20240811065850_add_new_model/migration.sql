/*
  Warnings:

  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[energy_id]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `energy_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "name",
ADD COLUMN     "energy_id" INTEGER NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Energy" (
    "id" SERIAL NOT NULL,
    "current" INTEGER NOT NULL DEFAULT 1000,
    "max" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "Energy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_energy_id_key" ON "User"("energy_id");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_energy_id_fkey" FOREIGN KEY ("energy_id") REFERENCES "Energy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
