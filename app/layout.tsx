import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebo Potiguar",
  description: "Venda de livros usados",
  generator: "Next.js",
  keywords: ["livros", "usados", "sebo", "potiguar", "natal", "rn"],
  authors: [{
    name: "Niedson",
    url: "https://www.linkedin.com/in/niedsonf/"
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
