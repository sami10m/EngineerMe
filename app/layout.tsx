import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Header from "@/app/components/Header";


const cairo = Cairo({
  subsets: ["latin", "arabic"],
});

export const metadata: Metadata = {
  title: "EngineerMe",
  description: "Can I Succeed in Engineering?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" className={cairo.className}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f8fafc",
          margin: 0,
        }}
      >
        <Header />

        <main style={{ flex: 1 }}>{children}</main>
        <Analytics />
        <footer
          style={{
            backgroundColor: "#e5e7eb",
            padding: "20px",
            textAlign: "center",
            color: "#334155",
            fontWeight: 600,
          }}
        >
          © EngineerMe 2026
        </footer>
      </body>
    </html>
  );
}