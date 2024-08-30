import { format } from "date-fns";
import { Comment } from "@/app/lib/types/Comment";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function Page({ params }: { params: { lessonId: string } }) {
    const { lessonId } = params;

    const res = await fetch(`http://localhost:3000/api/comments/${lessonId}`, {
        cache: 'no-store',
    });

    if(!res.ok) {
        return notFound();
    }

    const comments: Comment[] = await res.json();

    console.log(comments);

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center">
            <div>コメント一覧</div>
            {comments.map((comment: Comment, index) => (
                <div className="mt-5 border border-gray-300 p-4 rounded-md" key={index}>
                    <div className="flex">
                        <div className="mr-3 font-bold">{comment.user ? comment.user.name : 'Unknownさん'}</div>
                        <time>{format(comment.createdAt, 'yyyy/MM/dd')}</time>
                    </div>
                    <p>{comment.content}</p>
                </div>
            ))}

            <button className="fixed right-9 bottom-5">
                <Image src="/assets/comment_img/comment_btn.png" width={50} height={50} alt="コメント追加" />
            </button>
        </div>
    )
}