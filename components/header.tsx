'use client'

import clsx from "clsx";
import { Logo } from "./logo";
import { BookSearcher } from "./book-searcher";
import Link from "next/link";
import { SideMenuDialog } from "./dialogs/side-menu-dialog";
import { Menu, ShoppingCart } from "lucide-react";
import { CartDialog } from "./dialogs/cart-dialog";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/contexts/cart-context";
import { cn } from "@/utils/cn";

export function Header() {
    const { products, removeFromCart } = useContextSelector(CartContext, ctx => ctx)

    return (
        <header className="flex justify-center border-b-4 border-green-700 bg-green-500 sticky top-0">
            <div className={clsx(
                "flex gap-12 items-center max-xl:gap-4",
                "max-w-7xl w-full py-4 max-xl:py-2 max-xl:px-4",
            )}>
                <SideMenuDialog
                    trigger={
                        <button className="max-xl:flex hidden text-gray-6">
                            <Menu size={24} />
                        </button>
                    }
                    content={
                        <div className="flex flex-col gap-8 bg-green-500 p-6 w-72 h-full overflow-y-auto">
                            <Logo />
                            <BookSearcher className="mx-auto" />
                            <div className="flex flex-col gap-2 opacity-50 pointer-events-none">
                                <span className="text-xs text-gray-6 pl-1">Ou busque por tipo (Em breve...)</span>
                                <nav className={clsx(
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
                        </div>
                    }
                />
                <Link href="/">
                    <Logo />
                </Link>
                <div className="h-full w-[1px] bg-green-700 max-xl:hidden flex" />
                <BookSearcher className="max-xl:hidden" />
                <div className="flex flex-col gap-0.5 max-xl:hidden opacity-50 pointer-events-none">
                    <span className="text-xs text-gray-6 pl-1">Ou busque por tipo (Em breve...)</span>
                    <nav className={clsx(
                        "flex h-full overflow-hidden",
                        "border border-gray-6 rounded",
                        "[&_a:not(:last-child)]:border-r"
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
                <CartDialog
                    trigger={
                        <button className="ml-auto relative">
                            {
                                products.length > 0 &&
                                <span
                                    className={cn(
                                        "text-gray-6 text-xs absolute -top-3.5 -right-3.5",
                                        "rounded-full bg-green-700 w-6 h-6",
                                        "grid place-items-center"
                                    )}>
                                    {products.length}
                                </span>
                            }
                            <ShoppingCart size={24} className="z-20" />
                        </button>
                    }
                    content={
                        <div className="flex flex-col gap-8 bg-green-500 p-6 w-96 max-xl:w-80 h-full overflow-y-auto">
                            <Logo />
                            <div className="h-[1px] bg-gray-6" />
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
                        </div>
                    }
                />
            </div>
        </header >
    )
}