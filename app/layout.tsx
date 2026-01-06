import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { EB_Garamond } from "next/font/google"

import "./globals.css"

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-eb-garamond",
})

export const metadata: Metadata = {
  title: "Meraki UofT - Creative Co-working Community",
  description:
    "Meraki is a weekly drop-in co-working space at UofT for passion projects. Friend of Socratica.",
  keywords: ["Meraki", "UofT", "co-working", "passion projects", "community", "Toronto", "Socratica"],
  openGraph: {
    title: "Meraki UofT - Creative Co-working Community",
    description: "Weekly co-working sessions for you to work on your passion projects with likeminded people.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${ebGaramond.variable} antialiased font-serif bg-[#0a0a0a] text-[#f5f5f5]`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
