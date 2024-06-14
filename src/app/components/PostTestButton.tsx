"use client";

const PostTestButton = () => {
    async function postComment(content: string, threadId: string) {
        const res = await fetch('/api/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ content, threadId }),
        });

        if (!res.ok) {
            throw new Error('Failed to post comment');
        }

        const data = await res.json();
        return data;
    }
    return (
        <button className="bg-blue-600 py-2 px-6 rounded-md mb-2" onClick={() => postComment("hello", "1")}>Post Test</button>
    )
}

export default PostTestButton;