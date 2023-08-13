import "./globals.css";
import { cn } from "@/utils";
import { Inter } from "next/font/google";
import Link from "next/link";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "umesh",
  description: "umesh's portfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "min-h-screen flex flex-col")}>
        <main className="p-4 md:p-8 flex justify-center flex-1">
          {children}
        </main>
        <footer className="flex justify-center gap-4 p-4 text-zinc-500 text-sm transition-colors duration-300">
          <a
            href="https://github.com/umeshjain1999"
            target="_blank"
            className="hover:text-zinc-700"
          >
            Github
          </a>
          <span>&diams;</span>
          <a
            href="https://www.linkedin.com/in/umesh-jain-50958a153/"
            target="_blank"
            className="hover:text-zinc-700"
          >
            Linkdin
          </a>
          <span>&diams;</span>
          <a
            href="https://twitter.com/pinktshurt"
            target="_blank"
            className="hover:text-zinc-700"
          >
            Twitter
          </a>
        </footer>
      </body>
    </html>
  );
}
