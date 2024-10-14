import prisma from "@/app/lib/prisma";
import { SrhiData } from "@/app/lib/types/SrhiData";
import { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const POST = async ( req: NextRequest ) => {
    const body = await req.json();

    const { srhi }: { srhi: SrhiData } = await body;

    if (!srhi.userId) return NextResponse.json({ message: 'User ID is required' }, { status: 400 });

    try {
        const srhiAnswer = await prisma.srhiAnswer.create({
            data: {
                userId: srhi.userId,
                q1: Number(srhi.q1),
                q2: Number(srhi.q2),
                q3: Number(srhi.q3),
                q4: Number(srhi.q4),
                q5: Number(srhi.q5),
                q6: Number(srhi.q6),
                q7: Number(srhi.q7),
            }
        })

        return NextResponse.json(srhiAnswer, { status: 201 });

    } catch (err) {

        console.error(err);
        return NextResponse.json(
            { message: err instanceof Error ? err.message : 'An unknown error occurred' },
            { status: 500 }
        );
        
    }
}