import { nextAuthOptions } from "@/app/lib/next-auth/options";
import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

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
                {lessons.map((lesson: Lesson) => (
                    <div key={lesson.lessonId}>
                        {lesson.title}
                        {lesson.lessonId}
                        {lesson.isCompleted ? '完了' : '未完了'}
                        <a href={`/lesson/${lesson.lessonId}`} className="bg-green-600 py-2 px-6 rounded-md">to lesson</a>
                        <a href={`/comments/${lesson.lessonId}`} className="bg-blue-600 py-2 px-6 rounded-md">to comment</a>
                    </div>
                ))}
                <a href="/ranking" className="bg-red-300 py-2 px-3 rounded-md">to ranking</a>
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

