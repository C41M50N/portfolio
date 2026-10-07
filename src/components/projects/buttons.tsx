import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GitHubSVG } from "@/components/svgs";
import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "@/lib/data";
import { IconMailFilled, IconMessageCircleFilled } from '@tabler/icons-react';
import { cn } from "@/lib/utils";

interface SocialButtonProps {
  className?: string;
}

interface SocialImageLinkProps extends SocialButtonProps {
  href: string;
  label: string;
  imageSrc: string;
  imageClassName?: string;
}

function SocialImageLink({ href, label, imageSrc, imageClassName, className }: SocialImageLinkProps) {
  return (
    <Button asChild variant="outline" size="icon" className={`${className || ""} p-[6px] border-none opacity-70 hover:opacity-90 transition-opacity`}>
      <a href={href} target="_blank" aria-label={`${label} (opens in new tab)`}>
        <img src={imageSrc} alt="" className={imageClassName} />
      </a>
    </Button>
  )
}

export function LinkedInButton({ className }: SocialButtonProps) {
  return <SocialImageLink href={LINKEDIN} label="LinkedIn profile" imageSrc="/social-logos/linkedin.svg" imageClassName="filter grayscale" className={className} />
}

export function GitHubButton({ className }: SocialButtonProps) {
  return <SocialImageLink href={GITHUB} label="GitHub profile" imageSrc="/social-logos/github.png" className={className} />
}

export function TwitterButton({ className }: SocialButtonProps) {
  return <SocialImageLink href={TWITTER} label="X (Twitter) profile" imageSrc="/social-logos/x.png" className={className} />
}

export function MailButton({ className }: SocialButtonProps) {
  return (
    <Button asChild variant="outline" size="icon" className={`${className || ""} p-0 border-none text-neutral-300 opacity-70 hover:opacity-85 transition-opacity`}>
      <a href={`mailto:${EMAIL}`} aria-label="Email Charles">
        <IconMailFilled size={28} />
      </a>
    </Button>
  )
}

interface AnimatedLinkButtonProps {
  label: string;
  href: string;
  underline?: boolean;
}

export function AnimatedLinkButton({ label, href, underline }: AnimatedLinkButtonProps) {
  return (
    <Button asChild variant="outline" className="group/test border-none bg-[#1C1C1C] group-hover/test:bg-[#222222] text-white/75 group-hover/test:text-white/90">
      <a href={href}>
        <span className={cn(underline && "group-hover/test:underline group-hover/test:underline-offset-1")}>{label}</span>
        <div className="mx-0.5" />
        <div className="group-hover/test:translate-x-1 duration-200 ease-in">
          <ArrowRight strokeWidth={1.0} size={24} />
        </div>
      </a>
    </Button>
  )
}

interface LiveProjectButtonProps {
  href: string;
  buttonClassName?: string;
}

export function LiveProjectButton({ href, buttonClassName = "" }: LiveProjectButtonProps) {
  return (
    <Button asChild variant="link" className={cn("px-3 py-0 h-8 bg-[#212121] hover:bg-[#292929] rounded-md border-[0.5px]", buttonClassName)}>
      <a href={href} target="_blank">
        <div className="w-3 h-3 bg-[#63b681] animate-pulse border-2 border-black rounded-full" />
        <span className="pl-2 tracking-wide">Live</span>
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    </Button>
  )
}

interface GitHubProjectButtonProps {
  href: string;
  buttonClassName?: string;
}

export function GitHubProjectButton({ href, buttonClassName = "" }: GitHubProjectButtonProps) {
  return (
    <Button asChild variant="link" className={cn("px-3 py-0 h-8 bg-[#212121] hover:bg-[#292929] rounded-md border-[0.5px]", buttonClassName)}>
      <a href={href} target="_blank">
        <GitHubSVG className="size-4" />
        <span className="pl-2 tracking-wide">GitHub</span>
        <span className="sr-only"> (opens in new tab)</span>
      </a>
    </Button>
  )
}

type ContactButtonProps = {
  label?: string;
};

export function ContactButton({ label }: ContactButtonProps) {
  return (
    <Button asChild className="h-12 px-8 text-base group relative overflow-hidden transition-all duration-300 transform hover:scale-[1.03] font-medium tracking-wide bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-600/50 hover:border-zinc-500/70 shadow-md hover:shadow-lg backdrop-blur-sm">
      <a href={`mailto:${EMAIL}`}>
        {/* Subtle shimmer effect - made more visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000 ease-out pointer-events-none z-10"></div>
      
        {/* Content container */}
        <div className="relative flex items-center gap-3 z-20">
          {/* Simple mail icon */}
          <IconMessageCircleFilled className="w-4 h-4 group-hover:scale-105 transition-transform duration-200" />
          
          <span className="font-medium">{label || "Contact Me"}</span>
          
          {/* Subtle arrow */}
          {/* <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" /> */}
        </div>
      </a>
    </Button>
  )
}
