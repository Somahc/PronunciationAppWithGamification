import prisma from "@/app/lib/prisma";
import { NextRequest } from "next/server";

// 認証しているユーザとレッスンIDを渡すと、その値をlesson_progressesテーブルに保存
// ユーザのbasicPointも+10する
export const POST = async (req: NextRequest) => {
    
    const body = await req.json();

    const { userId, lessonId } = await body;

    if (!userId || !lessonId) return { status: 400, json: { message: 'User ID and Lesson ID are required' } };

    // 該当レッスンをすでにクリアしているかどうか
    const isAlreadyCompleted = await prisma.lessonProgress.findFirst({
        where: {
            userId,
            lessonId,
            completed: true
        }
    })

    try {

        // lesson_progressesに記録
        await prisma.lessonProgress.create({
            data: {
                userId,
                lessonId,
                completed: true
            }
        })


        const currentPoint = await prisma.point.findFirst({
            where: {
                userId: userId
            },
            select: {
                basicPoint: true,
                activityPoint: true
            }
        })

        // DBにpoint情報がない場合は新規作成
        if(!currentPoint) {
            await prisma.point.create({
                data: {
                    userId,
                }
            })
        }


        if (isAlreadyCompleted) {
            // クリア済みだったらactibiityPointを+10
            await prisma.point.update({
                where: {
                    userId
                },
                data: {
                    activityPoint: {
                        increment: 10
                    }
                }
            })
        } else {
            // 未クリアだったらbasicPointを+10
            await prisma.point.update({
                where: {
                    userId
                },
                data: {
                    basicPoint: {
                        increment: 10
                    }
                }
            })
        }


        return { status: 201, json: { message: 'Lesson completed' } };

    } catch (err) {
        return { status: 500, json: { message: 'Internal Server Error' } };
    }
}