'use client'

import { ProductCard } from "@/components/product-card";
import { StoreContext } from "@/contexts/store-context";
import { Books } from "@/data/books";
import { cn } from "@/utils/cn";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useContextSelector } from "use-context-selector";

export function ProductList() {
    const page = useContextSelector(StoreContext, ctx => ctx.page);

    gsap.registerPlugin(ScrollTrigger);
    useGSAP((ctx, ctxSafe) => {
        gsap.fromTo("#product-list > div", {
            opacity: 0,
            scale: 0.5
        }, {
            opacity: 1,
            scale: 1,
            stagger: {
                amount: 0.3,
                from: "start",
                grid: [3, 3],
                ease: 'power2.inOut',
            }
        })
    }, [page]);

    return (
        <ul
            id="product-list"
            className={cn(
                "w-full max-w-7xl mx-auto max-xl:px-6",
                "grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 "
            )}>
            {
                Books
                    .slice((page - 1) * 9, page * 9)
                    .map(book => (
                        <ProductCard key={book.id} book={book} />
                    ))
            }
        </ul>
    );
}
