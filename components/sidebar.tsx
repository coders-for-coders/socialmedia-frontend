import Link from "next/link"
import { Bell, Bookmark, Compass, Home, MessageSquare, Settings, User } from "lucide-react"
import { cn } from "@/lib/utils"

interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("flex flex-col p-4", className)}>
      <div className="space-y-2">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-[#A05CF5]/10 hover:text-white"
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link
          href="/explore"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-[#A05CF5]/10 hover:text-white"
        >
          <Compass className="h-5 w-5" />
          <span>Explore</span>
        </Link>
        <Link
          href="/notifications"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-[#A05CF5]/10 hover:text-white"
        >
          <Bell className="h-5 w-5" />
          <span>Notifications</span>
        </Link>
        <Link
          href="/messages"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-[#A05CF5]/10 hover:text-white"
        >
          <MessageSquare className="h-5 w-5" />
          <span>Messages</span>
        </Link>
        <Link
          href="/bookmarks"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-[#A05CF5]/10 hover:text-white"
        >
          <Bookmark className="h-5 w-5" />
          <span>Bookmarks</span>
        </Link>
        <Link
          href="/profile"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-[#A05CF5]/10 hover:text-white"
        >
          <User className="h-5 w-5" />
          <span>Profile</span>
        </Link>
      </div>

      <div className="mt-auto space-y-2">
        <Link
          href="/settings"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-200 transition-colors hover:bg-[#A05CF5]/10 hover:text-white"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  )
}

