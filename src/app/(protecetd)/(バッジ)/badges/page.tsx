import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import classNames from "classnames";
import ToTopBtn from "@/app/components/ToTopBtn";

export type BadgeResponse = {
    id: string;
    name: string;
    description: string;
    image?: string;
    UserBadge: any[];
    isObtained: boolean;
    createdAt: string | null;
}

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

    const res = await fetch(`${process.env.BASE_URL}/api/badges?userId=${session.user.id}`);

    const badges: BadgeResponse[] = await res.json();

    console.log('バッジ:', badges);

    return (
        <>
            <h1 className="text-xl text-center my-2">バッジ一覧</h1>

            <div className="w-[95%] mx-auto grid grid-cols-2 gap-2 my-2">
                {badges.map((badge) => (
                    <div className={classNames('grid-item rounded-md', {
                        'bg-green-300': badge.isObtained,
                        'bg-slate-300': !badge.isObtained
                    })} key={badge.id}>
                        <div className="my-2 flex flex-col gap-2 items-center text-center">
                            <p className="flex bg-white h-[4rem] p-1 rounded-md w-[90%] items-center justify-center text-sm">{badge.name}</p>
                            <p>{badge.isObtained ? '取得済み' : '未取得'}</p>
                            <p className="text-sm">{badge.description}</p>
                        </div>
                    </div>
                ))}

            </div>

            <ToTopBtn />

        </>
    )
}