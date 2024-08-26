'use client'
import { signIn } from "next-auth/react";

export default function LoginPage() {
    return (
        <div>
            <button className="p-4 bg-green-500 text-gray-100"
                onClick={() => signIn("google", { callbackUrl: "/" })}>
                Login
            </button>
        </div>
    )
}