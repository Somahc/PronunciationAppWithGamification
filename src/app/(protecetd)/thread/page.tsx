import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import PostTestButton from "@/app/components/PostTestButton";
import PostCommentForm from "@/app/components/PostComment";

export default async function Page() {
    const session = await getServerSession(nextAuthOptions);
    if(session) {
        return(
            <>
                <div className="w-full h-screen flex flex-col items-center">
                    <div>こんにちは、{session.user?.name}さん</div>
                    <PostCommentForm />
                    {/* <PostTestButton /> */}
                    {/* <div>Not</div>
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
                    </div> */}
                </div>
            </>
        )
    }
    return (
        <>
            <div>ログインしてね</div>
        </>
    )
  }