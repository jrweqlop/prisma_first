-- AlterTable
ALTER TABLE "borrow_book" ALTER COLUMN "Borrow_Date" DROP DEFAULT;

-- AlterTable
ALTER TABLE "librarian" ALTER COLUMN "Librarian_Issue" DROP DEFAULT,
ALTER COLUMN "Librarian_Expiry" DROP DEFAULT;

-- AlterTable
ALTER TABLE "member" ALTER COLUMN "Member_Expiry" DROP DEFAULT,
ALTER COLUMN "Member_Issue" DROP DEFAULT;

-- AlterTable
ALTER TABLE "return_book" ALTER COLUMN "Return_Date" DROP DEFAULT;
