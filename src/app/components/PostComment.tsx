'use client';

import { useState } from "react";

const PostCommentForm = () => {
    const [threadId, setThreadId] = useState("");
    const [comment, setComment] = useState("");

    const postComment = async () => {
        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content: comment, threadId: threadId }),
        });

        if(!res.ok) {
            throw new Error('Failed to post comment');
        }

        const data = await res.json();
        setThreadId("");
        setComment("");
        return data;
    }

    return (
        <>
            <div>threadId</div>
            <input type="text" className="border border-gray-400 mb-5" placeholder="threadId" value={threadId} onChange={(e) => setThreadId(e.target.value)} />
            <div>comment</div>
            <input type="text" className="border border-gray-400 mb-5" placeholder="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
            <button className="bg-blue-600 py-2 px-6 rounded-md mb-2" onClick={() => postComment()}>Post Comment</button>
        </>
    )
}

export default PostCommentForm;