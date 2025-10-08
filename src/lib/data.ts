
export const EMAIL = "hello.cfsb@proton.me";
export const LINKEDIN = "https://www.linkedin.com/in/charles-buffington/";
export const GITHUB = "https://github.com/C41M50N";
export const TWITTER = "https://x.com/C41M50N";

// --------------------------------------------------

export type TechData = {
  label: string;
  img: string;
}

export const TechCatalog: Record<string, TechData> = {
  "nextjs": {
    label: "Next.js",
    img: "nextjs.svg",
  },
  "golang": {
    label: "Golang",
    img: "golang.svg",
  },
  "fastapi": {
    label: "FastAPI",
    img: "fastapi.svg"
  },
  "docker": {
    label: "Docker",
    img: "docker.svg",
  },
  "nodejs": {
    label: "Node.js",
    img: "nodejs.svg",
  },
  "python": {
    label: "Python",
    img: "python.svg",
  },
  "react": {
    label: "React",
    img: "react.svg",
  },
  "redis": {
    label: "Redis",
    img: "redis.svg",
  },
  "postgres": {
    label: "PostgreSQL",
    img: "postgres.svg",
  },
  "tailwind": {
    label: "TailwindCSS",
    img: "tailwindcss.svg",
  },
  "typescript": {
    label: "TypeScript",
    img: "typescript.svg",
  },
  "aws": {
    label: "AWS",
    img: "aws.svg",
  },
  "trpc": {
    label: "tRPC",
    img: "trpc.svg",
  },
  "vercel": {
    label: "Vercel",
    img: "vercel.png"
  }
} as const;
