import { ProductList } from "@/components/product-list";
import { ProductListPagination } from "@/components/product-list-pagination";

export default function Home() {
    return (
        <div className="flex flex-col justify-between items-center gap-4 grow py-6">
            <ProductList />
            <ProductListPagination />
        </div>
    );
}
