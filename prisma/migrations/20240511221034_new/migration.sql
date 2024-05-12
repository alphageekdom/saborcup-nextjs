/*
  Warnings:

  - You are about to drop the `MenuItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "MenuItem";

-- CreateTable
CREATE TABLE "Items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL,
    "isSeasonal" BOOLEAN NOT NULL,
    "images" TEXT[],
    "prices" JSONB NOT NULL,
    "sizes" TEXT[],

    CONSTRAINT "Items_pkey" PRIMARY KEY ("id")
);
