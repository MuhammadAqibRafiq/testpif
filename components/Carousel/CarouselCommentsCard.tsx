import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface Comment {
  id: string
  author: string
  avatar?: string
  rating: number
  content: string
  date: string
}

interface CarouselCommentsCardProps {
  comment: Comment
}

export default function CarouselCommentsCard({ comment }: CarouselCommentsCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          <Avatar>
            <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
            <AvatarFallback>
              {comment.author
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold">{comment.author}</h4>
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < comment.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm text-muted-foreground">{comment.content}</p>
            <p className="text-xs text-muted-foreground">{comment.date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
