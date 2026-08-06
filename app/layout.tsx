import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/effects/CustomCursor";
import ScrollProgress from "@/components/effects/ScrollProgress";
import CommandPalette from "@/components/effects/CommandPalette";
import ToastProvider from "@/components/effects/ToastProvider";
import SmoothScrollProvider from "@/components/effects/SmoothScrollProvider";
import AskMadhu from "@/components/effects/AskMadhu";
import { PERSONAL, SITE_URL } from "@/constants/content";

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL in your Vercel project once a custom domain is live.
  // Falls back to the actual deployed URL so canonical/OG tags never point at an unclaimed domain.
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${PERSONAL.name} — AI Engineer & Backend Developer`,
    template: `%s — ${PERSONAL.name}`,
  },
  description: PERSONAL.tagline,
  keywords: ["AI Engineer", "GenAI Engineer", "Generative AI", "RAG", "LLM", "AI Agents", "Backend Engineer", "Machine Learning", PERSONAL.name],
  authors: [{ name: PERSONAL.name }],
  openGraph: {
    title: `${PERSONAL.name} — AI Engineer & Backend Developer`,
    description: PERSONAL.tagline,
    url: SITE_URL,
    siteName: `${PERSONAL.name}`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL.name} — AI Engineer & Backend Developer`,
    description: PERSONAL.tagline,
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body id="top">
        <ToastProvider>
          <SmoothScrollProvider>
            <ScrollProgress />
            <CustomCursor />
            <CommandPalette />
            <Navbar />
            <main>{children}</main>
            <Footer />
            <AskMadhu />
          </SmoothScrollProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
