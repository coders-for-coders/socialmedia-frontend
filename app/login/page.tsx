"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Code, Github, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      window.location.href = "/dashboard"
    }, 1500)
  }

  return (
    <div className="flex min-h-screen bg-[#0A0A12] text-white">
      {/* Left side - Form */}
      <div className="flex w-full flex-col justify-center px-4 sm:px-6 lg:w-1/2 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-10">
            <Link href="/" className="flex items-center gap-2 text-[#A05CF5] hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Code className="h-8 w-8 text-[#A05CF5]" />
            <h1 className="text-2xl font-bold">DevConnect</h1>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            <h2 className="mt-8 text-3xl font-bold">Welcome back</h2>
            <p className="mt-2 text-gray-400">Log in to your account</p>

            <form onSubmit={handleLogin} className="mt-8 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  className="border-gray-700 bg-[#12121D] text-white focus:border-[#A05CF5]"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/forgot-password" className="text-sm text-[#A05CF5] hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="border-gray-700 bg-[#12121D] text-white focus:border-[#A05CF5]"
                />
              </div>

              <Button type="submit" className="w-full bg-[#A05CF5] hover:bg-[#B16EFF]" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
                  </>
                ) : (
                  "Log In"
                )}
              </Button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="mx-4 flex-shrink text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>

              <Button variant="outline" className="w-full border-gray-700 hover:bg-[#12121D]">
                <Github className="mr-2 h-5 w-5" /> Continue with GitHub
              </Button>

              <p className="text-center text-sm text-gray-400">
                Don't have an account?{" "}
                <Link href="/signup" className="text-[#A05CF5] hover:underline">
                  Sign up
                </Link>
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Right side - Image/Branding */}
      <div className="hidden bg-[#12121D] lg:block lg:w-1/2">
        <div className="flex h-full flex-col items-center justify-center p-12">
          <div className="mb-8 text-center">
            <h2 className="mb-4 text-4xl font-bold">Welcome back, developer</h2>
            <p className="text-xl text-gray-400">Continue your journey with the community</p>
          </div>
          <div className="relative h-64 w-full max-w-md">
            <div className="absolute left-0 top-0 h-40 w-40 rounded-lg bg-[#A05CF5]/20 p-4">
              <div className="h-full w-full rounded-md bg-[#12121D] p-4">
                <Code className="h-8 w-8 text-[#A05CF5]" />
                <div className="mt-2 h-2 w-16 rounded-full bg-gray-700"></div>
                <div className="mt-2 h-2 w-24 rounded-full bg-gray-700"></div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-lg bg-[#A05CF5]/20 p-4">
              <div className="h-full w-full rounded-md bg-[#12121D] p-4">
                <Github className="h-8 w-8 text-[#A05CF5]" />
                <div className="mt-2 h-2 w-16 rounded-full bg-gray-700"></div>
                <div className="mt-2 h-2 w-24 rounded-full bg-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

