"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create FormData object for submission
      const form = e.target as HTMLFormElement
      const formDataObj = new FormData(form)

      // Submit to FormSubmit.co
      const response = await fetch("https://formsubmit.co/pkaur1_be23@thapar.edu", {
        method: "POST",
        body: formDataObj,
      })

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      } else {
        throw new Error("Failed to send message")
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-grid-small-white/[0.2] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get In Touch</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mt-4">
                Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
              </p>
            </motion.div>
          </div>
          <motion.div
            className="grid md:grid-cols-2 gap-6 items-stretch"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex flex-col justify-center space-y-4">
              <motion.div className="flex items-center gap-4" variants={itemVariants} whileHover={{ x: 5 }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p className="text-muted-foreground">prabhleen6003@gmail.com</p>
                </div>
              </motion.div>
              <motion.div className="flex items-center gap-4" variants={itemVariants} whileHover={{ x: 5 }}>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Instagram</h3>
                  <p className="text-muted-foreground">@prabhleen__03</p>
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Card className="mt-6 bg-card/50 backdrop-blur-sm border-primary/20">
                  <CardHeader>
                    <CardTitle>Let's Work Together</CardTitle>
                    <CardDescription>
                      I'm currently available for internships, freelance work, and collaborative projects. If you have
                      an exciting opportunity or project idea, don't hesitate to reach out.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="grid gap-4">
                    <motion.div className="grid gap-2" variants={itemVariants}>
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="transition-all duration-300 focus:border-primary focus:ring-primary"
                      />
                    </motion.div>
                    <motion.div className="grid gap-2" variants={itemVariants}>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="transition-all duration-300 focus:border-primary focus:ring-primary"
                      />
                    </motion.div>
                    <motion.div className="grid gap-2" variants={itemVariants}>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className="min-h-[120px] transition-all duration-300 focus:border-primary focus:ring-primary"
                        required
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </motion.div>

                    {/* Hidden fields for FormSubmit.co configuration */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input
                      type="hidden"
                      name="_next"
                      value={`${typeof window !== "undefined" ? window.location.origin : ""}/thank-you`}
                    />
                    <input type="hidden" name="_subject" value="New Contact Form Submission from Portfolio" />
                    <input type="hidden" name="_template" value="table" />

                    <CardFooter className="px-0">
                      <motion.div
                        className="w-full"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
                          <span className="relative z-10 flex items-center justify-center">
                            {isSubmitting ? (
                              <>
                                <span className="mr-2">Sending...</span>
                                <Send className="h-4 w-4 animate-pulse" />
                              </>
                            ) : (
                              <>
                                Send Message
                                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </>
                            )}
                          </span>
                          <span className="absolute inset-0 bg-primary/80 translate-y-[101%] group-hover:translate-y-0 transition-transform duration-300" />
                        </Button>
                      </motion.div>
                    </CardFooter>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
