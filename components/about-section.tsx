"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Heart } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("experience")

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUpVariants}>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                <span className="text-foreground">About</span> <span className="text-primary">Me</span>
              </h2>
              <p className="max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mt-4">
                I'm a passionate Computer Science Engineering student at Thapar Institute with a strong foundation in
                full-stack development and machine learning. I love solving complex problems and building innovative
                solutions.
              </p>
            </motion.div>
          </div>

          <Tabs defaultValue="experience" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <motion.div
              className="flex justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <TabsList className="grid grid-cols-3 w-full max-w-md">
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  onMouseEnter={() => setActiveTab("experience")}
                >
                  Experience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  onMouseEnter={() => setActiveTab("education")}
                >
                  Education
                </TabsTrigger>
                <TabsTrigger
                  value="interests"
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  onMouseEnter={() => setActiveTab("interests")}
                >
                  Interests
                </TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="experience" className="mt-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainerVariants}
                className="space-y-6"
              >
                <motion.div variants={fadeInUpVariants} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Marketing <span className="text-primary">Lead</span>
                    </h3>
                    <p className="text-primary">Thapar Institute Counselling Cell | 2024 - Present</p>
                    <p className="text-muted-foreground mt-2">
                      Lead marketing for Luminescence'24, a 3-day annual mental health awareness festival.
                      Collaboratively secured 30+ sponsors, 30+ stalls, and achieved 5000+ footfall.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUpVariants} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Core <span className="text-primary">Member</span>
                    </h3>
                    <p className="text-primary">Saturnalia Marketing Department | Sept - Nov 2024</p>
                    <p className="text-muted-foreground mt-2">
                      Worked in the marketing department for Saturnalia, contributing to event promotion and brand
                      awareness campaigns.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUpVariants} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Summer <span className="text-primary">Intern</span>
                    </h3>
                    <p className="text-primary">ELC | June - July 2025</p>
                    <p className="text-muted-foreground mt-2">
                      Worked on invisible watermarking system using ML/DL techniques. Wrote a research paper documenting
                      the implementation and results.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainerVariants}
                className="space-y-6"
              >
                <motion.div variants={fadeInUpVariants} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      B.E. in <span className="text-primary">Computer Science and Engineering</span>
                    </h3>
                    <p className="text-primary">Thapar Institute of Engineering and Technology | 2023 - 2027</p>
                    <p className="text-muted-foreground mt-2">
                      Current CGPA: 9.05 - Pursuing Bachelor's degree with focus on software engineering, data
                      structures, algorithms, and machine learning.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUpVariants} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Higher Secondary <span className="text-primary">Education</span>
                    </h3>
                    <p className="text-primary">Sri Aurobindo International School, Patiala | 2022-2023</p>
                    <p className="text-muted-foreground mt-2">
                      Achieved 93% in higher secondary education with strong foundation in mathematics and sciences.
                    </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUpVariants} className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      Secondary <span className="text-primary">Education</span>
                    </h3>
                    <p className="text-primary">Sri Aurobindo International School, Patiala | 2020-2021</p>
                    <p className="text-muted-foreground mt-2">
                      Achieved 97% in secondary education, demonstrating consistent academic excellence.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>

            <TabsContent value="interests" className="mt-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainerVariants}
                className="grid gap-6 md:grid-cols-2"
              >
                <motion.div variants={fadeInUpVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Technical <span className="text-primary">Interests</span>
                  </h3>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">Problem Solving & Competitive Programming</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">Data Structures & Algorithms in C++</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">Full Stack Web Development</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">Machine Learning & AI</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">UI/UX Design</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div variants={fadeInUpVariants} className="space-y-4">
                  <h3 className="text-2xl font-bold text-foreground">
                    Creative <span className="text-primary">Pursuits</span>
                  </h3>
                  <div className="space-y-2">
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">Graphic Design</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">Digital Marketing</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">Event Management</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">Research & Technical Writing</p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <Heart className="h-4 w-4 text-primary" />
                      <p className="text-muted-foreground">Open Source Contribution</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
