/*
  Warnings:

  - The primary key for the `challenge_progresses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `lesson_progresses` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "challenge_progresses" DROP CONSTRAINT "challenge_progresses_pkey",
ADD CONSTRAINT "challenge_progresses_pkey" PRIMARY KEY ("challenge_id", "user_id");

-- AlterTable
ALTER TABLE "lesson_progresses" DROP CONSTRAINT "lesson_progresses_pkey",
ADD CONSTRAINT "lesson_progresses_pkey" PRIMARY KEY ("lesson_id", "user_id");
