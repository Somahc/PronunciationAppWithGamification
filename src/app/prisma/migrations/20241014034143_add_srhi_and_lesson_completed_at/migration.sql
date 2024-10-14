-- AlterTable
ALTER TABLE "lesson_progresses" ADD COLUMN     "completed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "srhi_answers" (
    "srhi_id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "q1" INTEGER NOT NULL,
    "q2" INTEGER NOT NULL,
    "q3" INTEGER NOT NULL,
    "q4" INTEGER NOT NULL,
    "q5" INTEGER NOT NULL,
    "q6" INTEGER NOT NULL,
    "q7" INTEGER NOT NULL,
    "submitted_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "srhi_answers_pkey" PRIMARY KEY ("srhi_id")
);
