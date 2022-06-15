/*
  Warnings:

  - The primary key for the `librarian` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Librarian_ID` on the `librarian` table. All the data in the column will be lost.
  - The primary key for the `member` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `Member_ID` on the `member` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "librarian" DROP CONSTRAINT "librarian_pkey",
DROP COLUMN "Librarian_ID",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD CONSTRAINT "librarian_pkey" PRIMARY KEY ("ID");

-- AlterTable
ALTER TABLE "member" DROP CONSTRAINT "member_pkey",
DROP COLUMN "Member_ID",
ADD COLUMN     "ID" SERIAL NOT NULL,
ADD CONSTRAINT "member_pkey" PRIMARY KEY ("ID");

-- CreateTable
CREATE TABLE "borrow_book" (
    "Borrow_ID" SERIAL NOT NULL,
    "Member_ID" INTEGER NOT NULL,
    "Librarian_ID" INTEGER NOT NULL,
    "Borrow_Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "borrow_book_pkey" PRIMARY KEY ("Borrow_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "borrow_book_Member_ID_key" ON "borrow_book"("Member_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_book_Librarian_ID_key" ON "borrow_book"("Librarian_ID");

-- AddForeignKey
ALTER TABLE "borrow_book" ADD CONSTRAINT "borrow_book_Member_ID_fkey" FOREIGN KEY ("Member_ID") REFERENCES "member"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_book" ADD CONSTRAINT "borrow_book_Librarian_ID_fkey" FOREIGN KEY ("Librarian_ID") REFERENCES "librarian"("ID") ON DELETE RESTRICT ON UPDATE CASCADE;
