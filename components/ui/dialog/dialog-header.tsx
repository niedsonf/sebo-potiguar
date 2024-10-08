'use client'

import { cn } from "@/utils/cn";
import { HTMLAttributes } from "react";

export const DialogHeader = ({
    className,
    children,
    ...rest
}: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "bg-inherit px-6 pt-6 flex",
            className
        )}
        {...rest}
    >
        {children}
    </div>
)