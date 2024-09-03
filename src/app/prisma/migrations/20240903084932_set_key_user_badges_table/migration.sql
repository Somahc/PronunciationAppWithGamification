/*
  Warnings:

  - The primary key for the `user_badges` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "user_badges" DROP CONSTRAINT "user_badges_pkey",
ADD CONSTRAINT "user_badges_pkey" PRIMARY KEY ("user_id", "badge_id");
