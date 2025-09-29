import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SocialIconProps {
  platform: "facebook" | "twitter" | "instagram" | "linkedin" | "youtube" | "discord" | "x"
  href: string
  size?: "sm" | "default" | "lg"
  variant?: "default" | "outline" | "ghost"
  className?: string
}

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
  discord: () => <div className="h-4 w-4">D</div>, // Placeholder for Discord
  x: Twitter, // Using Twitter icon for X
}

export default function SocialIcon({
  platform,
  href,
  size = "default",
  variant = "outline",
  className,
}: SocialIconProps) {
  const Icon = iconMap[platform]

  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <Button variant={variant} size="icon" className={cn(sizeClasses[size], className)} asChild>
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon className="h-4 w-4" />
        <span className="sr-only">{platform}</span>
      </a>
    </Button>
  )
}
