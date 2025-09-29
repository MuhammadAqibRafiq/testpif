"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ThumbnailCardProps {
  title: string
  description: string
  thumbnail: string
  category?: string
  tags?: string[]
  onClick?: () => void
}

export default function ThumbnailCard({
  title,
  description,
  thumbnail,
  category,
  tags = [],
  onClick,
}: ThumbnailCardProps) {
  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={onClick}>
      <div className="relative aspect-video overflow-hidden rounded-t-lg">
        <Image src={thumbnail || "/placeholder.svg"} alt={title} fill className="object-cover" />
        {category && (
          <Badge className="absolute top-2 left-2" variant="secondary">
            {category}
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      {tags.length > 0 && (
        <CardContent>
          <div className="flex flex-wrap gap-1">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{tags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
      )}
    </Card>
  )
}
