

import { getCompletedLessonsCount } from "@/app/lib/getCompletedLessonsCount";
import prisma from "@/app/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export const POST = async ( req: NextRequest ) => {

    const body = await req.json();

    const { userId } = await body;

    if (!userId) return { status: 400, json: { message: 'User ID is required' } };

    try {

        const completedLessonsCount = await getCompletedLessonsCount(userId);
        const badges = await prisma.badge.findMany();
        const awardedBadges = [];

        for (const badge of badges) {
            if (!badge.criteria) continue;

            // const criteria = JSON.parse(badge.criteria as string);

            const criteria = badge.criteria;

            if (criteria.type === "completedLessons" && completedLessonsCount >= criteria.value) {

                const userBadge = await prisma.userBadge.findFirst({
                    where: {
                        userId: userId,
                        badgeId: badge.badgeId,
                    }
                })

                if (!userBadge) {
                    console.log("ないやんバッジ", badge.name)
                    
                    const newUserBadge = await prisma.userBadge.create({
                        data: {
                            userId,
                            badgeId: badge.badgeId,
                            obtainedAt: new Date(),
                        }
                    })

                    console.log('バッジを付与しました:', badge.name);
                    awardedBadges.push(newUserBadge);

                }
            }
        }

        if (awardedBadges.length > 0) return NextResponse.json(awardedBadges, { status: 201 });
        else return NextResponse.json({ message: 'No badges awarded' }, { status: 200 });

    } catch (err) {

        console.error('Error:', err);
        return NextResponse.json(
            { message: err instanceof Error ? err.message : 'An unknown error occurred' },
            { status: 500 }
        );

    }
}

export const GET = async ( req: NextRequest ) => {
    
    const { searchParams } = new URL(req.url);

    const userId = searchParams.get('userId');

    if (!userId) return { status: 400, json: { message: 'User ID is required' } };

    try {

        const badges = await prisma.badge.findMany({
            include: {
                UserBadge: {
                    where: {
                        userId: userId
                    },
                    select: {
                        obtainedAt: true
                    }
                }
            }
        });

        // バッジ上場にユーザーが取得しているかどうかを追加
        const formattedBadges = badges.map(badge => ({
            ...badge,
            isObtained: badge.UserBadge.length > 0,
            obtainedAt: badge.UserBadge[0]?.obtainedAt || null
        }))

        return NextResponse.json(formattedBadges, { status: 200 });

    } catch (err) {
            
            console.error('Error:', err);
            return NextResponse.json(
                { message: err instanceof Error ? err.message : 'An unknown error occurred' },
                { status: 500 }
            );

    }
}