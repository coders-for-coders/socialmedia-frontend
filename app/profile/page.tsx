"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Calendar, Github, Globe, MapPin, MessageSquare, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PostCard } from "@/components/post-card"
import { Sidebar } from "@/components/sidebar"

// Sample data
const user = {
  name: "John Doe",
  username: "johndoe",
  avatar: "/placeholder.svg?height=100&width=100",
  bio: "Full-stack developer passionate about React, Next.js, and TypeScript. Building tools that make developers' lives easier.",
  location: "San Francisco, CA",
  website: "https://johndoe.dev",
  joinedDate: "Joined March 2020",
  following: 245,
  followers: 1024,
  github: "johndoe",
  twitter: "johndoe",
}

const posts = [
  {
    id: 1,
    user: {
      name: user.name,
      username: user.username,
      avatar: user.avatar,
    },
    content:
      "Just launched my new portfolio website built with Next.js and Tailwind CSS! Check it out and let me know what you think. #webdev #nextjs #portfolio",
    image: "/placeholder.svg?height=400&width=600",
    likes: 42,
    comments: 12,
    timeAgo: "2h",
  },
  {
    id: 2,
    user: {
      name: user.name,
      username: user.username,
      avatar: user.avatar,
    },
    content:
      "I've been working on a new open-source library for React animations. It's still in beta, but I'd love some early feedback from the community! GitHub link in comments. #react #opensource #animation",
    image: "/placeholder.svg?height=400&width=600",
    likes: 89,
    comments: 24,
    timeAgo: "5h",
  },
]

const projects = [
  {
    id: 1,
    name: "react-motion-library",
    description: "A lightweight animation library for React components with a simple API",
    language: "TypeScript",
    stars: 342,
    forks: 45,
  },
  {
    id: 2,
    name: "next-auth-starter",
    description: "A starter template for Next.js with authentication pre-configured",
    language: "JavaScript",
    stars: 128,
    forks: 23,
  },
  {
    id: 3,
    name: "tailwind-components",
    description: "A collection of reusable Tailwind CSS components",
    language: "CSS",
    stars: 89,
    forks: 12,
  },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("posts")

  return (
    <div className="min-h-screen bg-[#0A0A12] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-10 border-b border-gray-800 bg-[#0A0A12]/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center px-4">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#A05CF5]">
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Feed</span>
          </Link>
          <h1 className="ml-4 text-xl font-bold">{user.name}</h1>
        </div>
      </header>

      <div className="container mx-auto flex">
        {/* Sidebar */}
        <Sidebar className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 flex-shrink-0 border-r border-gray-800 md:block" />

        {/* Main Content */}
        <main className="flex-1">
          {/* Profile Header */}
          <div className="relative">
            <div className="h-48 w-full bg-gradient-to-r from-[#12121D] to-[#1E1E30]"></div>
            <div className="container mx-auto px-4">
              <div className="relative -mt-16 flex flex-col items-start gap-4 sm:flex-row sm:items-end">
                <Avatar className="h-32 w-32 border-4 border-[#0A0A12]">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="mt-4 flex-1 sm:mt-0">
                  <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                    <div>
                      <h1 className="text-2xl font-bold">{user.name}</h1>
                      <p className="text-gray-400">@{user.username}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" className="border-gray-700 hover:bg-[#A05CF5]/10 hover:text-white">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Message
                      </Button>
                      <Button className="bg-[#A05CF5] hover:bg-[#B16EFF]">Follow</Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="mb-4">{user.bio}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 text-gray-400">
                  {user.location && (
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{user.location}</span>
                    </div>
                  )}
                  {user.website && (
                    <div className="flex items-center gap-1">
                      <Globe className="h-4 w-4" />
                      <a
                        href={user.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A05CF5] hover:underline"
                      >
                        {user.website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{user.joinedDate}</span>
                  </div>
                </div>

                <div className="mt-4 flex gap-6">
                  <Link href="#" className="hover:text-[#A05CF5]">
                    <span className="font-bold">{user.following}</span> <span className="text-gray-400">Following</span>
                  </Link>
                  <Link href="#" className="hover:text-[#A05CF5]">
                    <span className="font-bold">{user.followers}</span> <span className="text-gray-400">Followers</span>
                  </Link>
                </div>

                <div className="mt-4 flex gap-4">
                  {user.github && (
                    <a
                      href={`https://github.com/${user.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {user.twitter && (
                    <a
                      href={`https://twitter.com/${user.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>

              <Tabs value={activeTab} onValueChange={setActiveTab} className="mt-8">
                <TabsList className="bg-[#12121D]">
                  <TabsTrigger value="posts" className="data-[state=active]:bg-[#A05CF5]">
                    Posts
                  </TabsTrigger>
                  <TabsTrigger value="projects" className="data-[state=active]:bg-[#A05CF5]">
                    Projects
                  </TabsTrigger>
                  <TabsTrigger value="about" className="data-[state=active]:bg-[#A05CF5]">
                    About
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="posts" className="mt-6 space-y-6">
                  {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </TabsContent>
                <TabsContent value="projects" className="mt-6 space-y-4">
                  {projects.map((project) => (
                    <div key={project.id} className="rounded-xl bg-[#12121D] p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-[#A05CF5]">{project.name}</h3>
                          <p className="mt-1 text-gray-400">{project.description}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <Github className="h-5 w-5" />
                        </Button>
                      </div>
                      <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                          <span>{project.language}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>⭐</span>
                          <span>{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>🍴</span>
                          <span>{project.forks}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="about" className="mt-6">
                  <div className="rounded-xl bg-[#12121D] p-6">
                    <h3 className="mb-4 text-xl font-bold">About {user.name}</h3>
                    <p className="mb-6 text-gray-300">
                      Full-stack developer with 5+ years of experience specializing in React, Next.js, and TypeScript.
                      Currently working on open-source projects and building tools that make developers' lives easier.
                      Previously worked at Tech Company Inc. as a Senior Frontend Developer.
                    </p>
                    <h4 className="mb-2 text-lg font-bold">Skills</h4>
                    <div className="mb-6 flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Node.js", "GraphQL", "Tailwind CSS", "AWS"].map((skill) => (
                        <span key={skill} className="rounded-full bg-[#A05CF5]/20 px-3 py-1 text-sm text-[#A05CF5]">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <h4 className="mb-2 text-lg font-bold">Experience</h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold">Senior Frontend Developer</h5>
                          <span className="text-sm text-gray-400">2020 - Present</span>
                        </div>
                        <p className="text-gray-400">Tech Company Inc.</p>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <h5 className="font-bold">Frontend Developer</h5>
                          <span className="text-sm text-gray-400">2018 - 2020</span>
                        </div>
                        <p className="text-gray-400">Startup XYZ</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

