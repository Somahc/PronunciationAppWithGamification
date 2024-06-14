import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import PostTestButton from "@/app/components/PostTestButton";

export default async function Page() {
    const session = await getServerSession(nextAuthOptions);


    async function postComment(content: string, threadId: string) {
        const res = await fetch('/api/auth/comments', {
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

    if(session) {
        return(
            <>
                <div>{session.user?.name}</div>
                <PostTestButton />
            </>
        )
    }
    return (
      <div className="w-full h-screen flex flex-col items-center">
        <div>Not</div>
        <h1 className="text-5xl">Thread Page</h1>
        <button className="p-3 border border-blue-300 hover:bg-slate-400">TEST BUTTON</button>
        <div className="mt-5 border border-gray-300 p-4 rounded-md">
            <div className="flex">
                <div className="mr-3 font-bold">UserName</div>
                <div>2024/6/13</div>
            </div>
            <p>こんにちわんこそば</p>
        </div>
        <div className="mt-5 border border-gray-300 p-4 rounded-md">
            <div className="flex">
                <div className="mr-3 font-bold">UserName</div>
                <div>2024/6/13</div>
            </div>
            <p>こんにちわんこそば</p>
        </div>
        <div className="mt-5 border border-gray-300 p-4 rounded-md">
            <div className="flex">
                <div className="mr-3 font-bold">UserName</div>
                <div>2024/6/13</div>
            </div>
            <p>こんにちわんこそば</p>
        </div>
        <div className="mt-5 border border-gray-300 p-4 rounded-md">
            <div className="flex">
                <div className="mr-3 font-bold">UserName</div>
                <div>2024/6/13</div>
            </div>
            <p>こんにちわんこそば</p>
        </div>
      </div>
    )
  }