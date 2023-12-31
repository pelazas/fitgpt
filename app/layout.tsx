import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FITGPT",
  description: "Get yourself a workout + meal plan with only a few clicks!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex items-center justify-between flex-wrap bg-slate-600 p-6 pr-20">
          <Link className="text-white font-bold text-xl" href="/">
            FITGPT
          </Link>
          <div className="flex flex-row items-center gap-12">
            <Link className="text-white font-bold text-lg" href="/about">
              About
            </Link>
            <Link className="text-white font-bold text-lg" href="/dashboard">
              Get started
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
