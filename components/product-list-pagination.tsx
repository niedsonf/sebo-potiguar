'use client'

import { StoreContext } from "@/contexts/store-context"
import { useContextSelector } from "use-context-selector"

export function ProductListPagination() {
    const page = useContextSelector(StoreContext, ctx => ctx.page);
    const maxPage = useContextSelector(StoreContext, ctx => ctx.maxPage);
    const storePageChange = useContextSelector(StoreContext, ctx => ctx.storePageChange);

    return (
        <nav className="flex gap-1">
            {
                Array.from({ length: maxPage }, (_, i) => i + 1).map((i) => (
                    <button
                        key={i}
                        onClick={() => {
                            storePageChange(i, maxPage)
                            window.scrollTo({top: 0, behavior: 'smooth'})
                        }}
                        className={`w-8 h-8 rounded text-white ${i === page ? 'bg-green-500 ' : 'bg-green-500/30'}`}>
                        {i}
                    </button>
                ))
            }
        </nav>
    )
}