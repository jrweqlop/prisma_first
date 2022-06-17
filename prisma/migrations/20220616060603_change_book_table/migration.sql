/*
  Warnings:

  - You are about to drop the `book_category` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `Book_Status` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_Book_Category_fkey";

-- AlterTable
ALTER TABLE "book" ADD COLUMN     "Book_Status" VARCHAR(30) NOT NULL;

-- DropTable
DROP TABLE "book_category";
