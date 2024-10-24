'use client';

import { signOut } from "next-auth/react";

export default function SignoutBtn() {
    return (
        <button className="bg-red-600 py-2 px-6 rounded-md text-white" onClick={() => signOut()}>ログアウト</button>
    )
}