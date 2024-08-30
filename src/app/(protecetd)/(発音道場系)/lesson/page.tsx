import { nextAuthOptions } from "@/app/lib/next-auth/options";
import { getServerSession } from "next-auth";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";

type Lesson = {
    lessonId: number;
    title: string;
}

export default async function Page() {

    const res = await fetch("http://localhost:3000/api/lessons");
    const lessons = await res.json();
    const session = await getServerSession(nextAuthOptions);

    if(session) {
        return (
            <>
                {lessons.map((lesson: Lesson) => (
                    <div key={lesson.lessonId}>
                        {lesson.title}
                        {lesson.lessonId}
                        <a href={`/lesson/${lesson.lessonId}`} className="bg-green-600 py-2 px-6 rounded-md">to lesson</a>
                        <a href={`/comments/${lesson.lessonId}`} className="bg-blue-600 py-2 px-6 rounded-md">to comment</a>
                    </div>
                ))}
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

