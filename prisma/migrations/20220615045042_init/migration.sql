-- CreateTable
CREATE TABLE "borrow_detail" (
    "BorrowDetail_ID" SERIAL NOT NULL,
    "Borrow_ID" INTEGER NOT NULL,
    "Book_ID" INTEGER NOT NULL,

    CONSTRAINT "borrow_detail_pkey" PRIMARY KEY ("BorrowDetail_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "borrow_detail_Borrow_ID_key" ON "borrow_detail"("Borrow_ID");

-- CreateIndex
CREATE UNIQUE INDEX "borrow_detail_Book_ID_key" ON "borrow_detail"("Book_ID");

-- AddForeignKey
ALTER TABLE "borrow_detail" ADD CONSTRAINT "borrow_detail_Book_ID_fkey" FOREIGN KEY ("Book_ID") REFERENCES "book"("Book_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "borrow_detail" ADD CONSTRAINT "borrow_detail_Borrow_ID_fkey" FOREIGN KEY ("Borrow_ID") REFERENCES "borrow_book"("Borrow_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
