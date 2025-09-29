export const constants = {
  APP_NAME: "Course Page Builder",
  API_BASE_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  ITEMS_PER_PAGE: 10,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
  SUPPORTED_IMAGE_TYPES: ["image/jpeg", "image/png", "image/webp"],
  SOCIAL_LINKS: {
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
  THEME_COLORS: {
    primary: "#3b82f6",
    secondary: "#64748b",
    success: "#10b981",
    warning: "#f59e0b",
    error: "#ef4444",
  },
}
