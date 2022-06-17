-- CreateTable
CREATE TABLE "book_category" (
    "ID" SERIAL NOT NULL,
    "Book_Category" TEXT,

    CONSTRAINT "book_category_pkey" PRIMARY KEY ("ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "book_category_Book_Category_key" ON "book_category"("Book_Category");
