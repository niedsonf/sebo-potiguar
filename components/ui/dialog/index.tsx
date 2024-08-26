'use client'

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogContent } from "./dialog-content";
import { DialogTitle } from "./dialog-title";
import { DialogDescription } from "./dialog-description";
import { DialogHeader } from "./dialog-header";
import { DialogBody } from "./dialog-body";
import { DialogFooter } from "./dialog-footer";

const DialogRoot = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogClose = DialogPrimitive.Close

export const Dialog = {
    Root: DialogRoot,
    Trigger: DialogTrigger,
    Content: DialogContent,
    Title: DialogTitle,
    Description: DialogDescription,
    Header: DialogHeader,
    Body: DialogBody,
    Footer: DialogFooter,
    Close: DialogClose
}