'use client'

import Image from "next/image";
import { useSession } from "next-auth/react";
import { Parser } from "@/utils/parser";
import { cn } from "@/utils/cn";
import { Card } from "@/components/ui/card";

export default function ProfilePage() {
    const { data } = useSession()

    return (
        <div className="w-full max-w-7xl mx-auto max-xl:px-6">
            <div className="flex h-full max-lg:flex-col">
                <div className="flex flex-col max-lg:flex-row gap-6 p-4 bg-gray-6 lg:h-full border-r-2 border-green-100">
                    <Image
                        src={String(data?.user?.image).replace('s96-c', 's200-c')}
                        alt="Foto do Usuário"
                        width={200}
                        height={200}
                        className="rounded bg-gray-7/50 border-2 border-green-100"
                    />
                    <div className={cn(
                        "flex flex-col gap-1 max-lg:self-end",
                        "[&_h3]:text-xs [&_h3]:text-gray-800 [&_span]:text-green-300"
                    )}>
                        <h3>Último acesso: <span>{Parser.toDate(data?.user.lastAccess)}</span></h3>
                        <h3>Membro desde: <span>{Parser.toDate(data?.user.createdAt)}</span></h3>
                        <h3>Livros à venda: <span>0</span></h3>
                        <h3>Livros vendidos: <span>0</span></h3>
                    </div>
                </div>
                <div className="grow lg:pl-4 py-4">
                    <Card className="flex flex-col gap-4 text-gray-800">
                        <h1 className="text-base text-green-700 underline underline-offset-2">Dados de perfil</h1>
                        <div className="flex flex-col">
                            <h2 className="text-green-300 text-sm font-[600]">Nome</h2>
                            <p className="text-base">{data?.user.name}</p>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-green-300 text-sm font-[600]">Email</h2>
                            <p className="text-base">{data?.user.email}</p>
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-green-300 text-sm font-[600]">Telefone</h2>
                            <p className="text-base">{data?.user.phone || 'Sem número cadastrado'}</p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}