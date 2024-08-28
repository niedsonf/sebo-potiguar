import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> { }

export function Card({ children, className }: CardProps) {
    return (
        <div
            className={cn(
                "flex rounded-lg bg-gray-7 border border-[rgba(135,139,141,0.40)] p-5",
                className
            )}>
            {children}
        </div>
    )
}