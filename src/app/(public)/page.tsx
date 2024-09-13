import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import Title from "@/app/components/Title";

export default async function Page() {

  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="text-sm">右上の「ログイン」ボタンからログインしてください</div>
      </div>
    )
  }

  return (
    <>
      <Title />
    </>
  )
}