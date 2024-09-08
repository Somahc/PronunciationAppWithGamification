import prisma from './prisma';

export const getPoints = async (userId: string): Promise<{ basicPoint: number; activityPoint: number }> => {
    const point = await prisma.point.findFirst({
        where: {
            userId: userId
        },
        select: {
            basicPoint: true,
            activityPoint: true
        }
    });

    if(!point) return { basicPoint: 0, activityPoint: 0 };
    return { basicPoint: point.basicPoint, activityPoint: point.activityPoint };
}