import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getBasicPointRanking } from "@/app/lib/getBasicPointRanking"
import { getActivityPointRanking } from "@/app/lib/getActivityPointRanking"
import { getBadgeRanking } from "@/app/lib/getBadgeRanking"
import classNames from "classnames";
import ToTopBtn from "@/app/components/ToTopBtn";

export default async function Page() {

    const basicPointRanking = await getBasicPointRanking();
    const activityPointRanking = await getActivityPointRanking();
    const badgeRanking = await getBadgeRanking();

    return (
        <>
            <Tabs defaultValue="basicPoint" className="w-full">
                <TabsList className="w-full">
                    <TabsTrigger value="basicPoint">ポイント</TabsTrigger>
                    <TabsTrigger value="activityPoint">アクティビティポイント</TabsTrigger>
                    <TabsTrigger value="badge">バッジ</TabsTrigger>
                </TabsList>
                <TabsContent value="basicPoint">
                    {basicPointRanking.map((point, index) => (
                        <div key={index} className={classNames("flex items-center justify-between gap-2 bg-green-400 w-[95%] mx-auto rounded-md mt-2", {
                            "bg-yellow-300": index === 0,
                            "bg-slate-200": index === 1,
                            "bg-orange-500": index === 2
                        })}>
                            <p className="my-2 ml-4">{index + 1}位 {point.user.name}</p>
                            <p className="mr-4">{point.basicPoint}P</p>
                        </div>
                    ))}
                </TabsContent>
                <TabsContent value="activityPoint">
                    {activityPointRanking.map((point, index) => (
                        <div key={index} className={classNames("flex items-center justify-between gap-2 bg-green-400 w-[95%] mx-auto rounded-md mt-2", {
                            "bg-yellow-300": index === 0,
                            "bg-slate-200": index === 1,
                            "bg-orange-500": index === 2
                        })}>
                            <p className="my-2 ml-4">{index + 1}位 {point.user.name}</p>
                            <p className="mr-4">{point.activityPoint}P</p>
                        </div>
                    ))}
                </TabsContent>
                <TabsContent value="badge">
                    {badgeRanking.map((badge, index) => (
                        <div key={index} className={classNames("flex items-center justify-between gap-2 bg-green-400 w-[95%] mx-auto rounded-md mt-2", {
                            "bg-yellow-300": index === 0,
                            "bg-slate-200": index === 1,
                            "bg-orange-500": index === 2
                        })}>
                            <p className="my-2 ml-4">{index + 1}位 {badge.userName}</p>
                            <p className="mr-4">{badge.badgeCount}個</p>
                        </div>
                    ))}
                </TabsContent>
            </Tabs>

            <ToTopBtn />

        </>
    )
}