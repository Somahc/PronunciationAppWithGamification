/*
  Warnings:

  - You are about to drop the `challenge_lessons` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `challenge_progresses` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `challenge_results` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "challenge_progresses" DROP CONSTRAINT "challenge_progresses_challenge_id_fkey";

-- DropForeignKey
ALTER TABLE "challenge_progresses" DROP CONSTRAINT "challenge_progresses_user_id_fkey";

-- DropForeignKey
ALTER TABLE "challenge_results" DROP CONSTRAINT "challenge_results_user_id_fkey";

-- DropTable
DROP TABLE "challenge_lessons";

-- DropTable
DROP TABLE "challenge_progresses";

-- DropTable
DROP TABLE "challenge_results";
