/*
  Warnings:

  - You are about to drop the column `Member_Catagory` on the `member` table. All the data in the column will be lost.
  - Added the required column `Member_Category` to the `member` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "member" DROP COLUMN "Member_Catagory",
ADD COLUMN     "Member_Category" VARCHAR(10) NOT NULL;
