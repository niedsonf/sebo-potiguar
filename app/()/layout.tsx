import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function HomeLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession()

    if(!session) {
        redirect("/login")
    }

    return (
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
    )
}