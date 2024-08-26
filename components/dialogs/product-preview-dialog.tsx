'use client'

import { useState } from "react"
import { Dialog } from "../ui/dialog"
import Image from "next/image"
import { Book } from "@/@types/book"

interface ProductPreviewDialogProps {
    children: React.ReactNode
    product: Book
}

export function ProductPreviewDialog({ children, product }: ProductPreviewDialogProps) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Dialog.Root onOpenChange={setIsOpen} open={isOpen}>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Content className="[&_button:last-child]:text-gray-800">
                <Dialog.Header>
                    <Dialog.Title className="text-green-500 text-lg max-w-[400px]">{product.title}</Dialog.Title>
                </Dialog.Header>
                <Dialog.Body>
                    <Image
                        src={product.image}
                        alt={product.title}
                        className="object-contain w-[400px] rounded"
                    />
                </Dialog.Body>
            </Dialog.Content>
        </Dialog.Root>
    )

}