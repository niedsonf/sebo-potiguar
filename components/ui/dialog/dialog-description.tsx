'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog";

export const DialogDescription = forwardRef<
    ElementRef<typeof DialogPrimitive.Description>,
    ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, children, ...rest }, ref) => ((
    <DialogPrimitive.Description
        ref={ref}
        className=""
        {...rest}
    >
        {children}
    </DialogPrimitive.Description>
)))
DialogDescription.displayName = DialogPrimitive.DialogDescription.displayName