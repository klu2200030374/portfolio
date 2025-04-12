import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ScrollToSection from "@/components/scroll-to-section"

export const metadata = {
  title: "Thonduru Durgaprasad Reddy - Portfolio",
  description: "Student and aspiring cloud enthusiast showcasing projects and certifications",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
          <ScrollToSection />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'