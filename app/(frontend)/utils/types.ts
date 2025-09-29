export interface VideoItem {
  id: string
  title: string
  description: string
  thumbnail: string
  duration: number
  url: string
  category: string
  tags: string[]
  createdAt: Date
  updatedAt: Date
}

export interface MediaDocument {
  id: string
  filename: string
  mimeType: string
  filesize: number
  width?: number
  height?: number
  url: string
  alt?: string
  createdAt: Date
  updatedAt: Date
}

export interface PayloadResponse<T = any> {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page: number
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage?: number
  nextPage?: number
}
