import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import prisma from '../../lib/prisma';

export async function GET(req: NextRequest) {
    if (req.method === 'GET') {
        try {
            const lessons = await prisma.lesson.findMany({
                orderBy: {
                    lessonId: 'asc',
                }
            })

            return NextResponse.json(lessons);
            
        } catch (error) {
            console.error('えらー:', error);
        }
    }
}