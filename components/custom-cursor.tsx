"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [mounted, setMounted] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setMounted(true)

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition)
    }
  }, [])

  if (!mounted) return null

  return (
    <div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-50 mix-blend-difference"
      style={{
        transform: `translate(${position.x - 12}px, ${position.y - 12}px)`,
        transition: "transform 0.1s ease-out",
      }}
    >
      <div className="w-full h-full rounded-full border-2 border-primary/60 bg-transparent shadow-lg shadow-primary/20" />
    </div>
  )
}
