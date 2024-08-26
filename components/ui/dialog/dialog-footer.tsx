'use client'

import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export const DialogFooter = ({
    className,
    children,
    ...rest
}: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "bg-gray-6 px-6 py-6 flex",
            className
        )}
        {...rest}
    >
        {children}
    </div>
)
