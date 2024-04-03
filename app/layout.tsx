import { cn } from "@/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

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
      <body
        className={cn(inter.className, "min-h-screen flex flex-col relative bg-zinc-50")}
      >
        <main vaul-drawer-wrapper="" className="p-4 sm:p-8 flex justify-center flex-1 bg-zinc-50">
          {children}
        </main>
        <footer className="flex justify-center gap-4 p-4 text-zinc-500 text-sm transition-colors duration-300 bg-zinc-50">
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
        <Analytics />
      </body>
    </html>
  );
}
