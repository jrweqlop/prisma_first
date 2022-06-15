/*
  Warnings:

  - The primary key for the `librarian` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `librarian` table. All the data in the column will be lost.
  - The primary key for the `member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ID` on the `member` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "borrow_book" DROP CONSTRAINT "borrow_book_Librarian_ID_fkey";

-- DropForeignKey
ALTER TABLE "borrow_book" DROP CONSTRAINT "borrow_book_Member_ID_fkey";

-- AlterTable
ALTER TABLE "librarian" DROP CONSTRAINT "librarian_pkey",
DROP COLUMN "ID",
ADD COLUMN     "Librarian_ID" SERIAL NOT NULL,
ADD CONSTRAINT "librarian_pkey" PRIMARY KEY ("Librarian_ID");

-- AlterTable
ALTER TABLE "member" DROP CONSTRAINT "member_pkey",
DROP COLUMN "ID",
ADD COLUMN     "Member_ID" SERIAL NOT NULL,
ADD CONSTRAINT "member_pkey" PRIMARY KEY ("Member_ID");

-- AddForeignKey
ALTER TABLE "borrow_book" ADD CONSTRAINT "borrow_book_Member_ID_fkey" FOREIGN KEY ("Member_ID") REFERENCES "member"("Member_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_book" ADD CONSTRAINT "borrow_book_Librarian_ID_fkey" FOREIGN KEY ("Librarian_ID") REFERENCES "librarian"("Librarian_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
