import { NextRequest, NextResponse } from "next/server";
import prisma from '../../lib/prisma';

export async function GET(req: NextRequest ) {

    const { searchParams } = new URL(req.url);
    const userId = searchParams.get('userId');

    // if (!userId) return { status: 400, json: { message: 'User ID is required' } };
    if(!userId) return NextResponse.json({ message: 'User ID is required' }, { status: 400 });

    try {

        const lessons = await prisma.lesson.findMany({
            include: {
                LessonProgress: {
                    where: {
                        userId: userId
                    },
                    select: {
                        completed: true
                    }
                }
            },
            orderBy: {
                lessonId: 'asc'
            }
        });

        // ユーザがレッスンをクリアしているかどうかの情報を追加
        const formattedLessons = lessons.map(lesson => ({
            ...lesson,
            isCompleted: lesson.LessonProgress.length > 0 && lesson.LessonProgress[0].completed
        }))

        return NextResponse.json(formattedLessons, { status: 200 });

    } catch (err) {
    
        return NextResponse.json(
            { message: err instanceof Error ? err.message : 'An unknown error occurred' },
            { status: 500 }
        );

    }
}