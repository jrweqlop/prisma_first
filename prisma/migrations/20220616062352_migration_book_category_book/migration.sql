/*
  Warnings:

  - You are about to drop the column `Book_Status` on the `book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "book" DROP COLUMN "Book_Status";

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_Book_Category_fkey" FOREIGN KEY ("Book_Category") REFERENCES "book_category"("Book_Category") ON DELETE NO ACTION ON UPDATE NO ACTION;
