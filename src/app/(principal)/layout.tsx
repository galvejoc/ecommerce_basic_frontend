import type { Metadata } from "next";
import { Footer, TopMenu } from "@/components";

export const metadata: Metadata = {
  title: "To-do list",
  description: "Web to-do list for galvejoc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen flex flex-col">
      <TopMenu />
      <div className="flex">
        <div className="container mx-auto">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}
