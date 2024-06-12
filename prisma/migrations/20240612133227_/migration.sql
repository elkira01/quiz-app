/*
  Warnings:

  - You are about to drop the column `roles` on the `user` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `QuestionPropsItem_questionId_fkey` ON `questionpropsitem`;

-- DropIndex
DROP INDEX `Quiz_authorId_fkey` ON `quiz`;

-- DropIndex
DROP INDEX `Quiz_categoryId_fkey` ON `quiz`;

-- DropIndex
DROP INDEX `QuizCategory_authorId_fkey` ON `quizcategory`;

-- DropIndex
DROP INDEX `QuizQuestion_quizId_fkey` ON `quizquestion`;

-- DropIndex
DROP INDEX `QuizScores_playerId_fkey` ON `quizscores`;

-- DropIndex
DROP INDEX `QuizScores_quizId_fkey` ON `quizscores`;

-- AlterTable
ALTER TABLE `user` DROP COLUMN `roles`,
    ADD COLUMN `role` ENUM('admin', 'player') NOT NULL DEFAULT 'admin';

-- AddForeignKey
ALTER TABLE `QuizCategory` ADD CONSTRAINT `QuizCategory_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `QuizQuestion` ADD CONSTRAINT `QuizQuestion_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quiz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `QuestionPropsItem` ADD CONSTRAINT `QuestionPropsItem_questionId_fkey` FOREIGN KEY (`questionId`) REFERENCES `QuizQuestion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quiz` ADD CONSTRAINT `Quiz_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `QuizCategory`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quiz` ADD CONSTRAINT `Quiz_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `QuizScores` ADD CONSTRAINT `QuizScores_playerId_fkey` FOREIGN KEY (`playerId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `QuizScores` ADD CONSTRAINT `QuizScores_quizId_fkey` FOREIGN KEY (`quizId`) REFERENCES `Quiz`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
