import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import style from "../page.module.scss";
import ToTopBtn from "@/app/components/ToTopBtn";

export default async function Page() {

    const session = await getServerSession(nextAuthOptions);

    if (!session) {
        return (
            <>
                <div>ログインしてください</div>
                <p className="text-xl mt-5"><a href="/signin" className="text-sky-500 hover:text-sky-600">/signinページ</a>でログイン</p>
            </>
        )
    }

    const completedRes = await fetch(`${process.env.BASE_URL}/api/lessonComplete`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            userId: session.user.id,
            lessonId: 1
        })
    })

    const completedResJson = await completedRes.json();

    console.log('completedRes:', completedResJson);
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <p className={style.section_ttl}>レッスン/s/　完了！</p>
            <ToTopBtn />
        </div>
    )
}