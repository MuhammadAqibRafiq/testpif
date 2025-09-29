"use client"

import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface ChipProps {
  label: string
  variant?: "default" | "secondary" | "destructive" | "outline"
  size?: "sm" | "default" | "lg"
  removable?: boolean
  onRemove?: () => void
  className?: string
}

export default function Chip({
  label,
  variant = "default",
  size = "default",
  removable = false,
  onRemove,
  className,
}: ChipProps) {
  return (
    <Badge
      variant={variant}
      className={cn(
        "inline-flex items-center gap-1",
        size === "sm" && "text-xs px-2 py-0.5",
        size === "lg" && "text-sm px-3 py-1",
        className,
      )}
    >
      {label}
      {removable && onRemove && (
        <button onClick={onRemove} className="ml-1 hover:bg-black/10 rounded-full p-0.5">
          <X className="h-3 w-3" />
        </button>
      )}
    </Badge>
  )
}
