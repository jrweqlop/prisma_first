/*
  Warnings:

  - The `Librarian_Expiry` column on the `librarian` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `Borrow_Date` on table `borrow_book` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Librarian_Issue` on table `librarian` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Member_Expiry` on table `member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Member_Issue` on table `member` required. This step will fail if there are existing NULL values in that column.
  - Made the column `Return_Date` on table `return_book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "borrow_book" ALTER COLUMN "Borrow_Date" SET NOT NULL,
ALTER COLUMN "Borrow_Date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "Borrow_Date" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "librarian" DROP COLUMN "Librarian_Expiry",
ADD COLUMN     "Librarian_Expiry" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "Librarian_Issue" SET NOT NULL,
ALTER COLUMN "Librarian_Issue" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "Librarian_Issue" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "member" ALTER COLUMN "Member_Expiry" SET NOT NULL,
ALTER COLUMN "Member_Expiry" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "Member_Expiry" SET DATA TYPE DATE,
ALTER COLUMN "Member_Issue" SET NOT NULL,
ALTER COLUMN "Member_Issue" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "Member_Issue" SET DATA TYPE DATE;

-- AlterTable
ALTER TABLE "return_book" ALTER COLUMN "Return_Date" SET NOT NULL,
ALTER COLUMN "Return_Date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "Return_Date" SET DATA TYPE DATE;
