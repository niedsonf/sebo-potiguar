'use client'

import clsx from "clsx";
import { Logo } from "./logo";
import { BookSearcher } from "./book-searcher";
import Link from "next/link";
import { SideMenuDialog } from "./dialogs/side-menu-dialog";
import { CartDialog } from "./dialogs/cart-dialog";
import { useContextSelector } from "use-context-selector";
import { CartContext } from "@/contexts/cart-context";
import { cn } from "@/utils/cn";
import { UserStatus } from "./user-status";
import { List, ShoppingCartSimple } from "phosphor-react";

export function Header() {
    const { products } = useContextSelector(CartContext, ctx => ctx);

    return (
        <header className="flex justify-center border-b-4 border-green-700 bg-green-500 sticky top-0 z-10">
            <div className={clsx(
                "flex gap-12 items-center",
                "max-w-7xl w-full py-4",
                "max-xl:gap-4 max-xl:px-4 max-xl:py-2 max-xl:justify-between"
            )}>
                <SideMenuDialog>
                    <button className="max-lg:flex hidden text-gray-6">
                        <List size={24} />
                    </button>
                </SideMenuDialog>
                <Link href="/">
                    <Logo />
                </Link>
                <UserStatus />
                <div className="h-full w-[1px] bg-green-700 max-xl:hidden flex" />
                <BookSearcher className="max-lg:hidden" />
                <CartDialog>
                    <button className="relative justify-self-center xl:ml-auto">
                        {
                            products.length > 0 &&
                            <span
                                className={cn(
                                    "text-gray-6 text-[10px] absolute -top-3 -right-3",
                                    "rounded-full bg-green-700 w-5 h-5",
                                    "grid place-items-center"
                                )}>
                                {products.length}
                            </span>
                        }
                        <ShoppingCartSimple size={24} className="z-20" />
                    </button>
                </CartDialog>
            </div>
        </header >
    )
}