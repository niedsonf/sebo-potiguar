'use client'

import { cn } from "@/utils/cn"
import { BookSearcher } from "../book-searcher"
import { Logo } from "../logo"
import { Dialog } from "../ui/dialog"
import Link from "next/link"

export function SideMenuDialog({ children }: { children: React.ReactNode }) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Content
                position="left"
                animationIn="animate-slide-left-to-right"
                animationOut="animate-slide-right-to-left"
                className="h-full rounded-l-none flex flex-col gap-8 bg-green-500 w-80 overflow-y-auto">
                <Dialog.Header>
                    <Dialog.Title>
                        <Logo />
                    </Dialog.Title>
                </Dialog.Header>
                <Dialog.Body className="flex-col">
                    <BookSearcher className="mx-auto" />
                    <div className="flex flex-col gap-2 opacity-50 pointer-events-none">
                        <span className="text-xs text-gray-6 pl-1">Ou busque por tipo (Em breve...)</span>
                        <nav className={cn(
                            "flex flex-col h-full overflow-hidden",
                            "border border-gray-6 rounded",
                            "[&_a:not(:last-child)]:border-b"
                        )}>
                            <Link href="" className="header-navigation-link">
                                Acadêmicos
                            </Link>
                            <Link href="" className="header-navigation-link">
                                Literários
                            </Link>
                            <Link href="" className="header-navigation-link">
                                Mangás
                            </Link>
                        </nav>
                    </div>
                </Dialog.Body>
            </Dialog.Content>
        </Dialog.Root>
    )
}