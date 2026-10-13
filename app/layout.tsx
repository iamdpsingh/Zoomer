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
              logoImageUrl: "/icons/logo-2.svg",
              socialButtonsVariant: "blockButton",
              socialButtonsPlacement: "top",
              showOptionalFields: false,
            },
            variables: {
              colorPrimary: "#6366F1",
              colorBackground: "#090D18",
              colorInputBackground: "#101728",
              colorInputText: "#F9FAFB",
              colorText: "#F3F4F6",
              colorTextSecondary: "#94A3B8",
              borderRadius: "0.875rem",
              fontSize: "0.9375rem",
              fontFamily: inter.style.fontFamily,
            },
            elements: {
              rootBox: "w-full",
              cardBox: "w-full max-w-[440px] shadow-2xl shadow-indigo-950/60 rounded-3xl overflow-hidden border border-white/[0.12] backdrop-blur-3xl bg-[#090D18]/95",
              card: "bg-transparent shadow-none border-none p-6 sm:p-8 w-full",
              logoBox: "flex justify-center mb-1",
              logoImage: "size-10 object-contain mx-auto filter drop-shadow(0 0 16px rgba(99,102,241,0.6))",
              header: "gap-1 pb-3 text-center",
              headerTitle: "text-white text-2xl font-black tracking-tight",
              headerSubtitle: "text-slate-400 text-sm font-normal",
              socialButtonsBlockButton: "relative flex items-center justify-center gap-3 h-12 w-full rounded-xl border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] hover:border-indigo-400/50 text-white font-semibold transition-all duration-200 shadow-md shadow-black/20 hover:shadow-indigo-500/10 active:scale-[0.99]",
              socialButtonsBlockButtonText: "font-semibold text-white text-sm tracking-wide",
              dividerRow: "my-5",
              dividerLine: "bg-white/10 h-px",
              dividerText: "text-slate-400 text-xs font-semibold uppercase tracking-wider px-3",
              formFieldLabel: "text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1.5",
              formFieldInput: "h-11 rounded-xl border border-white/15 bg-[#101728] text-white px-4 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all text-sm shadow-inner",
              formFieldAction: "text-indigo-400 hover:text-indigo-300 font-semibold text-xs transition-colors",
              formFieldErrorText: "text-rose-400 text-xs mt-1 font-medium",
              formButtonPrimary: "h-11 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 active:scale-[0.99] transition-all duration-200",
              footer: "bg-transparent border-t border-white/[0.08] pt-4 mt-3",
              footerAction: "flex items-center justify-center gap-1",
              footerActionText: "text-xs text-slate-400",
              footerActionLink: "text-indigo-400 hover:text-indigo-300 font-semibold text-xs transition-colors ml-1",
              identityPreviewText: "text-white font-medium text-sm",
              identityPreviewEditButton: "text-indigo-400 hover:text-indigo-300 text-xs font-semibold",
              formResendCodeLink: "text-indigo-400 hover:text-indigo-300 text-xs font-semibold",
              otpCodeFieldInput: "border border-white/15 bg-[#101728] text-white rounded-xl text-lg font-bold",
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
