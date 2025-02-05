/*
  Warnings:

  - You are about to drop the column `lessonPlanLink` on the `LessonPlan` table. All the data in the column will be lost.
  - Added the required column `googleDocsId` to the `LessonPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LessonPlan" DROP COLUMN "lessonPlanLink",
ADD COLUMN     "googleDocsId" TEXT NOT NULL;
