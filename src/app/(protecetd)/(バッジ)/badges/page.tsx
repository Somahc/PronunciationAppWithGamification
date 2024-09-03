import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";

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

    const res = await fetch(`http://localhost:3000/api/badges?userId=${session.user.id}`);

    const badges: BadgeResponse[] = await res.json();

    console.log('バッジ:', badges);

    return (
        <>
            {badges.map((badge) => (
                <div key={badge.id}>
                    <div>{badge.name}</div>
                    <div>{badge.isObtained ? '取得済み' : '未取得'}</div>
                    <div>{badge.description}</div>
                    <div>{badge.image}</div>
                </div>
            ))}
        </>
    )
}