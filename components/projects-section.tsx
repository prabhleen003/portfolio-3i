"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ProjectsSection() {
  const projects = [
    {
      title: "Resume Spark",
      description:
        "ATS optimized resume analyzer that uses Gemini API to provide personalized feedback and suggestions for job seekers.",
      image: "/images/resume-spark-new.png",
      tags: ["Python", "Streamlit", "Gemini API", "AI/ML"],
      demoUrl: "https://resumespark-crje3lazswm4bpbsd7frmg.streamlit.app/",
      githubUrl: "https://github.com/prabhleen003/ResumeSpark",
      details:
        "An AI-powered resume analysis tool that provides job seekers with personalized, actionable feedback to enhance their resume. Uses advanced NLP techniques to analyze resume content and match it with job requirements.",
      imagePosition: "object-center",
    },
    {
      title: "Job Portal",
      description:
        "Full-stack job searching platform connecting job seekers with employers through an intuitive interface.",
      image: "/images/job-portal-new.png",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      demoUrl: "#",
      githubUrl: "https://github.com/prabhleen003/Job-Portal",
      details:
        "A comprehensive job portal featuring user authentication, job posting, application tracking, and advanced search filters. Built with modern full-stack technologies for optimal performance and user experience.",
      imagePosition: "object-center",
    },
    {
      title: "Drowsiness Detection System",
      description: "Deep Learning-based eye state detection model for driver safety and alertness monitoring.",
      image: "/images/drowsiness-detection-new.png",
      tags: ["Python", "Deep Learning", "CNN", "OpenCV"],
      demoUrl: "#",
      githubUrl: "https://github.com/prabhleen003/Drowsiness_detection",
      details:
        "Developed a deep learning model that accurately detects eye states (open or closed) from images for drowsiness detection. Uses convolutional neural networks and computer vision techniques for real-time monitoring.",
      imagePosition: "object-center",
    },
    {
      title: "KodeBase - Multi Code IDE",
      description:
        "A comprehensive multi-language IDE for managing projects across various programming languages with real-time collaboration.",
      image: "/images/multicode-ide-new.png",
      tags: ["React", "Node.js", "MongoDB", "JavaScript"],
      demoUrl: "#",
      githubUrl: "https://github.com/prabhleen003/MULTI-CODE-INTEGRATED--DEVELOPMENT-ENVIRONMENT",
      details:
        "A feature-rich IDE that supports multiple programming languages with syntax highlighting, code completion, and project management capabilities. Built with modern web technologies for seamless development experience.",
      imagePosition: "object-center",
    },
  ]

  // State to track which card is flipped
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({})

  // Toggle card flip
  const toggleCardFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  }

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                Featured Projects
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mt-4">
                A selection of my recent work showcasing my skills in full stack development, AI/ML, and
                problem-solving.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="perspective-1000"
                whileHover={{ scale: 1.02 }}
              >
                <div
                  className={`relative h-full transition-all duration-500 preserve-3d ${
                    flippedCards[index] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front of card */}
                  <Card className="h-full overflow-hidden border border-border/60 shadow-md backface-hidden">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className={`object-cover transition-transform duration-300 group-hover:scale-105 ${project.imagePosition}`}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault()
                            e.stopPropagation()
                            toggleCardFlip(index)
                          }}
                          className="bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-secondary text-secondary-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex justify-between">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="group/btn relative overflow-hidden bg-transparent"
                        >
                          <Link href={project.githubUrl}>
                            <Github className="h-4 w-4 mr-2" /> Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="group/btn relative overflow-hidden">
                          <Link href={project.demoUrl}>
                            Live Demo <ArrowUpRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>

                  {/* Back of card */}
                  <Card className="absolute inset-0 h-full overflow-hidden border border-border/60 shadow-md p-6 flex flex-col backface-hidden rotate-y-180">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-4 text-primary">{project.title}</h3>
                      <p className="text-muted-foreground mb-6">{project.details}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-secondary text-secondary-foreground">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto space-y-4">
                      <div className="flex gap-2 -ml-1">
                        <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                          <Link href={project.githubUrl}>
                            <Github className="mr-2 h-4 w-4" /> View Code
                          </Link>
                        </Button>
                        <Button size="sm" asChild className="flex-1">
                          <Link href={project.demoUrl}>
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                          </Link>
                        </Button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleCardFlip(index)}
                        className="w-full hover:bg-secondary/50"
                      >
                        Back to Preview
                      </Button>
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
