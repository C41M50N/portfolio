import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CVAvatarProps {
  name: string;
  initials: string;
}

export default function CVAvatar(props: CVAvatarProps) {
  return (
    <Avatar className="size-28">
      <AvatarImage alt={props.name} src={"/assets/headshot.jpg"} />
      <AvatarFallback>{props.initials}</AvatarFallback>
    </Avatar>
  )
}
