'use client'

import Link from "next/link"

export function Footer() {
    return (
        <footer className="bg-gray-800 flex justify-center">
            <div className="max-w-7xl w-full py-2 max-lg:px-4 flex items-center justify-between">
                <span className="text-xs text-white">
                    Feito com ❤️ em Natal/RN
                </span>
                <Link
                    href="https://www.linkedin.com/in/niedsonf/"
                    target="_blank"
                    className="text-xs text-white">
                    Desenvolvido por Nio
                </Link>
            </div>
        </footer>
    )
}