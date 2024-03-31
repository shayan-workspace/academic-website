import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { RootProvider } from "./provider";

import { Navbar } from "@/components/navbar";
import { Toaster } from "@/components/ui/sonner";

import { auth } from "@/lib/auth";

import "./globals.css";

export const metadata: Metadata = {
  title: "Home",
};

export default async function RootLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative">
        <RootProvider session={session}>
          <header className="bg-orange-50">
            <Navbar />
          </header>
          {children}
          <Toaster />
        </RootProvider>
      </body>
    </html>
  );
}
