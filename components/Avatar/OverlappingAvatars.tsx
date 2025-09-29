import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface User {
  id: string
  name: string
  avatar?: string
}

interface OverlappingAvatarsProps {
  users: User[]
  max?: number
  size?: "sm" | "default" | "lg"
  className?: string
}

export function OverlappingAvatars({ users, max = 5, size = "default", className }: OverlappingAvatarsProps) {
  const displayUsers = users.slice(0, max)
  const remainingCount = users.length - max

  const sizeClasses = {
    sm: "h-8 w-8",
    default: "h-10 w-10",
    lg: "h-12 w-12",
  }

  return (
    <div className={cn("flex -space-x-2", className)}>
      {displayUsers.map((user, index) => (
        <Avatar
          key={user.id}
          className={cn(sizeClasses[size], "border-2 border-background")}
          style={{ zIndex: displayUsers.length - index }}
        >
          <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
          <AvatarFallback>
            {user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}

      {remainingCount > 0 && (
        <Avatar className={cn(sizeClasses[size], "border-2 border-background bg-muted")}>
          <AvatarFallback>+{remainingCount}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
