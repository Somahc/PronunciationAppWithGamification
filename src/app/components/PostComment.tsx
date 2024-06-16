'use client';

import { useState } from "react";

const PostCommentForm = () => {
    const [errMessage, setErrMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [threadId, setThreadId] = useState("");
    const [comment, setComment] = useState("");

    const postComment = async () => {
        setErrMessage("");
        setSuccessMessage("");
        if (!threadId || !comment) {
            setErrMessage("threadId, commentの入力は必須です");
            return;
        }
        try {
            const res = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: comment, threadId: threadId }),
            });
            const data = await res.json();
            if(!res.ok) {
                setErrMessage("コメントの投稿に失敗しました");
                throw new Error('Failed to post comment');
            }
            setThreadId("");
            setComment("");
            setSuccessMessage("コメントを投稿しました");
            return data;
        } catch (error) {
            console.log(error);
            setErrMessage("コメントの投稿に失敗しました");
        }
    }

    return (
        <>
            <div>threadId</div>
            <input type="text" className="border border-gray-400 mb-5" placeholder="threadId" value={threadId} onChange={(e) => setThreadId(e.target.value)} required/>
            <div>comment</div>
            <input type="text" className="border border-gray-400 mb-5" placeholder="comment" value={comment} onChange={(e) => setComment(e.target.value)} required/>
            <button className="bg-blue-600 hover:bg-blue-700 py-2 px-6 rounded-md mb-2 text-white" onClick={() => postComment()}>Post Comment</button>
            <div className="text-red-500">{errMessage}</div>
            <div className="text-green-500">{successMessage}</div>
        </>
    )
}

export default PostCommentForm;