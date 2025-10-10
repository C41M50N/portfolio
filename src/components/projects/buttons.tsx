import { Button, type ButtonProps } from "@/components/ui/button";
import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "@/lib/data";
import { IconMailFilled } from '@tabler/icons-react';

interface LinkedInButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function LinkedInButton({ className = "" }: LinkedInButtonProps) {
  return (
    <a href={LINKEDIN} target="_blank">
      <Button variant="outline" size="icon" className={`${className} p-[6px] border-none opacity-70 hover:opacity-90 transition-opacity`}>
        <img src={"/social-logos/linkedin.svg"} className="filter grayscale" />
      </Button>
    </a>
  )
}

interface GitHubButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function GitHubButton({ className = "" }: GitHubButtonProps) {
  return (
    <a href={GITHUB} target="_blank">
      <Button variant="outline" size="icon" className={`${className} p-[6px] border-none opacity-70 hover:opacity-90 transition-opacity`}>
        <img src={"/social-logos/github.png"} />
      </Button>
    </a>
  )
}

interface MailButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function MailButton({ className = "" }: MailButtonProps) {
  return (
    <a href={`mailto:${EMAIL}`}>
      <Button variant="outline" size="icon" className={`${className} p-0 border-none opacity-70 hover:opacity-90 transition-opacity`}>
        <IconMailFilled size={28} />
      </Button>
    </a>
  )
}

interface TwitterButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function TwitterButton({ className = "" }: TwitterButtonProps) {
  return (
    <a href={TWITTER} target="_blank">
      <Button variant="outline" size="icon" className={`${className} p-[6px] border-none opacity-70 hover:opacity-90 transition-opacity`}>
        <img src={"/social-logos/x.png"} />
      </Button>
    </a>
  )
}

export function ContactButton() {
  return (
    <a href={`mailto:${EMAIL}`}>
      <Button className="h-12 px-8 text-base group relative overflow-hidden transition-all duration-300 transform hover:scale-[1.03] font-medium tracking-wide bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600/50 hover:border-zinc-500/70 shadow-md hover:shadow-lg backdrop-blur-sm">
        {/* Subtle shimmer effect - made more visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
      
        {/* Content container */}
        <div className="relative flex items-center gap-2.5 z-20">
          {/* Simple mail icon */}
          <IconMailFilled className="w-4 h-4 group-hover:scale-105 transition-transform duration-200" />
          
          <span className="font-medium">Contact Me</span>
          
          {/* Subtle arrow */}
          {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" /> */}
        </div>
      </Button>
    </a>
  )
}
