import prisma from "./prisma"

export const getBasicPointRanking = async () => {
    const ranking = await prisma.point.findMany({
        select: {
            basicPoint: true,
            user: {
                select: {
                    name: true
                }
            }
        },
        orderBy: {
            basicPoint: 'desc'
        },
    })

    return ranking;
    
}