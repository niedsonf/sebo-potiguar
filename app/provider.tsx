'use client'

import NonSSR from "@/components/non-ssr";
import { CartContextProvider } from "@/contexts/cart-context";
import { StoreContextProvider } from "@/contexts/store-context";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type ProviderProps = {
    children: React.ReactNode;
    session: Session | null;
}

export default function Provider({ children, session }: ProviderProps) {
    return (
        <SessionProvider session={session}>
            <NonSSR>
                <StoreContextProvider>
                    <CartContextProvider>
                        {children}
                    </CartContextProvider>
                </StoreContextProvider>
            </NonSSR>
        </SessionProvider>
    )
}   