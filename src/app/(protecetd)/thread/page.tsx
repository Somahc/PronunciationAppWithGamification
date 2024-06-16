import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import PostCommentForm from "@/app/components/PostComment";
import { DateTime } from "next-auth/providers/kakao";

interface Comment {
    id: string;
    userId: string;
    createdAt: DateTime;
    threadId: string;
    content: string;
}

export default async function Page() {
    const res = await fetch("http://localhost:3000/api/comments");
    const comments = await res.json();
    const session = await getServerSession(nextAuthOptions);
    if(session) {
        return(
            <>
                <div className="w-full h-screen flex flex-col items-center">
                    <div>こんにちは、{session.user?.name}さん</div>
                    <PostCommentForm />
                    {comments.map((comment: Comment) => (
                        <div className="mt-5 border border-gray-300 p-4 rounded-md" key={comment.id}>
                            <div className="flex">
                                <div className="mr-3 font-bold">{comment.userId}</div>
                                <div>{comment.createdAt}</div>
                            </div>
                            <p>{comment.content}</p>
                        </div>
                    ))}
                </div>
            </>
        )
    }
    return (
        <>
            <div>ログインしてね</div>
            <p className="text-xl mt-5"><a href="/signin" className="text-sky-500 hover:text-sky-600">/signinページ</a>でログイン</p>
        </>
    )
  }