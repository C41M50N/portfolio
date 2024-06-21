import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { GitHubSVG } from "@/components/svgs";
import githubIMG from "@/assets/github-white.png"

interface LinkedInButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function LinkedInButton({ className }: LinkedInButtonProps) {
  return (
    <a href="https://www.linkedin.com/in/charles-buffington/" target="_blank">
      <Button variant="outline" size="icon" className={`${className || ""} p-[5px] opacity-70 hover:opacity-90 transition-opacity border-2`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg" />
      </Button>
    </a>
  )
}

interface GitHubButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function GitHubButton({ className }: GitHubButtonProps) {
  return (
    <a href="https://github.com/C41M50N" target="_blank">
      <Button variant="outline" size="icon" className={`${className || ""} p-[5px] opacity-70 hover:opacity-90 transition-opacity border-2`}>
        <img src={githubIMG.src} />
      </Button>
    </a>
  )
}

interface MailButtonProps {
  className?: React.HTMLAttributes<ButtonProps>["className"];
}

export function MailButton({ className }: MailButtonProps) {
  return (
    <a href="mailto:hello.cfsb@proton.me">
      <Button variant="outline" size="icon" className={`${className || ""} p-[5px] opacity-70 hover:opacity-90 transition-opacity border-2`}>
        <Mail strokeWidth={1.75} />
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
  size?: ButtonProps["size"];
}

export function LiveProjectButton({ href, size }: LiveProjectButtonProps) {
  return (
    <a href={href} target="_blank">
      <Button variant="outline" size={size || "sm"}>
        <div className="w-3 h-3 bg-[#63b681] animate-pulse border-2 border-black rounded-full" />
        <span className="pl-2 tracking-wide">Live</span>
      </Button>
    </a>
  )
}

interface GitHubProjectButtonProps {
  href: string;
  size?: ButtonProps["size"]
}

export function GitHubProjectButton({ href, size }: GitHubProjectButtonProps) {
  return (
    <a href={href} target="_blank">
      <Button variant="outline" size={size || "sm"}>
        <GitHubSVG className='w-5' />
        <span className="pl-2 tracking-wide">GitHub</span>
      </Button>
    </a>
  )
}
