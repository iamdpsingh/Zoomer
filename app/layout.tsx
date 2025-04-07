import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
// import { SWRConfig } from 'swr';



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zoomer",
  description: "By Anubhav and Team || Zoom Clone App",
  icons:{
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<ClerkProvider appearance={{
        layout: {
          socialButtonsVariant: "iconButton",
          logoImageUrl: "/icons/logo.svg",
        },
        variables: {
          colorText: "#fff",
          colorPrimary: "#0E78F9",
          colorBackground: "#A55D35",
          colorInputBackground: "#431700",
          colorInputText: "#fff",
        }
      }}>
      <body className={`${inter.className} bg-charcoal-2`}>{children}
        <Toaster/>
      </body>
      </ClerkProvider>
    </html>
  );
}