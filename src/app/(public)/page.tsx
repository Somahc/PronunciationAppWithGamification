import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/app/lib/next-auth/options";
import Image from "next/image";
import Title from "@/app/components/Title";

export default async function Page() {

  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    return (
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="p-4">
          <p className="text-sm">右上の「ログイン」ボタンからログインしてください</p>
          <br />
          <p className="text-sm text-red-500">注意：ログインにはGoogleアカウントを利用し、アカウントに登録された名前が本Webアプリ内でのみ他ユーザーに公開されます。</p>
          <small>※名前とは下図の青丸で囲っている部分で表示されるものです。</small>
          <div>
          <Image src="/assets/google_name.png" width={1076} height={585} alt="s"/>
          </div>
          <br />
          <p className="text-sm">Googleアカウントを持っていない、あるいは既存のGoogleアカウントを使いたくない場合は、適当な名前をつけたGoogleアカウントを作成し、ログインしてください。</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Title />
    </>
  )
}