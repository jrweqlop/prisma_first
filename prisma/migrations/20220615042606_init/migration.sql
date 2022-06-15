/*
  Warnings:

  - You are about to drop the `Weapon` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Weapon";

-- CreateTable
CREATE TABLE "member" (
    "Member_ID" SERIAL NOT NULL,
    "Member_Student_ID" VARCHAR(10) NOT NULL,
    "Member_Name" VARCHAR(15) NOT NULL,
    "Member_Add" VARCHAR(30) NOT NULL,
    "Member_Phone" VARCHAR(10) NOT NULL,
    "Member_Issue" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Member_Expiry" TIMESTAMP(3),
    "Member_catagory" VARCHAR(10) NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("Member_ID")
);
