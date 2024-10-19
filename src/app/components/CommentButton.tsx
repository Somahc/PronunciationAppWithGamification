import Link from "next/link";
import { MessageSquare } from "lucide-react";

interface CommentButtonProps {
    lessonId: number;
}

export default function CommentButton({ lessonId } : CommentButtonProps ) {
    return (
        <Link href={`comments/${lessonId}`} className="flex justify-center items-center gap-1 p-4 bg-white hover:bg-slate-200 w-full rounded-md">
            <MessageSquare size={19} className=""></MessageSquare>
            <p>コメント</p>
        </Link>
    )
}