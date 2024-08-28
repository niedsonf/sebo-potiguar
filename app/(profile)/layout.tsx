import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProfileLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession()

    if(!session) {
        redirect('/')
    }

    return (
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
    )
}