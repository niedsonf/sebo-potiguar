'use client'

import NonSSR from "@/components/non-ssr";
import { CartContextProvider } from "@/contexts/cart-context";
import { SessionProvider } from "next-auth/react";

type ProviderProps = {
    children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
    return (
        <NonSSR>
            <SessionProvider>
                <CartContextProvider>
                    {children}
                </CartContextProvider>
            </SessionProvider>
        </NonSSR>
    )
}   