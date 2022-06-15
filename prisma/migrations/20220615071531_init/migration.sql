/*
  Warnings:

  - The primary key for the `book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Book_Category` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `Book_ID` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `Book_Name` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `Book_Publishing` on the `book` table. All the data in the column will be lost.
  - The primary key for the `borrow_book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Borrow_Date` on the `borrow_book` table. All the data in the column will be lost.
  - You are about to drop the column `Borrow_ID` on the `borrow_book` table. All the data in the column will be lost.
  - You are about to drop the column `Librarian_ID` on the `borrow_book` table. All the data in the column will be lost.
  - You are about to drop the column `Member_ID` on the `borrow_book` table. All the data in the column will be lost.
  - The primary key for the `borrow_detail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Book_ID` on the `borrow_detail` table. All the data in the column will be lost.
  - You are about to drop the column `BorrowDetail_ID` on the `borrow_detail` table. All the data in the column will be lost.
  - You are about to drop the column `Borrow_ID` on the `borrow_detail` table. All the data in the column will be lost.
  - The primary key for the `librarian` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Librarian_Expiry` on the `librarian` table. All the data in the column will be lost.
  - You are about to drop the column `Librarian_ID` on the `librarian` table. All the data in the column will be lost.
  - You are about to drop the column `Librarian_Issue` on the `librarian` table. All the data in the column will be lost.
  - You are about to drop the column `Librarian_Name` on the `librarian` table. All the data in the column will be lost.
  - You are about to drop the column `Librarian_Phone` on the `librarian` table. All the data in the column will be lost.
  - The primary key for the `member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Member_Add` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `Member_Expiry` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `Member_ID` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `Member_Issue` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `Member_Name` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `Member_Phone` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `Member_Student_ID` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `Member_catagory` on the `member` table. All the data in the column will be lost.
  - The primary key for the `return_book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `BorrowDetail_ID` on the `return_book` table. All the data in the column will be lost.
  - You are about to drop the column `Librarian_ID` on the `return_book` table. All the data in the column will be lost.
  - You are about to drop the column `Member_ID` on the `return_book` table. All the data in the column will be lost.
  - You are about to drop the column `Return_Date` on the `return_book` table. All the data in the column will be lost.
  - You are about to drop the column `Return_ID` on the `return_book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[member_ID]` on the table `borrow_book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[librarian_ID]` on the table `borrow_book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[borrow_ID]` on the table `borrow_detail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[book_ID]` on the table `borrow_detail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[borrowDetail_ID]` on the table `return_book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[member_ID]` on the table `return_book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[librarian_ID]` on the table `return_book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `book_Category` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `book_Name` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `book_Publishing` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `librarian_ID` to the `borrow_book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_ID` to the `borrow_book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `book_ID` to the `borrow_detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `borrow_ID` to the `borrow_detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `librarian_Name` to the `librarian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `librarian_Phone` to the `librarian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_Add` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_Name` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_Phone` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_Student_ID` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_catagory` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `borrowDetail_ID` to the `return_book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `librarian_ID` to the `return_book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `member_ID` to the `return_book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "borrow_book" DROP CONSTRAINT "borrow_book_Librarian_ID_fkey";

-- DropForeignKey
ALTER TABLE "borrow_book" DROP CONSTRAINT "borrow_book_Member_ID_fkey";

-- DropForeignKey
ALTER TABLE "borrow_detail" DROP CONSTRAINT "borrow_detail_Book_ID_fkey";

-- DropForeignKey
ALTER TABLE "borrow_detail" DROP CONSTRAINT "borrow_detail_Borrow_ID_fkey";

-- DropForeignKey
ALTER TABLE "return_book" DROP CONSTRAINT "return_book_BorrowDetail_ID_fkey";

-- DropForeignKey
ALTER TABLE "return_book" DROP CONSTRAINT "return_book_Librarian_ID_fkey";

-- DropForeignKey
ALTER TABLE "return_book" DROP CONSTRAINT "return_book_Member_ID_fkey";

-- DropIndex
DROP INDEX "borrow_book_Librarian_ID_key";

-- DropIndex
DROP INDEX "borrow_book_Member_ID_key";

-- DropIndex
DROP INDEX "borrow_detail_Book_ID_key";

-- DropIndex
DROP INDEX "borrow_detail_Borrow_ID_key";

-- DropIndex
DROP INDEX "return_book_BorrowDetail_ID_key";

-- DropIndex
DROP INDEX "return_book_Librarian_ID_key";

-- DropIndex
DROP INDEX "return_book_Member_ID_key";

-- AlterTable
ALTER TABLE "book" DROP CONSTRAINT "book_pkey",
DROP COLUMN "Book_Category",
DROP COLUMN "Book_ID",
DROP COLUMN "Book_Name",
DROP COLUMN "Book_Publishing",
ADD COLUMN     "book_Category" VARCHAR(30) NOT NULL,
ADD COLUMN     "book_ID" SERIAL NOT NULL,
ADD COLUMN     "book_Name" VARCHAR(30) NOT NULL,
ADD COLUMN     "book_Publishing" VARCHAR(30) NOT NULL,
ADD CONSTRAINT "book_pkey" PRIMARY KEY ("book_ID");

-- AlterTable
ALTER TABLE "borrow_book" DROP CONSTRAINT "borrow_book_pkey",
DROP COLUMN "Borrow_Date",
DROP COLUMN "Borrow_ID",
DROP COLUMN "Librarian_ID",
DROP COLUMN "Member_ID",
ADD COLUMN     "borrow_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "borrow_ID" SERIAL NOT NULL,
ADD COLUMN     "librarian_ID" INTEGER NOT NULL,
ADD COLUMN     "member_ID" INTEGER NOT NULL,
ADD CONSTRAINT "borrow_book_pkey" PRIMARY KEY ("borrow_ID");

-- AlterTable
ALTER TABLE "borrow_detail" DROP CONSTRAINT "borrow_detail_pkey",
DROP COLUMN "Book_ID",
DROP COLUMN "BorrowDetail_ID",
DROP COLUMN "Borrow_ID",
ADD COLUMN     "book_ID" INTEGER NOT NULL,
ADD COLUMN     "borrowDetail_ID" SERIAL NOT NULL,
ADD COLUMN     "borrow_ID" INTEGER NOT NULL,
ADD CONSTRAINT "borrow_detail_pkey" PRIMARY KEY ("borrowDetail_ID");

-- AlterTable
ALTER TABLE "librarian" DROP CONSTRAINT "librarian_pkey",
DROP COLUMN "Librarian_Expiry",
DROP COLUMN "Librarian_ID",
DROP COLUMN "Librarian_Issue",
DROP COLUMN "Librarian_Name",
DROP COLUMN "Librarian_Phone",
ADD COLUMN     "librarian_Expiry" TEXT,
ADD COLUMN     "librarian_ID" SERIAL NOT NULL,
ADD COLUMN     "librarian_Issue" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "librarian_Name" VARCHAR(30) NOT NULL,
ADD COLUMN     "librarian_Phone" VARCHAR(10) NOT NULL,
ADD CONSTRAINT "librarian_pkey" PRIMARY KEY ("librarian_ID");

-- AlterTable
ALTER TABLE "member" DROP CONSTRAINT "member_pkey",
DROP COLUMN "Member_Add",
DROP COLUMN "Member_Expiry",
DROP COLUMN "Member_ID",
DROP COLUMN "Member_Issue",
DROP COLUMN "Member_Name",
DROP COLUMN "Member_Phone",
DROP COLUMN "Member_Student_ID",
DROP COLUMN "Member_catagory",
ADD COLUMN     "member_Add" VARCHAR(30) NOT NULL,
ADD COLUMN     "member_Expiry" TIMESTAMP(3),
ADD COLUMN     "member_ID" SERIAL NOT NULL,
ADD COLUMN     "member_Issue" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "member_Name" VARCHAR(15) NOT NULL,
ADD COLUMN     "member_Phone" VARCHAR(10) NOT NULL,
ADD COLUMN     "member_Student_ID" VARCHAR(10) NOT NULL,
ADD COLUMN     "member_catagory" VARCHAR(10) NOT NULL,
ADD CONSTRAINT "member_pkey" PRIMARY KEY ("member_ID");

-- AlterTable
ALTER TABLE "return_book" DROP CONSTRAINT "return_book_pkey",
DROP COLUMN "BorrowDetail_ID",
DROP COLUMN "Librarian_ID",
DROP COLUMN "Member_ID",
DROP COLUMN "Return_Date",
DROP COLUMN "Return_ID",
ADD COLUMN     "borrowDetail_ID" INTEGER NOT NULL,
ADD COLUMN     "librarian_ID" INTEGER NOT NULL,
ADD COLUMN     "member_ID" INTEGER NOT NULL,
ADD COLUMN     "return_Date" TIMESTAMP(3),
ADD COLUMN     "return_ID" SERIAL NOT NULL,
ADD CONSTRAINT "return_book_pkey" PRIMARY KEY ("return_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_book_member_ID_key" ON "borrow_book"("member_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_book_librarian_ID_key" ON "borrow_book"("librarian_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_detail_borrow_ID_key" ON "borrow_detail"("borrow_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_detail_book_ID_key" ON "borrow_detail"("book_ID");

-- CreateIndex
CREATE UNIQUE INDEX "return_book_borrowDetail_ID_key" ON "return_book"("borrowDetail_ID");

-- CreateIndex
CREATE UNIQUE INDEX "return_book_member_ID_key" ON "return_book"("member_ID");

-- CreateIndex
CREATE UNIQUE INDEX "return_book_librarian_ID_key" ON "return_book"("librarian_ID");

-- AddForeignKey
ALTER TABLE "borrow_book" ADD CONSTRAINT "borrow_book_member_ID_fkey" FOREIGN KEY ("member_ID") REFERENCES "member"("member_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_book" ADD CONSTRAINT "borrow_book_librarian_ID_fkey" FOREIGN KEY ("librarian_ID") REFERENCES "librarian"("librarian_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_detail" ADD CONSTRAINT "borrow_detail_book_ID_fkey" FOREIGN KEY ("book_ID") REFERENCES "book"("book_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_detail" ADD CONSTRAINT "borrow_detail_borrow_ID_fkey" FOREIGN KEY ("borrow_ID") REFERENCES "borrow_book"("borrow_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_member_ID_fkey" FOREIGN KEY ("member_ID") REFERENCES "member"("member_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_librarian_ID_fkey" FOREIGN KEY ("librarian_ID") REFERENCES "librarian"("librarian_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_borrowDetail_ID_fkey" FOREIGN KEY ("borrowDetail_ID") REFERENCES "borrow_detail"("borrowDetail_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
