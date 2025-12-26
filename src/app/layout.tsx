import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dream",
  description: "Dream uses the browser on your computer to get real work done.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white">
        {children}
      </body>
    </html>
  );
}
