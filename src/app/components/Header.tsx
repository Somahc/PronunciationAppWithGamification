import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import LoginButton from "./LoginButton";
import { Flame, GraduationCap } from "lucide-react";
import { getPoints } from "../lib/getPoints";

export default async function Header() {
    const session = await getServerSession(nextAuthOptions);
    let basicPoint = 0;
    let activityPoint = 0;
    if(session) {
        const points = await getPoints(session.user.id as string);
        basicPoint = points.basicPoint;
        activityPoint = points.activityPoint;
    }

    return (
        <header className="flex justify-center h-[50px] bg-blue-200">
            <div className="flex items-center justify-between w-[95%]">
                <div className="text-sm">
                    <Link href="/">
                        発音矯正アプリ
                    </Link>
                </div>
                
                <section>
                    {session ? (
                        <div className="flex items-center gap-[0.1rem]">
                            {/* <GraduationCap size={24} />
                            <div>
                                {basicPoint}P
                            </div>
                            <Flame size={24} />
                            <div className="">
                                {activityPoint}P
                            </div> */}
                            <Avatar className="size-9 border">
                                <AvatarImage src={session.user.image as string} alt="@user" className="size-9" />
                                <AvatarFallback>{session.user.name?.charAt(0)}</AvatarFallback>
                            </Avatar>
                        </div>
                    ) : (
                        <LoginButton />
                    )}
                </section>
            </div>
        </header>
    )
}