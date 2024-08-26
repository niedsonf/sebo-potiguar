'use client'

import { StoreContext } from "@/contexts/store-context";
import { cn } from "@/utils/cn";
import clsx from "clsx";
import { MagnifyingGlass } from "phosphor-react";
import { HTMLAttributes } from "react";
import { useContextSelector } from "use-context-selector";

interface BookSearcherProps extends HTMLAttributes<HTMLFormElement> { }

export function BookSearcher({ className, ...props }: BookSearcherProps) {
    const search = useContextSelector(StoreContext, ctx => ctx.search);
    const storeSearch = useContextSelector(StoreContext, ctx => ctx.storeSearch);

    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className={cn(
                "relative flex w-fit",
                className
            )}
            {...props}>
            <input
                type="text"
                placeholder="Busque por um título"
                value={search}
                onChange={e => storeSearch(e.target.value)}
                className={clsx(
                    "text-gray-900 text-sm border border-green-300 ",
                    "rounded p-2 pr-12 focus:outline-green-300",
                )}
            />
            <button className={clsx(
                "absolute grid place-items-center h-full right-0",
                "text-green-300 w-10 rounded-r"
            )} >
                <MagnifyingGlass size={16} weight="bold" />
            </button>
        </form>
    )
}