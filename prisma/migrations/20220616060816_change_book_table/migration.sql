/*
  Warnings:

  - Added the required column `Book_Status` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book" ADD COLUMN     "Book_Status" VARCHAR(30) NOT NULL;
