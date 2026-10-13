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

const publishableKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <>
      {children}
      <Toaster />
    </>
  );

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.className} min-h-screen bg-[#080C15] text-white antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        {publishableKey ? (
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
                colorBackground: "#0c1322",
                colorInputBackground: "#0f172a",
                colorInputText: "#FFFFFF",
                colorText: "#F8FAFC",
                colorTextSecondary: "#94A3B8",
                borderRadius: "0.875rem",
                fontSize: "0.9375rem",
                fontFamily: inter.style.fontFamily,
              },
              elements: {
                rootBox: "w-full",
                card: "bg-[#0c1322]/85 backdrop-blur-2xl border border-indigo-400/25 shadow-2xl rounded-3xl p-6 sm:p-8",
                headerTitle: "text-white text-2xl font-black tracking-tight",
                headerSubtitle: "text-slate-400 text-sm font-normal",
                socialButtonsBlockButton: "relative flex items-center justify-center gap-3 h-12 w-full rounded-xl border border-white/15 bg-white/[0.05] hover:bg-white/[0.1] hover:border-indigo-400/50 text-white font-semibold transition-all duration-200 shadow-md shadow-black/20 hover:shadow-indigo-500/10 active:scale-[0.99]",
                socialButtonsBlockButtonText: "font-semibold text-white text-sm tracking-wide",
                dividerRow: "my-5",
                dividerLine: "bg-white/10 h-px",
                dividerText: "text-slate-400 text-xs font-semibold uppercase tracking-wider px-3",
                formFieldLabel: "text-slate-300 font-semibold text-xs uppercase tracking-wider mb-1.5",
                formFieldInput: "h-11 rounded-xl border border-white/15 bg-[#0f172a] text-white px-4 placeholder:text-slate-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/25 transition-all text-sm shadow-inner",
                formFieldAction: "text-indigo-400 hover:text-indigo-300 font-semibold text-xs transition-colors",
                formFieldErrorText: "text-rose-400 text-xs mt-1 font-medium",
                formButtonPrimary: "h-11 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-violet-600 hover:from-indigo-400 hover:to-violet-500 text-white font-bold text-sm shadow-lg shadow-indigo-600/30 hover:shadow-indigo-500/50 active:scale-[0.99] transition-all duration-200",
                footer: "bg-transparent border-t border-white/[0.08] pt-4 mt-3",
                footerActionText: "text-xs text-slate-400",
                footerActionLink: "text-indigo-400 hover:text-indigo-300 font-semibold text-xs transition-colors ml-1",
                modalBackdrop: "bg-[#080C15]/80 backdrop-blur-xl",
                modalContent: "border border-indigo-400/25 bg-[#0c1322]/95 backdrop-blur-2xl shadow-2xl rounded-3xl overflow-hidden",
                modalCloseButton: "text-slate-300 hover:text-white bg-white/[0.06] hover:bg-white/[0.12] rounded-xl border border-white/10",
                userProfileRootBox: "w-full bg-transparent",
                userProfileNavbar: "bg-[#080c15]/60 border-r border-white/[0.08] p-3",
                userProfileNavbarButton: "rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors py-2 px-3 text-sm font-medium",
                userProfilePage: "bg-transparent p-6",
                profileSection: "border-b border-white/[0.08] pb-6 mb-6",
                profileSectionTitleText: "text-white font-bold text-base",
                profileSectionSubtitle: "text-slate-400 text-xs",
                profileSectionContent: "text-slate-200",
                profileSectionPrimaryButton: "rounded-xl border border-white/15 bg-white/[0.06] hover:bg-white/[0.12] text-white text-xs font-semibold px-4 py-2",
                userPreview: "rounded-2xl bg-white/[0.03] border border-white/[0.08] p-4",
                userPreviewMainIdentifier: "text-white font-semibold text-sm",
                userPreviewSecondaryIdentifier: "text-slate-400 text-xs",
                badge: "rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 font-semibold text-xs px-2.5 py-0.5",
                userButtonPopoverCard: "bg-[#0c1322]/95 border border-indigo-400/25 backdrop-blur-2xl shadow-2xl rounded-2xl p-1.5",
                userButtonPopoverActionButton: "rounded-xl text-slate-300 hover:text-white hover:bg-white/[0.06] transition-colors py-2 px-3",
                userButtonPopoverActionButtonText: "text-sm font-medium",
              },
            }}
          >
            {content}
          </ClerkProvider>
        ) : (
          content
        )}
      </body>
    </html>
  );
}
