'use client'

import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export const DialogBody = ({
    className,
    children,
    ...rest
}: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "bg-gray-7 px-6 py-6 flex overflow-y-auto",
            className
        )}
        {...rest}
    >
        {children}
    </div>
)
