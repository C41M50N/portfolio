import { type CollectionEntry } from "astro:content";
import defaultThumbnailImg from "@/assets/default-thumbnail.jpg";
import { TechBadge } from "./tech-badge";
import { TechCatalog } from "@/lib/data";

type Props = {
  project: CollectionEntry<"projects">;
}

export function ProjectCard({ project }: Props) {
  return (
    <div className="group relative w-full flex flex-row items-stretch gap-6 bg-[#161616] hover:bg-[#1F1F1F] border border-zinc-900 hover:border-zinc-800 rounded-lg shadow-xl hover:cursor-pointer transition-colors duration-300">
      <a href={`/project/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View project: {project.data.title}</span>
      </a>

      <div className="relative w-52 rounded-l-lg overflow-hidden">
        <object data={project.data.thumbnailImage} type="image/jpg" className="w-52 object-cover h-full transition-all duration-300 filter grayscale group-hover:filter-none">
          <img
            alt={`project "${project.data.title}" thumbnail`}
            src={defaultThumbnailImg.src}
            className="h-full transition-all duration-300 filter grayscale group-hover:filter-none"
          />
        </object>
      </div>

      <div className="pl-1 pt-5 pb-3 flex flex-col gap-0">
        <h3 className="text-xl font-semibold">
          {project.data.title}
        </h3>
        <span className="text-sm text-muted-foreground">
          {project.data.description}
        </span>
        <div className="pt-2 flex flex-row flex-wrap gap-x-2 gap-y-1">
          {project.data.techstack.slice(0,4).map((tech) => (
            <TechBadge data={TechCatalog[tech]} />
          ))}
        </div>
      </div>
    </div>
  )
}