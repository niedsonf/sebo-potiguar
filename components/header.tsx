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
import { useSession, signOut } from "next-auth/react";

export function Header() {
    const { products } = useContextSelector(CartContext, ctx => ctx);

    const session = useSession()

    return (
        <header className="flex justify-center border-b-4 border-green-700 bg-green-500 sticky top-0">
            <span>{session?.data?.user?.name}</span>
            <button onClick={() => signOut()}>logout</button>
            <div className={clsx(
                "flex gap-12 items-center max-xl:gap-4",
                "max-w-7xl w-full py-4 max-xl:py-2 max-xl:px-4",
            )}>
                <SideMenuDialog>
                    <button className="max-xl:flex hidden text-gray-6">
                        <Menu size={24} />
                    </button>
                </SideMenuDialog>
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
                <CartDialog>
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
                </CartDialog>
            </div>
        </header >
    )
}