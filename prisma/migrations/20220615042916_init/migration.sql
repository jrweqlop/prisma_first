-- CreateTable
CREATE TABLE "librarian" (
    "Librarian_ID" SERIAL NOT NULL,
    "Librarian_Name" VARCHAR(30) NOT NULL,
    "Librarian_Phone" VARCHAR(10) NOT NULL,
    "Librarian_Issue" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Librarian_Expiry" TEXT,

    CONSTRAINT "librarian_pkey" PRIMARY KEY ("Librarian_ID")
);

-- CreateTable
CREATE TABLE "book" (
    "Book_ID" SERIAL NOT NULL,
    "Book_Name" VARCHAR(30) NOT NULL,
    "Book_Catagory" VARCHAR(30) NOT NULL,
    "Book_Publishing" VARCHAR(30) NOT NULL,

    CONSTRAINT "book_pkey" PRIMARY KEY ("Book_ID")
);
