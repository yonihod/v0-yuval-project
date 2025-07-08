import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { SkipNav, SkipToNav } from "@/components/skip-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "קונטור הנדסה - בדק בית | Professional Home Inspection",
  description: "Professional Home Inspection – Taking Care of Your Home Before Things Get Complicated! בדק בית מקצועי - דואגים לבית שלכם לפני שהעניינים מסתבכים!",
  generator: 'v0.dev',
  keywords: "בדק בית, home inspection, קונטור הנדסה, בדיקת בית, הנדסאי בניין",
  authors: [{ name: "קונטור הנדסה" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "קונטור הנדסה - בדק בית מקצועי",
    description: "בדק בית מקצועי - דואגים לבית שלכם לפני שהעניינים מסתבכים!",
    type: "website",
    locale: "he_IL",
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <SkipNav />
        <SkipToNav />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
