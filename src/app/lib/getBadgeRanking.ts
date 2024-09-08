import prisma from "./prisma"

export const getBadgeRanking = async () => {
    // UserBadgeテーブルでグループ化とカウント
    const badgeCounts = await prisma.userBadge.groupBy({
        by: ['userId'],
        _count: {
            badgeId: true
        },
        orderBy: {
            _count: {
                badgeId: 'desc'
            }
        },
    });

    // 取得したユーザーIDのリストを作成
    const userIds = badgeCounts.map(item => item.userId);

    // ユーザー情報を取得
    const users = await prisma.user.findMany({
        where: {
            id: {
                in: userIds
            }
        },
        select: {
            id: true,
            name: true
        }
    });

    // 結果を組み合わせる
    const ranking = badgeCounts.map(item => {
        const user = users.find(u => u.id === item.userId);
        return {
            userName: user?.name || null,
            badgeCount: item._count.badgeId
        };
    });

    return ranking;
}