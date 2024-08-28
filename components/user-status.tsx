'use client'

import { GoogleIcon } from "@/assets/google";
import { cn } from "@/utils/cn";
import { useSession, signOut, signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { CaretDown } from "phosphor-react";
import { HTMLAttributes } from "react";

interface UserStatusProps extends HTMLAttributes<HTMLDivElement> { }

export function UserStatus({ className, ...props }: UserStatusProps) {
    const { data, status, update } = useSession()

    console.log(data)
    
    if (status === 'loading') {
        return (
            <div className={cn("flex items-center gap-2", className)} {...props}>
                <div className="w-10 h-14 bg-gray-7/50 rounded-full animate-pulse" />
                <div className="flex flex-col gap-1">
                    <div className="w-32 h-3 bg-gray-7/50 rounded animate-pulse" />
                    <div className="w-32 h-3 bg-gray-7/50 rounded animate-pulse" />
                </div>
            </div>
        )
    }

    if (status === 'unauthenticated') {
        return (
            <div className={cn(className)} {...props}>
                <button
                    onClick={() => signIn("google", { callbackUrl: "/" })}
                    className={cn(
                        "flex items-center gap-2 px-2 py-1 rounded",
                        "bg-gray-7 text-gray-800 text-xs",
                    )}>
                    <GoogleIcon />
                    Entrar com Google
                </button>
            </div>
        )
    }

    return (
        <div className={cn("relative group", className)} {...props}>
            <div
                className={cn(
                    "flex items-center gap-2 p-2 rounded-t cursor-pointer",
                    "group-hover:bg-green-700 group-hover:delay-0 delay-150"
                )}>
                <Image
                    src={data?.user?.image}
                    alt="Foto do Usuário"
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <h4 className="text-sm text-gray-7 font-[500]">
                    <span className="block text-xs font-[400]">Olá, </span>
                    {data?.user?.name}
                </h4>
                <CaretDown size={18} />
            </div>
            <nav
                className={cn(
                    "flex flex-col rounded-b w-full transition-[max-height]",
                    "absolute bg-green-700 overflow-y-hidden max-h-0 group-hover:max-h-32"
                )}>
                <Link
                    href="/perfil"
                    className="text-sm text-start py-2 px-4 hover:bg-green-300">
                    Perfil
                </Link>
                {/* <Link
                    href="/meus-produtos"
                    className="text-sm text-start py-2 px-4 hover:bg-green-300">
                    Meus produtos
                </Link> */}
                <button
                    className="text-sm text-start py-2 px-4 hover:bg-green-300"
                    onClick={() => signOut()}>
                    Logout
                </button>
            </nav>
        </div>
    )
}