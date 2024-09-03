import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ConvexReactProvider } from "@/providers/convex-client-provider";
import { ModalProvider } from "@/providers/modal-providers";

import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Collab Board",
  description: "Collaborative whiteboard for teams",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConvexReactProvider>
          <Toaster />
          <ModalProvider />
          {children}
        </ConvexReactProvider>
      </body>
    </html>
  );
}
