'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";

export const DialogTitle = forwardRef<
    ElementRef<typeof DialogPrimitive.Title>,
    ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, children, ...rest }, ref) => ((
    <DialogPrimitive.Title
        ref={ref}
        className={cn("text-base text-gray-1 font-[700]", className)}
        {...rest}
    >
        {children}
    </DialogPrimitive.Title>
)))
DialogTitle.displayName = DialogPrimitive.DialogTitle.displayName