-- AlterTable
ALTER TABLE "book" ALTER COLUMN "Book_Category" DROP NOT NULL;

-- CreateTable
CREATE TABLE "book_category" (
    "ID" SERIAL NOT NULL,
    "Book_Category" TEXT,

    CONSTRAINT "book_category_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_category_Book_Category_key" ON "book_category"("Book_Category");

-- AddForeignKey
ALTER TABLE "book" ADD CONSTRAINT "book_Book_Category_fkey" FOREIGN KEY ("Book_Category") REFERENCES "book_category"("Book_Category") ON DELETE NO ACTION ON UPDATE NO ACTION;
