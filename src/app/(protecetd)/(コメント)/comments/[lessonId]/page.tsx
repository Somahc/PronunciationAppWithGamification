import { format } from "date-fns";
import { Comment } from "@/app/lib/types/Comment";
import { notFound } from "next/navigation";
import PostCommentModal from "@/app/components/PostCommentModal";

export default async function Page({ params }: { params: { lessonId: string } }) {
    const { lessonId } = params;

    const res = await fetch(`${process.env.BASE_URL}/api/comments/${lessonId}`, {
        cache: 'no-store',
    });

    if(!res.ok) {
        return notFound();
    }

    const comments: Comment[] = await res.json();

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center">
            <div>コメント一覧</div>
            {comments.map((comment: Comment, index) => (
                <div className="mt-5 w-[80%] bg-white p-4 rounded-md" key={index}>
                    <div className="flex items-center">
                        <div className="mr-3 font-extrabold">{comment.user ? comment.user.name : 'Unknownさん'}</div>
                        <time className="text-xs">{format(comment.createdAt, 'yyyy/MM/dd')}</time>
                    </div>
                    <p className="p-1">{comment.content}</p>
                </div>
            ))}
            <PostCommentModal lessonId={lessonId} />
        </div>
    )
}