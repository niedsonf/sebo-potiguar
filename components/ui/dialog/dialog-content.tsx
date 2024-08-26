'use client'

import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/utils/cn";
import { X } from "phosphor-react";

interface DialogContentProps extends ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
    animationIn?: string;
    animationOut?: string;
    position?: "left" | "center" | "right" | "top" | "bottom";
}

export const DialogContent = forwardRef<
    ElementRef<typeof DialogPrimitive.Content>,
    DialogContentProps
>(({ className, children, animationIn = "animate-fade-in-scale", animationOut = "animate-fade-out-scale", position = "center", ...rest }, ref) => {
    const [dispose, setDispose] = useState<boolean>(false)
    const triggerDispose = () => {
        setDispose(true)
        setTimeout(() => setDispose(false), 300)
    }
    return (
        <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay
                className={cn(
                    "fixed inset-0 z-40 bg-gray-900/30 grid place-items-center",
                    dispose ? "animate-fade-out" : "animate-fade-in"
                )}
            />
            <DialogPrimitive.Content
                ref={ref}
                data-state={dispose ? "closed" : "open"}
                onEscapeKeyDown={triggerDispose}
                onPointerDownOutside={triggerDispose}
                className={cn(
                    "fixed inset-0 w-fit max-w-[95%] h-fit flex flex-col bg-gray-7 rounded-lg overflow-hidden z-50",
                    "shadow-[0_8px_6px_0_rgba(0,0,0,0.25)]",
                    position === "center" && "m-auto",
                    position === "left" && "mr-auto",
                    position === "right" && "ml-auto",
                    position === "top" && "mb-auto",
                    position === "bottom" && "mt-auto",
                    dispose ? animationOut : animationIn,
                    className
                )}
                {...rest}
            >
                {children}
                <DialogPrimitive.Close
                    onClick={triggerDispose}
                    className="absolute right-6 top-6 grid place-items-center text-gray-7"
                >
                    <X fontSize={18} />
                </DialogPrimitive.Close>
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    )
})
DialogContent.displayName = DialogPrimitive.Content.displayName