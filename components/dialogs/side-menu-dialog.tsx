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
                </Dialog.Body>
            </Dialog.Content>
        </Dialog.Root>
    )
}