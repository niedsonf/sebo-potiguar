'use client'

import { GoogleIcon } from "@/assets/google";
import { cn } from "@/utils/cn";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";

export function UserStatus() {
    const session = useSession()
    
    return (
        session?.status === "authenticated"
            ? <div className="flex items-center gap-2">
                <Image
                    src={session?.data?.user?.image ?? ''}
                    alt="Foto do Usuário"
                    width={40}
                    height={40}
                    className="rounded-full bg-gray-7/50"
                />
                <h4 className="text-sm text-gray-7 font-[500] max-xl:hidden">
                    <span className="block text-xs font-[400]">Olá, </span>
                    {session?.data?.user?.name}
                </h4>
                <button
                    className="text-xs self-end ml-4 underline"
                    onClick={() => signOut()}>
                    Logout
                </button>
            </div>
            : session?.status === 'unauthenticated'
                ? <button
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className={cn(
                        "flex items-center gap-2 px-2 py-1 rounded",
                        "bg-gray-7 text-gray-800 text-xs",
                    )}>
                    Logar com Google
                    <GoogleIcon />
                </button>
                : <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-7/50 rounded-full animate-pulse" />
                    <div className="w-32 h-9 bg-gray-7/50 rounded animate-pulse"/>
                    <div className="w-10 h-4 bg-gray-7/50 rounded animate-pulse ml-4 self-end"/>
                </div>
    )
}