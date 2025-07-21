import Link from "next/link"
import { Code, Github, Linkedin, Mail, Instagram } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { NavigationMenu } from "@/components/navigation-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />
      <main className="container px-4 md:px-6">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <footer className="border-t border-border mt-24">
        <div className="container px-4 md:px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">MyPortfolio</span>
            </div>
            <div className="flex items-center gap-4 ml-4">
              <Link href="https://github.com/prabhleen003" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5 hover:text-primary transition-colors" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com/in/prabhleen-kaur-586833302" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://instagram.com/prabhleen__03" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5 hover:text-primary transition-colors" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:prabhleen6003@gmail.com">
                <Mail className="h-5 w-5 hover:text-primary transition-colors" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Prabhleen Kaur. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
