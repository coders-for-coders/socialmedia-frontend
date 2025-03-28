"use client"

import Link from "next/link"
import { ArrowRight, Code, Github, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { redirect } from 'next/navigation';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0A0A12] text-white">
      {/* Navbar */}
      <nav className="container mx-auto flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <Code className="h-8 w-8 text-[#A05CF5]" />
          <span className="text-xl font-bold">DevConnect</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" className="text-white hover:text-[#A05CF5]">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-[#A05CF5] text-white hover:bg-[#B16EFF]">Sign Up</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <motion.h1
          className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          WHERE CODERS <span className="text-[#A05CF5]">UNITE & THRIVE</span>
        </motion.h1>
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-xl text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join a community of passionate developers sharing code, projects, and ideas. Connect, collaborate, and grow
          together in a space designed for coders.
        </motion.p>
        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/signup">
            <Button className="w-full bg-[#A05CF5] px-8 py-6 text-lg hover:bg-[#B16EFF] sm:w-auto">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://discord.gg" target="_blank">
            <Button
              variant="outline"
              className="w-full border-[#A05CF5] px-8 py-6 text-lg text-white hover:bg-[#A05CF5]/10 sm:w-auto"
            >
              Join Discord
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="mb-16 text-center text-3xl font-bold">Why Developers Love Us</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <motion.div
            className="rounded-xl bg-[#12121D] p-6 transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#A05CF5]/20"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="mb-4 rounded-full bg-[#A05CF5]/20 p-3 w-fit">
              <Code className="h-8 w-8 text-[#A05CF5]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Share Code</h3>
            <p className="text-gray-400">
              Showcase your projects, get feedback, and collaborate with other developers on your code.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="rounded-xl bg-[#12121D] p-6 transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#A05CF5]/20"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <div className="mb-4 rounded-full bg-[#A05CF5]/20 p-3 w-fit">
              <Users className="h-8 w-8 text-[#A05CF5]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Engage with Developers</h3>
            <p className="text-gray-400">
              Connect with like-minded developers, follow industry experts, and grow your network.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="rounded-xl bg-[#12121D] p-6 transition-all hover:translate-y-[-5px] hover:shadow-lg hover:shadow-[#A05CF5]/20"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <div className="mb-4 rounded-full bg-[#A05CF5]/20 p-3 w-fit">
              <Github className="h-8 w-8 text-[#A05CF5]" />
            </div>
            <h3 className="mb-2 text-xl font-bold">Build Together</h3>
            <p className="text-gray-400">
              Find collaborators for your projects, contribute to open source, and build your portfolio.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-2xl bg-gradient-to-r from-[#12121D] to-[#1E1E30] p-12 text-center">
          <h2 className="mb-6 text-3xl font-bold">Ready to join the community?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-300">
            Start sharing your projects, connecting with other developers, and growing your skills today.
          </p>
          <Link href="/signup">
            <Button className="bg-[#A05CF5] px-8 py-6 text-lg hover:bg-[#B16EFF]">Create Your Account</Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-[#0A0A12] py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Code className="h-6 w-6 text-[#A05CF5]" />
              <span className="text-lg font-bold">DevConnect</span>
            </div>
            <div className="flex gap-8 text-gray-400">
              <Link href="#" className="hover:text-[#A05CF5]">
                About
              </Link>
              <Link href="#" className="hover:text-[#A05CF5]">
                Privacy
              </Link>
              <Link href="#" className="hover:text-[#A05CF5]">
                Terms
              </Link>
              <Link href="#" className="hover:text-[#A05CF5]">
                Contact
              </Link>
            </div>
            <div className="text-sm text-gray-500">© 2023 DevConnect. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

