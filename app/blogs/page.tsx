"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"

export default function BlogsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Sample blog data
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Next.js and TypeScript",
      excerpt:
        "Learn how to set up a new project with Next.js and TypeScript, and discover the benefits of this powerful combination.",
      date: "April 15, 2023",
      readTime: "8 min read",
      author: "John Doe",
      tags: ["Next.js", "TypeScript", "Web Development"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "Building Responsive UIs with Tailwind CSS",
      excerpt: "Explore how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
      date: "May 22, 2023",
      readTime: "6 min read",
      author: "Jane Smith",
      tags: ["CSS", "Tailwind", "UI Design"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "State Management in React with Context API",
      excerpt: "Discover how to effectively manage state in your React applications using the built-in Context API.",
      date: "June 10, 2023",
      readTime: "10 min read",
      author: "John Doe",
      tags: ["React", "State Management", "Context API"],
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "Creating Animations with Framer Motion",
      excerpt: "Learn how to add beautiful animations to your React components using the Framer Motion library.",
      date: "July 5, 2023",
      readTime: "7 min read",
      author: "Jane Smith",
      tags: ["React", "Animation", "Framer Motion"],
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container px-4 md:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-5 w-5 text-primary" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main className="container px-4 md:px-6 py-12">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-foreground">My</span> <span className="text-primary">Blog</span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mt-4">
                Thoughts, stories, and ideas about web development, design, and technology.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full overflow-hidden border border-border/60 shadow-md">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      alt={blog.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4" />
                      <span>{blog.date}</span>
                      <span className="mx-1">•</span>
                      <Clock className="h-4 w-4" />
                      <span>{blog.readTime}</span>
                    </div>
                    <CardTitle className="text-xl font-bold">{blog.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{blog.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {blog.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-primary/10 text-primary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{blog.author}</span>
                    </div>
                    <Button variant="outline" size="sm" className="group">
                      Read More
                      <ArrowLeft className="ml-2 h-4 w-4 rotate-180 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border mt-24">
        <div className="container px-4 md:px-6 py-12 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} DevPortfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
