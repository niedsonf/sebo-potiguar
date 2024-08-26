'use client'

import NonSSR from "@/components/non-ssr";
import { CartContextProvider } from "@/contexts/cart-context";
import { StoreContextProvider } from "@/contexts/store-context";
import { SessionProvider } from "next-auth/react";

type ProviderProps = {
    children: React.ReactNode;
}

export default function Provider({ children }: ProviderProps) {
    return (
        <NonSSR>
            <SessionProvider>
                <StoreContextProvider>
                    <CartContextProvider>
                        {children}
                    </CartContextProvider>
                </StoreContextProvider>
            </SessionProvider>
        </NonSSR>
    )
}   