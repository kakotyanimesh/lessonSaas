/*
  Warnings:

  - You are about to drop the column `class` on the `LessonPlan` table. All the data in the column will be lost.
  - Added the required column `grade` to the `LessonPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "LessonPlan" DROP COLUMN "class",
ADD COLUMN     "grade" TEXT NOT NULL;
