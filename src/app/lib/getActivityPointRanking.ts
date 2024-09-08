import prisma from "./prisma"

export const getActivityPointRanking = async () => {
    const ranking = await prisma.point.findMany({
        select: {
            activityPoint: true,
            user: {
                select: {
                    name: true
                }
            }
        },
        orderBy: {
            activityPoint: 'desc'
        },
    })

    return ranking;
}