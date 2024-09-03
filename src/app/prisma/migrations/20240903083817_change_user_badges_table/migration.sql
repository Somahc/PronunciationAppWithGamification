/*
  Warnings:

  - A unique constraint covering the columns `[user_id,badge_id]` on the table `user_badges` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "user_badges_user_id_badge_id_key" ON "user_badges"("user_id", "badge_id");
