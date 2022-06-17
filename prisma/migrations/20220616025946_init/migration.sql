/*
  Warnings:

  - Made the column `Book_Category` on table `book_category` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "book_category" ALTER COLUMN "Book_Category" SET NOT NULL;
