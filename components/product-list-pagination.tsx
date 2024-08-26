'use client'

import { StoreContext } from "@/contexts/store-context"
import { useContextSelector } from "use-context-selector"

export function ProductListPagination() {
    const {
        page,
        maxPage,
        storePageChange
    } = useContextSelector(StoreContext, ctx => ctx);

    return (
        <nav className="flex gap-1">
            {
                Array.from({ length: maxPage }, (_, i) => i + 1).map((i) => (
                    <button
                        key={i}
                        onClick={() => storePageChange(i)}
                        className={`w-8 h-8 rounded text-white ${i === page ? 'bg-green-500 ' : 'bg-green-500/30'}`}>
                        {i}
                    </button>
                ))
            }
        </nav>
    )
}