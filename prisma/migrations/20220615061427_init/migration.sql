/*
  Warnings:

  - You are about to drop the column `Book_Catagory` on the `book` table. All the data in the column will be lost.
  - Added the required column `Book_Category` to the `book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "book" DROP COLUMN "Book_Catagory",
ADD COLUMN     "Book_Category" VARCHAR(30) NOT NULL;

-- CreateTable
CREATE TABLE "book_category" (
    "Book_category_ID" SERIAL NOT NULL,

    CONSTRAINT "book_category_pkey" PRIMARY KEY ("Book_category_ID")
);
