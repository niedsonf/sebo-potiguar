'use client'

import { ReactNode } from "react"
import { Dialog } from "../ui/dialog"

interface CartDialogProps {
    trigger: ReactNode
    content: ReactNode
}

export function CartDialog({ trigger, content }: CartDialogProps) {
    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {trigger}
            </Dialog.Trigger>
            <Dialog.Content
                position="right"
                animationIn="animate-slide-right-to-left2"
                animationOut="animate-slide-left-to-right2"
                className="h-full rounded-l-none">
                {content}
            </Dialog.Content>
        </Dialog.Root>
    )
}