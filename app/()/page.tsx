import { ProductCard } from "@/components/product-card";
import { Books } from "@/data/books";
import { cn } from "@/utils/cn";
import { getSession } from "next-auth/react";

export default async function Home() {
    const session = await getSession()

    return (
        <div className="flex flex-col ">
            <h1 className="text-gray-800">{session?.user?.name}</h1>
            <ul className={cn(
                "grow py-6 w-full max-w-7xl mx-auto max-xl:px-6",
                "grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 "
            )}>
                {
                    Books.map(book => (
                        <ProductCard key={book.id} book={book} />
                    ))
                }
            </ul>
        </div>
    );
}
