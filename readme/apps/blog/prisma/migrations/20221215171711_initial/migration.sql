/*
  Warnings:

  - You are about to drop the column `category` on the `Article` table. All the data in the column will be lost.
  - The primary key for the `PropertiesOnartical` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `tegCategory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tegId` to the `PropertiesOnartical` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "PropertiesOnartical" DROP CONSTRAINT "PropertiesOnartical_categoryId_fkey";

-- AlterTable
ALTER TABLE "Article" DROP COLUMN "category";

-- AlterTable
ALTER TABLE "PropertiesOnartical" DROP CONSTRAINT "PropertiesOnartical_pkey",
ADD COLUMN     "tegId" INTEGER NOT NULL,
ADD CONSTRAINT "PropertiesOnartical_pkey" PRIMARY KEY ("articalId", "categoryId", "tegId");

-- DropTable
DROP TABLE "tegCategory";

-- CreateTable
CREATE TABLE "TegCategory" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "TegCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ArticleToCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_ArticleToTegCategory" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleToCategory_AB_unique" ON "_ArticleToCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleToCategory_B_index" ON "_ArticleToCategory"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_ArticleToTegCategory_AB_unique" ON "_ArticleToTegCategory"("A", "B");

-- CreateIndex
CREATE INDEX "_ArticleToTegCategory_B_index" ON "_ArticleToTegCategory"("B");

-- AddForeignKey
ALTER TABLE "PropertiesOnartical" ADD CONSTRAINT "PropertiesOnartical_tegId_fkey" FOREIGN KEY ("tegId") REFERENCES "TegCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PropertiesOnartical" ADD CONSTRAINT "PropertiesOnartical_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToCategory" ADD CONSTRAINT "_ArticleToCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToCategory" ADD CONSTRAINT "_ArticleToCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToTegCategory" ADD CONSTRAINT "_ArticleToTegCategory_A_fkey" FOREIGN KEY ("A") REFERENCES "Article"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ArticleToTegCategory" ADD CONSTRAINT "_ArticleToTegCategory_B_fkey" FOREIGN KEY ("B") REFERENCES "TegCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
