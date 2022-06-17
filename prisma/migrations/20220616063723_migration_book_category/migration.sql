/*
  Warnings:

  - You are about to alter the column `Book_Category` on the `book_category` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "book_category" ALTER COLUMN "Book_Category" SET DATA TYPE VARCHAR(30);
