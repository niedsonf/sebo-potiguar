'use client'

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { CartContextProvider } from "@/contexts/cart-context";
import { useEffect, useState } from "react";

export default function HomeLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        isClient
            ? <CartContextProvider>
                <div className="min-h-screen h-full flex flex-col">
                    <Header />
                    <div className="grow flex flex-col">
                        <main
                            className="grow bg-gray-100">
                            {children}
                        </main>
                        <Footer />
                    </div>
                </div>
            </CartContextProvider>
            : <h1>loading</h1>
    )
}