"use client"

import { useSession, signIn, signOut } from "next-auth/react";

export default function Page() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <div>lesson 2</div>
      </>
    )
  }
}