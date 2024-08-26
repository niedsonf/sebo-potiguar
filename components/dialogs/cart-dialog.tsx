'use client'

import { Dialog } from "../ui/dialog"
import { Logo } from "../logo"
import { useContextSelector } from "use-context-selector"
import { CartContext } from "@/contexts/cart-context"
import Link from "next/link"
import { cn } from "@/utils/cn"

export function CartDialog({ children }: { children: React.ReactNode }) {
    const { products, removeFromCart } = useContextSelector(CartContext, ctx => ctx);

    return (
        <Dialog.Root>
            <Dialog.Trigger asChild>
                {children}
            </Dialog.Trigger>
            <Dialog.Content
                position="right"
                animationIn="animate-slide-right-to-left2"
                animationOut="animate-slide-left-to-right2"
                className="h-full rounded-l-none bg-green-500 ">
                <Dialog.Header>
                    <Dialog.Title>
                        <Logo />
                    </Dialog.Title>
                </Dialog.Header>
                <Dialog.Body className="flex flex-col gap-8  p-6 w-96 max-xl:w-80 h-full overflow-y-auto">
                    <div className="flex flex-col gap-3 pb-8">
                        <h1 className="text-base font-[600]">Carrinho</h1>
                        <div className="flex flex-col gap-2">
                            {
                                products.length > 0
                                    ? products.map(product => (
                                        <div key={product.id} className="flex items-center justify-between">
                                            <span className="font-[400] text-sm">{product.title}</span>
                                            <button
                                                onClick={() => removeFromCart(product.id)}
                                                className="text-xs">
                                                Remover
                                            </button>
                                        </div>
                                    ))

                                    : <span>Seu carrinho está vazio :(</span>
                            }
                        </div>
                    </div>
                    <Link
                        aria-disabled={products.length === 0}
                        href={
                            `https://wa.me/558496060709?text=${encodeURIComponent(
                                `Olá, Afonso.
Gostaria de comprar o(s) livro(s):
${products.map(product => `*${product.title}*`).join("\n")}`
                            )}`
                        }
                        target="_blank"
                        className={cn(
                            "rounded border border-gray-6 text-base py-1 text-center",
                            "hover:bg-gray-6 hover:text-green-500 transition-colors",
                            "aria-[disabled=true]:hidden block"
                        )}>
                        Solicitar orçamento
                    </Link>
                </Dialog.Body>
            </Dialog.Content>
        </Dialog.Root>
    )
}