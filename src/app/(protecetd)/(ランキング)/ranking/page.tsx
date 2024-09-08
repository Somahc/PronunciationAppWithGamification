import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { getBasicPointRanking } from "@/app/lib/getBasicPointRanking"
import { getActivityPointRanking } from "@/app/lib/getActivityPointRanking"
import { getBadgeRanking } from "@/app/lib/getBadgeRanking"

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
                        <div key={index} className="flex flex-row items-center gap-2">
                            <div>{index + 1}位</div>
                            <div>{point.user.name}</div>
                            <div>{point.basicPoint}P</div>
                        </div>
                    ))}
                </TabsContent>
                <TabsContent value="activityPoint">
                    {activityPointRanking.map((point, index) => (
                        <div key={index} className="flex flex-row items-center gap-2">
                            <div>{index + 1}位</div>
                            <div>{point.user.name}</div>
                            <div>{point.activityPoint}P</div>
                        </div>
                    ))}
                </TabsContent>
                <TabsContent value="badge">
                    {badgeRanking.map((badge, index) => (
                        <div key={index} className="flex flex-row items-center gap-2">
                            <div>{index + 1}位</div>
                            <div>{badge.userName}</div>
                            <div>{badge.badgeCount}個</div>
                        </div>
                    ))}
                </TabsContent>
            </Tabs>
        </>
    )
}