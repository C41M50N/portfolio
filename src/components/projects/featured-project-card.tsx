import type { CollectionEntry } from "astro:content"
import defaultThumbnailImg from "@/assets/default-thumbnail.jpg";
import { GitHubProjectButton, LiveProjectButton } from "./buttons";

type Props = {
  project: CollectionEntry<"projects">;
}

export default function FeaturedProjectCard({ project }: Props) {
  return (
    <div
      className="group relative bg-[#161616] hover:bg-[#1F1F1F] border border-zinc-900 hover:border-zinc-800 rounded-lg shadow-xl hover:cursor-pointer transition-colors duration-300"
    >
      <a href={`/project/${project.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">View project: {project.data.title}</span>
      </a>

      <div className="relative h-44 w-full rounded-t-lg overflow-hidden">
        <img src={project.data.thumbnailImage ?? defaultThumbnailImg.src} className="transition-all duration-300 filter grayscale group-hover:filter-none" />
      </div>

      <div className="pl-8 pr-12 pt-6 pb-4">
        <h2 className="mb-1 text-2xl text-white font-semibold">
          {project.data.title}
        </h2>

        <span className="text-white/50 pr-2">
          {project.data.description}
        </span>

        <div className="mt-4 flex flex-row items-center space-x-4 relative z-20">
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
