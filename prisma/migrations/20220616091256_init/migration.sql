/*
  Warnings:

  - You are about to alter the column `Book_Category` on the `book` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "book" ALTER COLUMN "Book_Category" SET DATA TYPE VARCHAR(30);

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_Member_ID_fkey" FOREIGN KEY ("Member_ID") REFERENCES "member"("Member_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_Librarian_ID_fkey" FOREIGN KEY ("Librarian_ID") REFERENCES "librarian"("Librarian_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
