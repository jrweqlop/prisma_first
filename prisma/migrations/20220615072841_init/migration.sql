/*
  Warnings:

  - The primary key for the `book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `book_Category` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `book_ID` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `book_Name` on the `book` table. All the data in the column will be lost.
  - You are about to drop the column `book_Publishing` on the `book` table. All the data in the column will be lost.
  - The primary key for the `borrow_book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `borrow_Date` on the `borrow_book` table. All the data in the column will be lost.
  - You are about to drop the column `borrow_ID` on the `borrow_book` table. All the data in the column will be lost.
  - You are about to drop the column `librarian_ID` on the `borrow_book` table. All the data in the column will be lost.
  - You are about to drop the column `member_ID` on the `borrow_book` table. All the data in the column will be lost.
  - The primary key for the `borrow_detail` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `book_ID` on the `borrow_detail` table. All the data in the column will be lost.
  - You are about to drop the column `borrowDetail_ID` on the `borrow_detail` table. All the data in the column will be lost.
  - You are about to drop the column `borrow_ID` on the `borrow_detail` table. All the data in the column will be lost.
  - The primary key for the `librarian` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `librarian_Expiry` on the `librarian` table. All the data in the column will be lost.
  - You are about to drop the column `librarian_ID` on the `librarian` table. All the data in the column will be lost.
  - You are about to drop the column `librarian_Issue` on the `librarian` table. All the data in the column will be lost.
  - You are about to drop the column `librarian_Name` on the `librarian` table. All the data in the column will be lost.
  - You are about to drop the column `librarian_Phone` on the `librarian` table. All the data in the column will be lost.
  - The primary key for the `member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `member_Add` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `member_Expiry` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `member_ID` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `member_Issue` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `member_Name` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `member_Phone` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `member_Student_ID` on the `member` table. All the data in the column will be lost.
  - You are about to drop the column `member_catagory` on the `member` table. All the data in the column will be lost.
  - The primary key for the `return_book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `borrowDetail_ID` on the `return_book` table. All the data in the column will be lost.
  - You are about to drop the column `librarian_ID` on the `return_book` table. All the data in the column will be lost.
  - You are about to drop the column `member_ID` on the `return_book` table. All the data in the column will be lost.
  - You are about to drop the column `return_Date` on the `return_book` table. All the data in the column will be lost.
  - You are about to drop the column `return_ID` on the `return_book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[Member_ID]` on the table `borrow_book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Librarian_ID]` on the table `borrow_book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Borrow_ID]` on the table `borrow_detail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Book_ID]` on the table `borrow_detail` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[BorrowDetail_ID]` on the table `return_book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Member_ID]` on the table `return_book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[Librarian_ID]` on the table `return_book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `Book_Category` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Book_Name` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Book_Publishing` to the `book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Librarian_ID` to the `borrow_book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Member_ID` to the `borrow_book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Book_ID` to the `borrow_detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Borrow_ID` to the `borrow_detail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Librarian_Name` to the `librarian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Librarian_Phone` to the `librarian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Member_Add` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Member_Catagory` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Member_Name` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Member_Phone` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Member_Student_ID` to the `member` table without a default value. This is not possible if the table is not empty.
  - Added the required column `BorrowDetail_ID` to the `return_book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Librarian_ID` to the `return_book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `Member_ID` to the `return_book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "borrow_book" DROP CONSTRAINT "borrow_book_librarian_ID_fkey";

-- DropForeignKey
ALTER TABLE "borrow_book" DROP CONSTRAINT "borrow_book_member_ID_fkey";

-- DropForeignKey
ALTER TABLE "borrow_detail" DROP CONSTRAINT "borrow_detail_book_ID_fkey";

-- DropForeignKey
ALTER TABLE "borrow_detail" DROP CONSTRAINT "borrow_detail_borrow_ID_fkey";

-- DropForeignKey
ALTER TABLE "return_book" DROP CONSTRAINT "return_book_borrowDetail_ID_fkey";

-- DropForeignKey
ALTER TABLE "return_book" DROP CONSTRAINT "return_book_librarian_ID_fkey";

-- DropForeignKey
ALTER TABLE "return_book" DROP CONSTRAINT "return_book_member_ID_fkey";

-- DropIndex
DROP INDEX "borrow_book_librarian_ID_key";

-- DropIndex
DROP INDEX "borrow_book_member_ID_key";

-- DropIndex
DROP INDEX "borrow_detail_book_ID_key";

-- DropIndex
DROP INDEX "borrow_detail_borrow_ID_key";

-- DropIndex
DROP INDEX "return_book_borrowDetail_ID_key";

-- DropIndex
DROP INDEX "return_book_librarian_ID_key";

-- DropIndex
DROP INDEX "return_book_member_ID_key";

-- AlterTable
ALTER TABLE "book" DROP CONSTRAINT "book_pkey",
DROP COLUMN "book_Category",
DROP COLUMN "book_ID",
DROP COLUMN "book_Name",
DROP COLUMN "book_Publishing",
ADD COLUMN     "Book_Category" VARCHAR(30) NOT NULL,
ADD COLUMN     "Book_ID" SERIAL NOT NULL,
ADD COLUMN     "Book_Name" VARCHAR(30) NOT NULL,
ADD COLUMN     "Book_Publishing" VARCHAR(30) NOT NULL,
ADD CONSTRAINT "book_pkey" PRIMARY KEY ("Book_ID");

-- AlterTable
ALTER TABLE "borrow_book" DROP CONSTRAINT "borrow_book_pkey",
DROP COLUMN "borrow_Date",
DROP COLUMN "borrow_ID",
DROP COLUMN "librarian_ID",
DROP COLUMN "member_ID",
ADD COLUMN     "Borrow_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Borrow_ID" SERIAL NOT NULL,
ADD COLUMN     "Librarian_ID" INTEGER NOT NULL,
ADD COLUMN     "Member_ID" INTEGER NOT NULL,
ADD CONSTRAINT "borrow_book_pkey" PRIMARY KEY ("Borrow_ID");

-- AlterTable
ALTER TABLE "borrow_detail" DROP CONSTRAINT "borrow_detail_pkey",
DROP COLUMN "book_ID",
DROP COLUMN "borrowDetail_ID",
DROP COLUMN "borrow_ID",
ADD COLUMN     "Book_ID" INTEGER NOT NULL,
ADD COLUMN     "BorrowDetail_ID" SERIAL NOT NULL,
ADD COLUMN     "Borrow_ID" INTEGER NOT NULL,
ADD CONSTRAINT "borrow_detail_pkey" PRIMARY KEY ("BorrowDetail_ID");

-- AlterTable
ALTER TABLE "librarian" DROP CONSTRAINT "librarian_pkey",
DROP COLUMN "librarian_Expiry",
DROP COLUMN "librarian_ID",
DROP COLUMN "librarian_Issue",
DROP COLUMN "librarian_Name",
DROP COLUMN "librarian_Phone",
ADD COLUMN     "Librarian_Expiry" TEXT,
ADD COLUMN     "Librarian_ID" SERIAL NOT NULL,
ADD COLUMN     "Librarian_Issue" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Librarian_Name" VARCHAR(30) NOT NULL,
ADD COLUMN     "Librarian_Phone" VARCHAR(10) NOT NULL,
ADD CONSTRAINT "librarian_pkey" PRIMARY KEY ("Librarian_ID");

-- AlterTable
ALTER TABLE "member" DROP CONSTRAINT "member_pkey",
DROP COLUMN "member_Add",
DROP COLUMN "member_Expiry",
DROP COLUMN "member_ID",
DROP COLUMN "member_Issue",
DROP COLUMN "member_Name",
DROP COLUMN "member_Phone",
DROP COLUMN "member_Student_ID",
DROP COLUMN "member_catagory",
ADD COLUMN     "Member_Add" VARCHAR(30) NOT NULL,
ADD COLUMN     "Member_Catagory" VARCHAR(10) NOT NULL,
ADD COLUMN     "Member_Expiry" TIMESTAMP(3),
ADD COLUMN     "Member_ID" SERIAL NOT NULL,
ADD COLUMN     "Member_Issue" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "Member_Name" VARCHAR(15) NOT NULL,
ADD COLUMN     "Member_Phone" VARCHAR(10) NOT NULL,
ADD COLUMN     "Member_Student_ID" VARCHAR(10) NOT NULL,
ADD CONSTRAINT "member_pkey" PRIMARY KEY ("Member_ID");

-- AlterTable
ALTER TABLE "return_book" DROP CONSTRAINT "return_book_pkey",
DROP COLUMN "borrowDetail_ID",
DROP COLUMN "librarian_ID",
DROP COLUMN "member_ID",
DROP COLUMN "return_Date",
DROP COLUMN "return_ID",
ADD COLUMN     "BorrowDetail_ID" INTEGER NOT NULL,
ADD COLUMN     "Librarian_ID" INTEGER NOT NULL,
ADD COLUMN     "Member_ID" INTEGER NOT NULL,
ADD COLUMN     "Return_Date" TIMESTAMP(3),
ADD COLUMN     "Return_ID" SERIAL NOT NULL,
ADD CONSTRAINT "return_book_pkey" PRIMARY KEY ("Return_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_book_Member_ID_key" ON "borrow_book"("Member_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_book_Librarian_ID_key" ON "borrow_book"("Librarian_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_detail_Borrow_ID_key" ON "borrow_detail"("Borrow_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_detail_Book_ID_key" ON "borrow_detail"("Book_ID");

-- CreateIndex
CREATE UNIQUE INDEX "return_book_BorrowDetail_ID_key" ON "return_book"("BorrowDetail_ID");

-- CreateIndex
CREATE UNIQUE INDEX "return_book_Member_ID_key" ON "return_book"("Member_ID");

-- CreateIndex
CREATE UNIQUE INDEX "return_book_Librarian_ID_key" ON "return_book"("Librarian_ID");

-- AddForeignKey
ALTER TABLE "borrow_book" ADD CONSTRAINT "borrow_book_Member_ID_fkey" FOREIGN KEY ("Member_ID") REFERENCES "member"("Member_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_book" ADD CONSTRAINT "borrow_book_Librarian_ID_fkey" FOREIGN KEY ("Librarian_ID") REFERENCES "librarian"("Librarian_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_detail" ADD CONSTRAINT "borrow_detail_Book_ID_fkey" FOREIGN KEY ("Book_ID") REFERENCES "book"("Book_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_detail" ADD CONSTRAINT "borrow_detail_Borrow_ID_fkey" FOREIGN KEY ("Borrow_ID") REFERENCES "borrow_book"("Borrow_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_Member_ID_fkey" FOREIGN KEY ("Member_ID") REFERENCES "member"("Member_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_Librarian_ID_fkey" FOREIGN KEY ("Librarian_ID") REFERENCES "librarian"("Librarian_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_BorrowDetail_ID_fkey" FOREIGN KEY ("BorrowDetail_ID") REFERENCES "borrow_detail"("BorrowDetail_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
