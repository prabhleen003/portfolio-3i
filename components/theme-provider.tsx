"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

interface ThemeContextProps {
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: "dark",
  setTheme: () => {},
})

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  // This effect runs once on component mount
  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme && (storedTheme === "light" || storedTheme === "dark")) {
      setTheme(storedTheme)
    } else {
      // Default to dark theme
      setTheme("dark")
    }
  }, [])

  // This effect runs whenever theme changes
  useEffect(() => {
    if (!mounted) return

    localStorage.setItem("theme", theme)

    // Remove both classes first
    document.documentElement.classList.remove("dark", "light")

    // Add the current theme class
    document.documentElement.classList.add(theme)
  }, [theme, mounted])

  // Only render children after initial theme is determined
  if (!mounted) {
    return <div className="min-h-screen bg-background" />
  }

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
