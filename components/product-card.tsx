'use client'

import Image from "next/image";
import { Card } from "./ui/card";
import { cn } from "@/utils/cn";
import { WhatsappIcon } from "@/assets/whatsapp";
import Link from "next/link";
import { Book } from "@/@types/book";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/contexts/cart-context";

interface ProductCardProps {
    book: Book
}

export function ProductCard({ book }: ProductCardProps) {
    const { products, addToCart, removeFromCart } = useContextSelector(CartContext, ctx => ctx)

    const alreadyInCart = products.some(product => product.id === book.id)

    return (
        <Card className="bg-gray-200 gap-6">
            <Image
                src={book.image}
                alt={book.title}
                width={125}
                height={125}
                className="max-xl:w-24 object-contain"
            />
            <div className="flex flex-col gap-4 justify-between grow">
                <div className="flex flex-col gap-2">
                    <h3 className="text-xl text-green-500 font-[600]">
                        {book.title}
                    </h3>
                    <div className="flex flex-col gap-1 text-gray-800 text-xs">
                        <h4><span className="text-green-700 font-[600]">Autor:</span> {book.author}</h4>
                        <h4><span className="text-green-700 font-[600]">Gênero</span>: {book.genre}</h4>
                        <h4><span className="text-green-700 font-[600]">Estado</span>: {book.rating}</h4>
                        <h4><span className="text-green-700 font-[600]">Vendido por</span>: {book.seller}</h4>
                    </div>
                </div>
                <div className="flex gap-2">
                    <button
                        aria-selected={alreadyInCart}
                        onClick={() => {
                            if (!alreadyInCart) addToCart(book)
                            else removeFromCart(book.id)
                        }}
                        className={cn(
                            "bg-green-500 text-white text-base py-1 px-2 rounded",
                            "aria-[selected=false]:hover:bg-green-700 transition-colors",
                            "aria-[selected=true]:bg-green-700 grow"
                        )}>
                        {
                            alreadyInCart
                                ? 'Remover'
                                : 'Adicionar'
                        }
                    </button>
                    <Link
                        href={
                            `https://wa.me/558496060709?text=${encodeURIComponent(
                                `Olá, Afonso.
Gostaria de comprar o livro: *${book.title}*`
                            )}`
                        }
                        target="_blank"
                        className={cn(
                            "grid place-items-center",
                            "bg-green-500 text-white text-base py-1 px-2 rounded",
                            "hover:bg-green-700 transition-colors",
                        )}>
                        <WhatsappIcon />
                    </Link>
                </div>
            </div>
        </Card>
    )
}