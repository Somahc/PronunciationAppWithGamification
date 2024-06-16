import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../lib/prisma';
import { Session } from 'next-auth';
import { NextResponse, NextRequest } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { nextAuthOptions } from '@/app/lib/next-auth/options';

interface SessionUser extends Pick<Session['user'], keyof Session['user']> {
    id: string;
}

interface RequestBody {
    content: string;
    threadId: string;
}

export async function POST(req: NextRequest, res: NextResponse) {
    const session = await getServerSession(
        req as unknown as NextApiRequest,
        {
            ...res,
            getHeader: (name: string) => res.headers?.get(name),
            setHeader: (name: string, value: string) => res.headers?.set(name, value),
        } as unknown as NextApiResponse,
        nextAuthOptions
    );
    

    if (!session || !session.user) {
        return NextResponse.json({ message: 'Unauthorized', status: 401 });
    }

    if (req.method === 'POST') {
        const body = await req.json();
        console.log("body: ", body);
        // const { content, threadId } = req.body as unknown as RequestBody;
        const content = body.content;
        const threadId = body.threadId;
        console.log("content: ", content);
        const user = session.user as SessionUser;
        console.log(user);

        try {
            const comment = await prisma.comment.create({
                data: {
                    content,
                    thread: {
                        connect: {
                            id: threadId,
                        }
                    },
                    user: {
                        connect: {
                            id: user.id,
                        }
                    }
                },
            });

            console.log(comment);
            return NextResponse.json(comment);
        } catch (error) {
            console.log(error);
            return NextResponse.json({ message: "Something went wrong", status: 500 });
        }
    } else {
        return NextResponse.json({ message: 'Method not allowed', status: 405 });
    }
}