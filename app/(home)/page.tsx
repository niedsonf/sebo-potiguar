import { ProductCard } from "@/components/product-card";
import { Books } from "@/data/books";
import { cn } from "@/utils/cn";

export default function Home() {
    return (
        <div className={cn(
            "grow py-6 w-full max-w-7xl mx-auto max-xl:px-6",
            "grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 "
        )}>
            {
                Books.map(book => (
                    <ProductCard key={book.id} book={book} />
                ))
            }
        </div>
    );
}
