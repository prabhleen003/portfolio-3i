"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Prabhleen-Kaur-Resume.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-6 text-center md:text-left"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight">
                  <span className="typing-effect">Hi, I'm </span>
                  <span className="text-primary typing-effect-delay-1">Prabhleen Kaur</span>
                  <span className="block typing-effect-delay-2">Full Stack Developer</span>
                </h1>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="pt-4"
              >
                <p className="text-lg md:text-xl text-muted-foreground italic">"A learner, a thinker, and a builder"</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Developer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 100,
            }}
            className="flex-1 relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Moving glow effect */}
              <div className="glow-effect" style={{ left: "50%", top: "50%" }}></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 blur-2xl -z-10" />
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-primary to-primary/50 animate-pulse-slow -z-10" />
              <div className="absolute inset-1 rounded-full bg-background -z-10" />
              <Image
                src="/images/profile.jpg"
                alt="Prabhleen Kaur - Full Stack Developer"
                width={600}
                height={600}
                className="rounded-full object-cover"
                priority
              />

              {/* Floating tech icons */}
              {!isMobile && (
                <>
                  <motion.div
                    className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-primary/20"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center text-primary font-bold text-xs">
                      React
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/4 -left-6 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-primary/20"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 0.5,
                    }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center text-primary font-bold text-xs">
                      Python
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-10 -right-8 bg-background/80 backdrop-blur-sm p-2 rounded-full shadow-lg border border-primary/20"
                    animate={{
                      y: [0, 8, 0],
                      rotate: [0, 8, 0],
                    }}
                    transition={{
                      duration: 4.5,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      delay: 1,
                    }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center text-primary font-bold text-xs">
                      AI/ML
                    </div>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
