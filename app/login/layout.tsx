import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function LoginLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {

    const session = await getServerSession()

    if (session) {
        redirect("/")
    }

    return (
        <div className="min-h-screen h-full flex flex-col">
            {children}
        </div>
    )
}