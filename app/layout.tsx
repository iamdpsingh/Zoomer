import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
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
            baseTheme: dark,
            variables: {
              colorPrimary: "#6366F1",
              colorBackground: "#0A0E1A",
              colorInputBackground: "#111827",
              colorInputText: "#F9FAFB",
              colorText: "#F3F4F6",
              colorTextSecondary: "#94A3B8",
              borderRadius: "0.75rem",
              fontSize: "0.9375rem",
            },
            elements: {
              card: "border border-white/10 shadow-2xl backdrop-blur-2xl bg-[#0A0E1A]/95 rounded-2xl p-6 sm:p-8",
              headerTitle: "text-white text-2xl font-black tracking-tight",
              headerSubtitle: "text-slate-400 text-sm mt-1",
              socialButtonsBlockButton: "border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 text-white font-medium transition-all duration-200 h-11 rounded-xl shadow-sm",
              socialButtonsBlockButtonText: "font-semibold text-white text-sm",
              dividerLine: "bg-white/10",
              dividerText: "text-slate-400 text-xs font-semibold uppercase tracking-wider",
              formFieldLabel: "text-slate-300 font-medium text-xs uppercase tracking-wider mb-1.5",
              formFieldInput: "rounded-xl border border-white/10 bg-[#111827] text-white px-3.5 py-2.5 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all",
              formButtonPrimary: "bg-indigo-600 hover:bg-indigo-500 text-white font-bold h-11 rounded-xl shadow-lg shadow-indigo-600/30 transition-all duration-200 text-sm",
              footerActionLink: "text-indigo-400 hover:text-indigo-300 font-semibold transition-colors",
              identityPreviewText: "text-white font-medium",
              identityPreviewEditButton: "text-indigo-400 hover:text-indigo-300",
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
