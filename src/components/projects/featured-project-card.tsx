import type { CollectionEntry } from "astro:content"
import { GitHubProjectButton, LiveProjectButton } from "./buttons";
import { TechBadge } from "./tech-badge";
import { TechCatalog } from "@/lib/data";
import { DEFAULT_PROJECT_THUMBNAIL } from "@/image-urls";

type Props = {
  project: CollectionEntry<"projects">;
}

export default function FeaturedProjectCard({ project }: Props) {
  return (
    <div
      className="group relative bg-[#161616] hover:bg-[#1F1F1F] border border-zinc-900 hover:border-zinc-800 rounded-lg shadow-xl hover:cursor-pointer transition-colors duration-300"
    >
      <a href={`/project/${project.id}`} className="absolute inset-0 z-10">
        <span className="sr-only">View project: {project.data.title}</span>
      </a>

      <div className="relative h-40 sm:h-56 w-full rounded-t-lg overflow-hidden">
        <img src={project.data.thumbnailImage ?? DEFAULT_PROJECT_THUMBNAIL} className="transition-all duration-300 filter grayscale group-hover:filter-none" />
      </div>

      <div className="pl-8 pr-12 pt-4 sm:pt-6 pb-4">
        <h2 className="sm:mb-1 text-2xl text-white font-semibold">
          {project.data.title}
        </h2>

        <span className="mb-1 sm:mb-0 text-white/50 text-[16px] sm:text-base pr-2">
          {project.data.description}
        </span>

        <div className="hidden sm:flex pt-2 flex-row gap-x-2">
          {project.data.techstack.slice(0,4).map((tech) => (
            <TechBadge key={tech} data={TechCatalog[tech]} />
          ))}
        </div>

        <div className="flex sm:hidden pt-2 flex-row gap-x-3">
          {project.data.techstack.slice(0,3).map((tech) => (
            <TechBadge key={tech} data={TechCatalog[tech]} />
          ))}
        </div>

        <div className="hidden mt-4 sm:flex flex-row items-center space-x-3 relative z-20">
          {project.data.live && (
            <LiveProjectButton href={project.data.live} />
          )}
          {project.data.github && (
            <GitHubProjectButton href={project.data.github} />
          )}
        </div>
      </div>

      <style>{`
        .group::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: 15;
          cursor: pointer;
          pointer-events: auto;
        }
        .group:hover::before {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .group > *:not(a) {
          position: relative;
          z-index: 20;
          pointer-events: none;
        }
        .group button {
          pointer-events: auto;
        }
      `}</style>
    </div>
  )
}

/*
 * --- Notes ---
 *
*/
