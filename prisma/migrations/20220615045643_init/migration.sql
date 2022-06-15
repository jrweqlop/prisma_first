-- CreateTable
CREATE TABLE "return_book" (
    "Return_ID" SERIAL NOT NULL,
    "Return_Date" TIMESTAMP(3),
    "BorrowDetail_ID" INTEGER NOT NULL,
    "Member_ID" INTEGER NOT NULL,
    "Librarian_ID" INTEGER NOT NULL,

    CONSTRAINT "return_book_pkey" PRIMARY KEY ("Return_ID")
);

-- CreateIndex
CREATE UNIQUE INDEX "return_book_BorrowDetail_ID_key" ON "return_book"("BorrowDetail_ID");

-- CreateIndex
CREATE UNIQUE INDEX "return_book_Member_ID_key" ON "return_book"("Member_ID");

-- CreateIndex
CREATE UNIQUE INDEX "return_book_Librarian_ID_key" ON "return_book"("Librarian_ID");

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_Member_ID_fkey" FOREIGN KEY ("Member_ID") REFERENCES "member"("Member_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_Librarian_ID_fkey" FOREIGN KEY ("Librarian_ID") REFERENCES "librarian"("Librarian_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "return_book" ADD CONSTRAINT "return_book_BorrowDetail_ID_fkey" FOREIGN KEY ("BorrowDetail_ID") REFERENCES "borrow_detail"("BorrowDetail_ID") ON DELETE RESTRICT ON UPDATE CASCADE;
