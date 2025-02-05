/*
  Warnings:

  - You are about to drop the column `userId` on the `LessonPlan` table. All the data in the column will be lost.
  - Added the required column `userEmail` to the `LessonPlan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "LessonPlan" DROP CONSTRAINT "LessonPlan_userId_fkey";

-- AlterTable
ALTER TABLE "LessonPlan" DROP COLUMN "userId",
ADD COLUMN     "userEmail" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "LessonPlan" ADD CONSTRAINT "LessonPlan_userEmail_fkey" FOREIGN KEY ("userEmail") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
