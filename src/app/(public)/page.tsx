import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import Title from "@/app/components/Title";
import TitleNashi from "../components/TitleNashi";

export default async function Page() {

  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="p-4">
          <p className="text-sm">右上の「ログイン」ボタンからログインしてください</p>
          <br />
          <p className="text-sm text-red-500">注意：ログインにはGoogleアカウントを利用し、アカウントに登録された名前とプロフィール画像が本Webアプリ内で他のユーザーへ公開されます。</p>
          <br />
          <p className="text-sm">Googleアカウントを持っていない、あるいは既存のGoogleアカウントを使いたくない場合は、適当な名前をつけたGoogleアカウントを作成し、ログインしてください。</p>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* <Title /> */}
      <TitleNashi />
    </>
  )
}