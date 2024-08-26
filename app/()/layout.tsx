import Provider from "../provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function HomeLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <Provider>
            <div className="min-h-screen h-full flex flex-col">
                <Header />
                <div className="grow flex flex-col">
                    <main
                        className="grow bg-gray-100 flex">
                        {children}
                    </main>
                    <Footer />
                </div>
            </div>
        </Provider>
    )
}