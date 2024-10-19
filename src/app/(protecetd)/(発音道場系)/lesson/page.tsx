import { nextAuthOptions } from "@/app/lib/next-auth/options";
import { getServerSession } from "next-auth";
import { MessageSquare, BookOpen } from "lucide-react";
import classNames from "classnames";
import Link from "next/link";
import ToTopBtn from "@/app/components/ToTopBtn";
import CommentButton from "@/app/components/CommentButton";

type Lesson = {
    lessonId: number;
    title: string;
    LessonProgress: {
        completed: boolean;
    };
    isCompleted: boolean;
}

export default async function Page() {

    const session = await getServerSession(nextAuthOptions);
    
    if(session) {
        // レッスン情報を取得
        const lessonsRes = await fetch(`${process.env.BASE_URL}/api/lessons?userId=${session.user.id}`);
        const lessons = await lessonsRes.json();

        // バッジの取得を確認
        const badgeRes = await fetch(`${process.env.BASE_URL}/api/badges`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userId: session.user.id
            })
        })

        const badge = await badgeRes.json();

        console.log('バッジ:', badge);

        return (
            <>
                <h1 className="text-xl text-center my-2">レッスン一覧</h1>

                <div className="flex flex-col gap-2 w-[95%] mx-auto my-2">

                    {lessons.map((lesson: Lesson) => (
                        <div className={classNames('rounded-md text-center pt-2 pb-4', {
                            'bg-green-300': lesson.isCompleted,
                            'bg-slate-300' : !lesson.isCompleted
                        })} key={lesson.lessonId}>
                            <div className="w-[90%] mx-auto flex flex-col gap-4">
                                <Link href={`lesson/${lesson.lessonId}`} className="flex justify-center items-center gap-1 bg-white hover:bg-slate-200 mt-2 rounded-md p-4">
                                    <BookOpen size={19} className=""></BookOpen>
                                    <p>{lesson.title}</p>
                                </Link>
                                {/* <Link href={`comments/${lesson.lessonId}`} className="flex justify-center items-center gap-1 p-4 bg-white hover:bg-slate-200 w-full rounded-md">
                                    <MessageSquare size={19} className=""></MessageSquare>
                                    <p>コメント</p>
                                </Link> */}
                                {/* <CommentButton lessonId={lesson.lessonId} /> */}
                                <div className="text-sm">{lesson.isCompleted ? 'クリア済み' : '未完了'}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <ToTopBtn />

            </>
        )
    }

    return (
        <>
            <div>ログインしてください</div>
            <p className="text-xl mt-5"><a href="/signin" className="text-sky-500 hover:text-sky-600">/signinページ</a>でログイン</p>
        </>
    )
}

