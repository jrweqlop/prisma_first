-- AlterTable
ALTER TABLE "borrow_book" ALTER COLUMN "Borrow_Date" DROP NOT NULL;

-- AlterTable
ALTER TABLE "librarian" ALTER COLUMN "Librarian_Issue" DROP NOT NULL,
ALTER COLUMN "Librarian_Expiry" DROP NOT NULL;

-- AlterTable
ALTER TABLE "member" ALTER COLUMN "Member_Expiry" DROP NOT NULL,
ALTER COLUMN "Member_Issue" DROP NOT NULL;
