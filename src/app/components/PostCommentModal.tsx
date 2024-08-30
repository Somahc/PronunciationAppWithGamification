"use client";

import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

import { Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation";

type SubmitComment = {
    content: string;
}

export default function PostCommentModal({ lessonId }: { lessonId: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm<SubmitComment>();

    const onSubmit: SubmitHandler<SubmitComment> = async (data) => {

        try {

            const res = await fetch(`http://localhost:3000/api/comments/${lessonId}`, {
                method: 'POST',
                body: JSON.stringify({ content: data.content }),
            });

            if(!res.ok!) throw new Error('コメントの投稿に失敗');

            router.refresh();

        } catch (err) {

            console.error('コメントの投稿に失敗:', err);

        } finally {

            setIsOpen(false);
            reset();

        }

    }

return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
            <button className="fixed right-9 bottom-5">
                <Image src="/assets/comment_img/comment_btn.png" width={50} height={50} alt="コメント追加" />
            </button>
        </DialogTrigger>
        <DialogContent className="w-[90vw] max-w-md rounded-md">
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogHeader className="items-center">
                    <DialogTitle>コメントを投稿</DialogTitle>
                    <DialogDescription>
                        投稿したコメントは他のユーザに公開されます。
                    </DialogDescription>
                </DialogHeader>
                <div className="w-full mt-2 flex flex-col items-center">
                    <Textarea
                    placeholder="(例)seeの発音が難しかった"
                    className="h-10"
                    {...register("content", {
                        required: "コメントを入力してください",
                        maxLength: { value: 100, message: "100文字以内で入力してください" },
                    })}
                    />
                    {errors.content && <p className="mt-2 text-red-500">{errors.content?.message}</p>}
                    <Button type="submit" className="w-full mt-2" variant="default">
                        投稿する！
                    </Button>
                </div>
                <DialogFooter className="">
                </DialogFooter>
            </form>
        </DialogContent>
    </Dialog>
);
}
