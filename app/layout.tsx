
import "./globals.css";
import type { Metadata } from "next";
import { AuthProvider } from "@/lib/auth/providers";

export const metadata: Metadata = {
  title: "Shloka",
  description: "Divine scroll experience",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050b17] text-white antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
