import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const wordpressUrls = require("./wordpress-urls");

// Get blog domain from environment variable, default to blog.com
const BLOG_DOMAIN = process.env.NEXT_PUBLIC_BLOG_DOMAIN || "https://blog.com";

const nextConfig: NextConfig = {
  async redirects() {
    console.log(`Setting up ${wordpressUrls.length} redirects to ${BLOG_DOMAIN}...`);
    
    return wordpressUrls.map((url: string) => ({
      source: url,
      destination: `${BLOG_DOMAIN}${url}`,
      permanent: true, // 301 redirect for SEO
    }));
  },
};

export default withPayload(nextConfig);
