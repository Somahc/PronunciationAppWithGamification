-- CreateTable
CREATE TABLE "lesson_reviews" (
    "lesson_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "reviewed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lesson_reviews_pkey" PRIMARY KEY ("lesson_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lesson_reviews_lesson_id_user_id_key" ON "lesson_reviews"("lesson_id", "user_id");

-- AddForeignKey
ALTER TABLE "lesson_reviews" ADD CONSTRAINT "lesson_reviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_reviews" ADD CONSTRAINT "lesson_reviews_lesson_id_fkey" FOREIGN KEY ("lesson_id") REFERENCES "lessons"("lesson_id") ON DELETE CASCADE ON UPDATE CASCADE;
