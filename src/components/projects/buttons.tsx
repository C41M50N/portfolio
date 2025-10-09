import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { GitHubSVG } from "@/components/svgs";
import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "@/lib/data";
import { IconMailFilled } from '@tabler/icons-react';
import { cn } from "@/lib/utils";

interface LinkedInButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function LinkedInButton({ className }: LinkedInButtonProps) {
  return (
    <a href={LINKEDIN} target="_blank">
      <Button variant="outline" size="icon" className={`${className || ""} p-[6px] border-none opacity-70 hover:opacity-90 transition-opacity`}>
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
      <Button variant="outline" size="icon" className={`${className || ""} p-[6px] border-none opacity-70 hover:opacity-90 transition-opacity`}>
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
      <Button variant="outline" size="icon" className={`${className || ""} p-0 border-none opacity-70 hover:opacity-90 transition-opacity`}>
        <IconMailFilled size={28} />
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
      <Button variant="outline" size="icon" className={`${className || ""} p-[6px] border-none opacity-70 hover:opacity-90 transition-opacity`}>
        <img src={"/social-logos/x.png"} />
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
        <Button variant="outline" className="border-none bg-[#1C1C1C] group-hover/test:bg-[#222222] text-white/75 group-hover/test:text-white">
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
        <Button variant="outline" className="border-none bg-[#1C1C1C] group-hover/test:bg-[#222222] text-white/75 group-hover/test:text-white">
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
  border?: boolean;
}

export function LiveProjectButton({ href, border }: LiveProjectButtonProps) {
  return (
    <a href={href} target="_blank">
      <Button variant="link" className={cn("px-3 py-0 h-8 bg-[#212121] hover:bg-[#292929] rounded-md", border ? 'border-[0.5px]' : 'border-none')}>
        <div className="w-3 h-3 bg-[#63b681] animate-pulse border-2 border-black rounded-full" />
        <span className="pl-2 tracking-wide">Live</span>
      </Button>
    </a>
  )
}

interface GitHubProjectButtonProps {
  href: string;
  border?: boolean;
}

export function GitHubProjectButton({ href, border }: GitHubProjectButtonProps) {
  return (
    <a href={href} target="_blank">
      <Button variant="link" className={cn("px-3 py-0 h-8 bg-[#212121] hover:bg-[#292929] rounded-md", border ? 'border-[0.5px]' : 'border-none')}>
        <GitHubSVG className='size-4' />
        <span className="pl-2 tracking-wide">GitHub</span>
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
