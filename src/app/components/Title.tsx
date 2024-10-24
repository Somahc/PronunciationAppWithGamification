import Link from 'next/link'
import ToSrhiBtn from './ToSrhiBtn'
import { getServerSession } from "next-auth";
import { nextAuthOptions } from '@/app/lib/next-auth/options'
import { signOut } from 'next-auth/react'
import SignoutBtn from './SignoutBtn';

export default async function Title() {

  const session = await getServerSession(nextAuthOptions);

    return (
        <div className="w-full h-screen flex flex-col justify-center items-center gap-5">

          <p className="text-xl mb-2"><span className="font-bold">{session!.user?.name}</span> としてログインしています </p>
          <small>メールアドレス: {session!.user?.email}</small>
    
          <Link href="/lesson" className="flex flex-col w-[80%] items-center gap-2 bg-green-300 hover:bg-green-400 p-4 rounded-md">
            <p className="text-xl bg-white w-full py-2 rounded-md text-center">発音道場</p>
            <p className="text-sm">フィードバックをもらいながら発音練習</p>
          </Link>

          <Link href="/badges" className="flex flex-col w-[80%] items-center gap-2 bg-blue-300 hover:bg-blue-400 p-4 rounded-md">
            <p className="text-xl bg-white w-full py-2 rounded-md text-center">バッジ</p>
            <p className="text-sm">獲得したバッジを確認してみよう</p>
          </Link>
    
          <Link href="/ranking" className="flex flex-col w-[80%] items-center gap-2 bg-yellow-300 hover:bg-yellow-400 p-4 rounded-md">
            <p className="text-xl bg-white w-full py-2 rounded-md text-center">ランキング</p>
            <p className="text-sm">みんなの活動を確認してみよう</p>
          </Link>

          <SignoutBtn />
          {/* <ToSrhiBtn /> */}
    
        </div>
      )
}