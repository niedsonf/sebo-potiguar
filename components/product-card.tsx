'use client'

import Image from "next/image";
import { Card } from "./ui/card";
import { cn } from "@/utils/cn";
import { WhatsappIcon } from "@/assets/whatsapp";
import Link from "next/link";
import { Book } from "@/@types/book";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/contexts/cart-context";
import { ProductPreviewDialog } from "./dialogs/product-preview-dialog";

interface ProductCardProps {
    book: Book
}

export function ProductCard({ book }: ProductCardProps) {
    const { products, addToCart, removeFromCart } = useContextSelector(CartContext, ctx => ctx)

    const alreadyInCart = products.some(product => product.id === book.id)

    return (
        <Card className="bg-gray-200 gap-6">
            <ProductPreviewDialog product={book}>
                <Image
                    priority
                    loading="eager"
                    src={book.image}
                    alt={book.title}
                    height={180}
                    width={200}
                    className="max-xl:max-w-24 max-w-[125px] max-h-[180px] h-auto aspect-auto object-contain cursor-pointer rounded"
                />
            </ProductPreviewDialog>
            <div className="flex flex-col gap-4 justify-between grow">
                <div className="flex flex-col gap-2">
                    <h3 className="text-base text-green-500 font-[500] leading-5 text-ellipsis line-clamp-2">
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
                            "bg-green-500 text-gray-6 text-base py-1 px-2 rounded",
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
                            "bg-green-500 text-gray-6 text-base py-1 px-2 rounded",
                            "hover:bg-green-700 transition-colors",
                        )}>
                        <WhatsappIcon />
                    </Link>
                </div>
            </div>
        </Card>
    )
}