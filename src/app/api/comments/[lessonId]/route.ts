import { NextRequest, NextResponse } from "next/server";
import prisma from '@/app/lib/prisma';
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import { getServerSession } from "next-auth/next";

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

export const POST = async (req: NextRequest, { params }: { params: { lessonId: string } } ) => {
    const session = await getServerSession(nextAuthOptions)
    
    if (!session) return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });

    const { lessonId } = params;
    const { content } = await req.json();

    if(!content || !lessonId) return NextResponse.json({ message: 'Invalid request' }, { status: 400 });


    const newComment = await prisma.comment.create({
        data: {
            lessonId: parseInt(lessonId),
            userId: session.user.id,
            content: content
        }
    })

    return NextResponse.json(newComment, { status: 201 });

}