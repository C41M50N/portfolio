
import headshotImg from "@/assets/headshot.jpg";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CVAvatarProps {
  name: string;
  initials: string;
}

export default function CVAvatar(props: CVAvatarProps) {
  return (
    <Avatar className="size-28">
      <AvatarImage alt={props.name} src={headshotImg.src} />
      <AvatarFallback>{props.initials}</AvatarFallback>
    </Avatar>
  )
}
