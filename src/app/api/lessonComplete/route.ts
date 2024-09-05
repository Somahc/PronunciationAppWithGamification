import prisma from "@/app/lib/prisma";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// 認証しているユーザとレッスンIDを渡すと、その値をlesson_progressesテーブルに保存
// ユーザのbasicPointも+10する

/* req body example
{
    "userId": "clyfm3ajx000011nf48cmk5t5",
    "lessonId": 1
}
*/

export const POST = async ( req: NextRequest ) => {
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
            // 未クリアだったらlesson_progressesに記録
            await prisma.lessonProgress.create({
                data: {
                    userId,
                    lessonId,
                    completed: true
                }
            })

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


        return NextResponse.json({ message: 'Lesson completed' }, { status: 201 });

    } catch (err) {

        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });

    }
}