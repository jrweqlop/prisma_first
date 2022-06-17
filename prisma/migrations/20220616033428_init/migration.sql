/*
  Warnings:

  - You are about to drop the `book_category` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_Book_Category_fkey";

-- DropTable
DROP TABLE "book_category";
