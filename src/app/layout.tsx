import type { Metadata } from "next";
import { Inter, DM_Sans, JetBrains_Mono} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans" 
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display"
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jabez Roberts | Product, Marketing, Engineering & Digital Business Consultant",
  description: "Multidisciplinary builder | Product Marketing • Growth • Engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`
          ${inter.variable} 
          ${dmSans.variable} 
          ${jetbrains.variable} 
          font-sans antialiased
          bg-primary dark:bg-primary-dark text-text-primary dark:text-text-primary-dark
          min-h-screen
        `}
      >
        <Navbar  />

        {/** Main content */}
        <main className="pt-20 md:pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
