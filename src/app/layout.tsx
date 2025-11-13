import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce basic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <main className="bg-background text-text">
          {children}
          <Toaster position="bottom-right" />
        </main>
      </body>
    </html>
  );
}
