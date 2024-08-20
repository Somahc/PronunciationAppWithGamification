/*
  Warnings:

  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Thread` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_threadId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Thread";

-- CreateTable
CREATE TABLE "points" (
    "user_id" TEXT NOT NULL,
    "basic_point" INTEGER NOT NULL,
    "activity_point" INTEGER NOT NULL,

    CONSTRAINT "points_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "lessons" (
    "lesson_id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "lessons_pkey" PRIMARY KEY ("lesson_id")
);

-- CreateTable
CREATE TABLE "lesson_progresses" (
    "lesson_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "lesson_progresses_pkey" PRIMARY KEY ("lesson_id")
);

-- CreateTable
CREATE TABLE "badges" (
    "badge_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "criteria" JSONB NOT NULL,

    CONSTRAINT "badges_pkey" PRIMARY KEY ("badge_id")
);

-- CreateTable
CREATE TABLE "user_badges" (
    "user_id" TEXT NOT NULL,
    "badge_id" INTEGER NOT NULL,
    "obtained_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_badges_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "comments" (
    "comment_id" TEXT NOT NULL,
    "lesson_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "like" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "comments_pkey" PRIMARY KEY ("comment_id")
);

-- CreateTable
CREATE TABLE "challenge_lessons" (
    "challenge_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "challenge_lessons_pkey" PRIMARY KEY ("challenge_id")
);

-- CreateTable
CREATE TABLE "challenge_progresses" (
    "challenge_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL,

    CONSTRAINT "challenge_progresses_pkey" PRIMARY KEY ("challenge_id")
);

-- CreateTable
CREATE TABLE "challenge_results" (
    "result_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "challenge_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accuracy" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "challenge_results_pkey" PRIMARY KEY ("result_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lesson_progresses_lesson_id_user_id_key" ON "lesson_progresses"("lesson_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "challenge_progresses_challenge_id_user_id_key" ON "challenge_progresses"("challenge_id", "user_id");

-- AddForeignKey
ALTER TABLE "points" ADD CONSTRAINT "points_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_progresses" ADD CONSTRAINT "lesson_progresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_progresses" ADD CONSTRAINT "lesson_progresses_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lessons"("lesson_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_badges" ADD CONSTRAINT "user_badges_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_badges" ADD CONSTRAINT "user_badges_badge_id_fkey" FOREIGN KEY ("badge_id") REFERENCES "badges"("badge_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comments" ADD CONSTRAINT "comments_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lessons"("lesson_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_progresses" ADD CONSTRAINT "challenge_progresses_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_progresses" ADD CONSTRAINT "challenge_progresses_challenge_id_fkey" FOREIGN KEY ("challenge_id") REFERENCES "challenge_lessons"("challenge_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "challenge_results" ADD CONSTRAINT "challenge_results_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
