import { cn } from "@/utils/cn";
import clsx from "clsx";
import { Search } from "lucide-react";
import { HTMLAttributes } from "react";

interface BookSearcherProps extends HTMLAttributes<HTMLDivElement> { }

export function BookSearcher({ className, ...props }: BookSearcherProps) {
    return (
        <div
            {...props}
            className={cn(
                "relative flex w-fit pointer-events-none opacity-50",   
                className
            )}>
            <input
                type="text"
                placeholder="Em breve..."
                // placeholder="Busque por um título"
                className={clsx(
                    "text-gray-900 text-sm border border-green-300 ",
                    "rounded p-2 pr-12 focus:outline-green-300",
                )} />
            <button className={clsx(
                "absolute grid place-items-center h-full right-0",
                "text-gray-6 bg-green-300 w-10 rounded-r"
            )} >
                <Search size={16} />
            </button>
        </div>
    )
}