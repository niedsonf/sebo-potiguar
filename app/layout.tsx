import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Provider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sebo Potiguar",
  description: "Venda de livros usados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
