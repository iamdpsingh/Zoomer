import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoomer",
  description: "By Anubhav and Team || Zoom Clone App",
  icons: {
    icon: '/icons/logo-2.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/icons/logo-2.svg",
          },
          variables: {
            colorText: "#1E1E1E",  
            colorPrimary: "#763626",   
            colorBackground: "#FAF4ED",
            colorInputBackground: "#F5EEDC",  
            colorInputText: "#1E1E1E",   
            borderRadius: "10px",
            fontSize: "16px",
          },
        }}
      >
        <body className={`${inter.className} bg-charcoal-1`}>
          {children}
          <Toaster />
        </body>
      </ClerkProvider>
    </html>
  );
}
