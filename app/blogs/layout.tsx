import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { CustomCursor } from "@/components/custom-cursor"

export const metadata: Metadata = {
  title: "My Blogs | Developer Portfolio",
  description: "Read my latest thoughts and insights on web development and technology",
}

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider>
      {children}
      <CustomCursor />
    </ThemeProvider>
  )
}
