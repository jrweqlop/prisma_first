-- AlterTable
ALTER TABLE "borrow_book" ALTER COLUMN "Borrow_Date" DROP NOT NULL,
ALTER COLUMN "Borrow_Date" DROP DEFAULT;

-- AlterTable
ALTER TABLE "librarian" ALTER COLUMN "Librarian_Issue" DROP NOT NULL,
ALTER COLUMN "Librarian_Issue" DROP DEFAULT;

-- AlterTable
ALTER TABLE "member" ALTER COLUMN "Member_Issue" DROP NOT NULL,
ALTER COLUMN "Member_Issue" DROP DEFAULT;
