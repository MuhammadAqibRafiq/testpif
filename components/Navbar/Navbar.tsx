"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Course Builder
        </Link>

        <div className="hidden md:flex items-center space-x-6">
          <Link href="#features" className="text-sm hover:text-primary">
            Features
          </Link>
          <Link href="#courses" className="text-sm hover:text-primary">
            Courses
          </Link>
          <Link href="#about" className="text-sm hover:text-primary">
            About
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </nav>
  )
}
