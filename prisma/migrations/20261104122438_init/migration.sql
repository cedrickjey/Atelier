-- CreateEnum
CREATE TYPE "Category" AS ENUM ('costume', 'robe', 'chemise', 'manteau', 'accessoire');

-- CreateEnum
CREATE TYPE "Audience" AS ENUM ('homme', 'femme');

-- CreateEnum
CREATE TYPE "Size" AS ENUM ('XS', 'S', 'M', 'L', 'XL', 'XXL');

-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "priceInCents" INTEGER NOT NULL,
    "category" "Category" NOT NULL,
    "audience" "Audience" NOT NULL,
    "images" TEXT[],
    "sizes" "Size"[],
    "madeToMeasure" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");

-- CreateIndex
CREATE INDEX "Product_category_audience_idx" ON "Product"("category", "audience");
