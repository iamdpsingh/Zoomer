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
            layout: {
              socialButtonsVariant: "blockButton",
              socialButtonsPlacement: "top",
              showOptionalFields: false,
            },
            variables: {
              colorPrimary: "#6366F1",
              colorBackground: "#0B101D",
              colorInputBackground: "#131B2E",
              colorInputText: "#F9FAFB",
              colorText: "#F3F4F6",
              colorTextSecondary: "#94A3B8",
              borderRadius: "0.875rem",
              fontSize: "0.9375rem",
              fontFamily: inter.style.fontFamily,
            },
            elements: {
              rootBox: "w-full",
              cardBox: "w-full max-w-[440px] shadow-2xl shadow-indigo-950/50 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-2xl bg-[#0B101D]/95",
              card: "bg-transparent shadow-none border-none p-6 sm:p-8 w-full",
              header: "gap-1.5 pb-2",
              headerTitle: "text-white text-2xl font-black tracking-tight",
              headerSubtitle: "text-slate-400 text-sm font-normal",
              socialButtonsBlockButton: "relative flex items-center justify-center gap-3 h-12 w-full rounded-xl border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] hover:border-indigo-500/50 text-white font-semibold transition-all duration-200 shadow-sm active:scale-[0.99]",
              socialButtonsBlockButtonText: "font-semibold text-white text-sm",
              dividerRow: "my-5",
              dividerLine: "bg-white/10 h-px",
              dividerText: "text-slate-400 text-xs font-semibold uppercase tracking-wider px-3",
              formFieldLabel: "text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1.5",
              formFieldInput: "h-11 rounded-xl border border-white/10 bg-[#131B2E] text-white px-4 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all text-sm",
              formButtonPrimary: "h-11 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 active:scale-[0.99] transition-all duration-200",
              footer: "bg-transparent border-t border-white/[0.06] pt-4 mt-2",
              footerActionText: "text-xs text-slate-400",
              footerActionLink: "text-indigo-400 hover:text-indigo-300 font-semibold text-xs ml-1 transition-colors",
              identityPreviewText: "text-white font-medium text-sm",
              identityPreviewEditButton: "text-indigo-400 hover:text-indigo-300 text-xs font-semibold",
              formResendCodeLink: "text-indigo-400 hover:text-indigo-300 text-xs font-semibold",
              otpCodeFieldInput: "border border-white/15 bg-[#131B2E] text-white rounded-xl text-lg font-bold",
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
