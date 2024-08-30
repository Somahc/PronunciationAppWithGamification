import { NextRequest, NextResponse } from "next/server";
import prisma from '@/app/lib/prisma';

export const GET = async (req: NextRequest, { params }: { params: { lessonId: string } } ) => {

    const { lessonId } = params;
    
    const comments = await prisma.comment.findMany({
        include: {
            user: {
                select: {
                    name: true
                }
            }
        },
        where: {
            lessonId: parseInt(lessonId)
        },
        orderBy: {
            createdAt: 'asc'
        }
    })

    if (!comments) return NextResponse.json({ message: 'No comments found' }, { status: 404 });

    return NextResponse.json(comments, { status: 200 });

}