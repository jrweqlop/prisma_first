-- DropForeignKey
ALTER TABLE "book" DROP CONSTRAINT "book_Book_Category_fkey";

-- AlterTable
ALTER TABLE "book" ALTER COLUMN "Book_Category" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "book_category" ALTER COLUMN "Book_Category" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_Book_Category_fkey" FOREIGN KEY ("Book_Category") REFERENCES "book_category"("Book_Category") ON DELETE NO ACTION ON UPDATE NO ACTION;
