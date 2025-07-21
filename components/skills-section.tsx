"use client"

import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function SkillsSection() {
  const frontendSkills = ["HTML", "CSS", "Tailwind CSS", "React", "Redux", "JavaScript", "Vibe Coding"]

  const backendSkills = [
    "Node.js",
    "Express",
    "Python",
    "FastAPI",
    "REST API",
    "Authentication",
    "WebSockets",
    "Authorization",
  ]

  const databaseSkills = ["MySQL", "DBMS", "PostgreSQL", "MongoDB"]

  const aiMlSkills = ["Python", "ML Algorithms", "Deep Learning", "NLP", "Cognitive Computing", "Chatbots"]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Skills & Technologies</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mt-4">
                A comprehensive toolkit that enables me to build complete, scalable applications from frontend to
                AI-powered backends.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Frontend Development</CardTitle>
                  <CardDescription>Building modern user interfaces</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                    {frontendSkills.map((skill, index) => (
                      <motion.div key={index} variants={badgeVariants}>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Backend Development</CardTitle>
                  <CardDescription>Creating robust server-side applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                    {backendSkills.map((skill, index) => (
                      <motion.div key={index} variants={badgeVariants}>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Database Management</CardTitle>
                  <CardDescription>Managing and optimizing data storage</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                    {databaseSkills.map((skill, index) => (
                      <motion.div key={index} variants={badgeVariants}>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle>Machine Learning & AI</CardTitle>
                  <CardDescription>Building intelligent applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div className="flex flex-wrap gap-2" variants={containerVariants}>
                    {aiMlSkills.map((skill, index) => (
                      <motion.div key={index} variants={badgeVariants}>
                        <Badge
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 hover:scale-105"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
