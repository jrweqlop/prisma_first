/*
  Warnings:

  - Made the column `Borrow_Date` on table `borrow_book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Librarian_Issue` on table `librarian` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Librarian_Expiry` on table `librarian` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Member_Expiry` on table `member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Member_Issue` on table `member` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "borrow_book" ALTER COLUMN "Borrow_Date" SET NOT NULL,
ALTER COLUMN "Borrow_Date" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "librarian" ALTER COLUMN "Librarian_Issue" SET NOT NULL,
ALTER COLUMN "Librarian_Issue" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "Librarian_Expiry" SET NOT NULL,
ALTER COLUMN "Librarian_Expiry" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "member" ALTER COLUMN "Member_Expiry" SET NOT NULL,
ALTER COLUMN "Member_Expiry" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "Member_Issue" SET NOT NULL,
ALTER COLUMN "Member_Issue" SET DATA TYPE TIMESTAMP(3);

-- AlterTable
ALTER TABLE "return_book" ALTER COLUMN "Return_Date" SET DATA TYPE TIMESTAMP(3);
