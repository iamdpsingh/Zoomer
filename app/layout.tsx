import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/ui/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Zoomer — Next-Gen Video Meetings",
  description: "Ultra low-latency video meetings, instant rooms, screen sharing, and cloud recordings for modern teams.",
  icons: {
    icon: '/icons/logo-2.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-screen bg-[#080C15] text-white antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        <ClerkProvider
          appearance={{
            baseTheme: shadcn as any,
            layout: {
              socialButtonsVariant: "iconButton",
              logoImageUrl: "/icons/logo-2.svg",
            },
            variables: {
              colorPrimary: "#6366F1",
            },
          }}
        >
          {children}
          <Toaster />
        </ClerkProvider>
      </body>
    </html>
  );
}
