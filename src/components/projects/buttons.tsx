import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { GitHubSVG } from "@/components/svgs";
import { BLUESKY, EMAIL, GITHUB, LINKEDIN, TWITTER } from "@/lib/data";

interface LinkedInButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function LinkedInButton({ className }: LinkedInButtonProps) {
  return (
    <a href={LINKEDIN} target="_blank">
      <Button variant="outline" size="icon" className={`${className || ""} p-[5px] opacity-70 hover:opacity-90 transition-opacity border-2`}>
        <img src={"/social-logos/linkedin.svg"} className="filter grayscale" />
      </Button>
    </a>
  )
}

interface GitHubButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function GitHubButton({ className }: GitHubButtonProps) {
  return (
    <a href={GITHUB} target="_blank">
      <Button variant="outline" size="icon" className={`${className || ""} p-[5px] opacity-70 hover:opacity-90 transition-opacity border-2`}>
        <img src={"/social-logos/github.png"} />
      </Button>
    </a>
  )
}

interface MailButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function MailButton({ className }: MailButtonProps) {
  return (
    <a href={`mailto:${EMAIL}`}>
      <Button variant="outline" size="icon" className={`${className || ""} p-[5px] opacity-70 hover:opacity-90 transition-opacity border-2`}>
        <Mail strokeWidth={1.75} />
      </Button>
    </a>
  )
}

interface TwitterButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function TwitterButton({ className }: TwitterButtonProps) {
  return (
    <a href={TWITTER} target="_blank">
      <Button variant="outline" size="icon" className={`${className || ""} p-[5px] opacity-70 hover:opacity-90 transition-opacity border-2`}>
        <img src={"/social-logos/x.png"} />
      </Button>
    </a>
  )
}

interface BlueskyButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function BlueskyButton({ className }: BlueskyButtonProps) {
  return (
    <a href={BLUESKY} target="_blank">
      <Button variant="outline" size="icon" className={`${className || ""} p-[5px] opacity-70 hover:opacity-90 transition-opacity border-2`}>
        <img src={"/social-logos/bluesky.svg"} />
      </Button>
    </a>
  )
}

interface AnimatedLinkButtonProps {
  label: string;
  href: string;
  direction?: "fwd" | "bkwd";
}

export function AnimatedLinkButton(props: AnimatedLinkButtonProps) {
  if (props.direction === undefined || props.direction === "fwd") {
    return (
      <a href={props.href} className="group/test">
        <Button variant="outline" className="text-white/70 group-hover/test:text-white/95">
          <span className="group-hover/test:underline group-hover/test:underline-offset-1">{props.label}</span>
          <div className="mx-0.5" />
          <div className="group-hover/test:translate-x-1 duration-200 ease-in">
            <ArrowRight strokeWidth={1.0} size={24} />
          </div>
        </Button>
      </a>
    )
  } else {
    return (
      <a href={props.href} className="group/test">
        <Button variant="outline" className="text-white/70 group-hover/test:text-white/95">
          <div className="group-hover/test:-translate-x-1 duration-200 ease-in">
            <ArrowLeft strokeWidth={1.0} size={24} />
          </div>
          <div className="mx-0.5" />
          <span className="group-hover/test:underline group-hover/test:underline-offset-1">{props.label}</span>
        </Button>
      </a>
    )
  }
}

interface LiveProjectButtonProps {
  href: string;
}

export function LiveProjectButton({ href }: LiveProjectButtonProps) {
  return (
    <a href={href} target="_blank">
      <Button variant="link" className="px-3 py-0 h-8 rounded-md">
        <div className="w-3 h-3 bg-[#63b681] animate-pulse border-2 border-black rounded-full" />
        <span className="pl-2 tracking-wide">Live</span>
      </Button>
    </a>
  )
}

interface GitHubProjectButtonProps {
  href: string;
}

export function GitHubProjectButton({ href }: GitHubProjectButtonProps) {
  return (
    <a href={href} target="_blank">
      <Button variant="link" className="px-3 py-0 h-8 rounded-md">
        <GitHubSVG className='size-4' />
        <span className="pl-2 tracking-wide">GitHub</span>
      </Button>
    </a>
  )
}
