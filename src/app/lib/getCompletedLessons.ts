import prisma from "./prisma";

export const getCompletedLessons = async (userId: string) => {
    const completedLessons = await prisma.lessonProgress.findMany({
        where: {
            userId: userId,
            completed: true
        }
    });

    return completedLessons;
}