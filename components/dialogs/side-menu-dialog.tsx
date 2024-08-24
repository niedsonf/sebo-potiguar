'use client'

import { ReactNode } from "react"
import { Dialog } from "../ui/dialog"

interface SideMenuDialogProps {
    trigger: ReactNode
    content: ReactNode
}

export function SideMenuDialog({ trigger, content }: SideMenuDialogProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {trigger}
            </Dialog.Trigger>
            <Dialog.Content
                position="left"
                animationIn="animate-slide-left-to-right"
                animationOut="animate-slide-right-to-left"
                className="h-full rounded-l-none">
                {content}
            </Dialog.Content>
        </Dialog.Root>
    )
}