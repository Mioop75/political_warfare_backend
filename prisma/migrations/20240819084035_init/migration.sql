-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA "public";

-- CreateTable
CREATE TABLE "User" (
    "uuid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "first_name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "created_at" TIMESTAMPTZ(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(3) NOT NULL,
    "telegram_id" BIGINT NOT NULL,
    "isInstructioned" BOOLEAN NOT NULL DEFAULT false,
    "profit" DOUBLE PRECISION NOT NULL DEFAULT 3600,
    "coins" DOUBLE PRECISION NOT NULL DEFAULT 4000,
    "level_id" INTEGER NOT NULL,
    "energy_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "Level" (
    "id" SERIAL NOT NULL,
    "current" INTEGER NOT NULL DEFAULT 0,
    "percent" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "sum" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Energy" (
    "id" SERIAL NOT NULL,
    "current" INTEGER NOT NULL DEFAULT 1000,
    "max" INTEGER NOT NULL DEFAULT 1000,

    CONSTRAINT "Energy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Improvement" (
    "uuid" UUID NOT NULL DEFAULT uuid_generate_v4(),
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "info_Improvement_id" INTEGER,

    CONSTRAINT "Improvement_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "info_improvement" (
    "id" SERIAL NOT NULL,
    "cost" INTEGER NOT NULL,
    "profit" INTEGER NOT NULL,
    "required_level" INTEGER NOT NULL,
    "isPurchased" BOOLEAN NOT NULL DEFAULT false,
    "improvement_uuid" UUID NOT NULL,

    CONSTRAINT "info_improvement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ImprovementToUser" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_telegram_id_key" ON "User"("telegram_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_level_id_key" ON "User"("level_id");

-- CreateIndex
CREATE UNIQUE INDEX "User_energy_id_key" ON "User"("energy_id");

-- CreateIndex
CREATE UNIQUE INDEX "_ImprovementToUser_AB_unique" ON "_ImprovementToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_ImprovementToUser_B_index" ON "_ImprovementToUser"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_level_id_fkey" FOREIGN KEY ("level_id") REFERENCES "Level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_energy_id_fkey" FOREIGN KEY ("energy_id") REFERENCES "Energy"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Improvement" ADD CONSTRAINT "Improvement_info_Improvement_id_fkey" FOREIGN KEY ("info_Improvement_id") REFERENCES "info_improvement"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "info_improvement" ADD CONSTRAINT "info_improvement_improvement_uuid_fkey" FOREIGN KEY ("improvement_uuid") REFERENCES "Improvement"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImprovementToUser" ADD CONSTRAINT "_ImprovementToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Improvement"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ImprovementToUser" ADD CONSTRAINT "_ImprovementToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("uuid") ON DELETE CASCADE ON UPDATE CASCADE;
