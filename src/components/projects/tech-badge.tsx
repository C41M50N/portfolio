import type { TechData } from "@/lib/data"

type Props = {
  data: TechData;
}

export function TechBadge({ data }: Props) {
  return (
    <div className="group bg-[#161616] py-1 px-1.5 flex flex-row gap-2 rounded-md border border-zinc-800">
      <img
        src={`/tech-logos/${data.img}`}
        className="size-4 transition-all duration-500 filter grayscale group-hover:filter-none"
      />
      <span className="font-medium text-xs text-zinc-100 cursor-default">
        {data.label}
      </span>
    </div>
  )
}
