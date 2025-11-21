import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col sm:max-w-lg h-full bg-[#161616] hover:bg-[#242424] border border-zinc-900 hover:border-zinc-800 rounded-sm shadow-xl hover:cursor-pointer transition-colors duration-300">
      <a href={service.calLink} target="_blank" className="absolute inset-0 z-20">
        <span className="sr-only">Book a call: {service.title}</span>
      </a>

      <div className="relative aspect-video w-full rounded-t-sm overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full transition-all duration-300 filter grayscale group-hover:filter-none"
        />
      </div>

      <div className="flex flex-col flex-grow pl-6 sm:pl-8 pr-8 sm:pr-8 pt-6 pb-4">
        <div className="flex-grow">
          <h3 className="mb-1 text-2xl text-white font-semibold">
            {service.title}
          </h3>

          <p className="text-sm text-white/50 pr-2">
            {service.description}
          </p>

          <ul className="mt-5 space-y-2 text-white/70 text-sm sm:text-base">
            {service.details.map((detail, index) => (
              <li key={index} className="flex items-start">
                <ArrowRight className="size-3 mr-2 mt-[5px] flex-shrink-0" />
                <span className="text-base leading-snug">
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pl-8 pr-7 py-4 flex items-center justify-end text-white text-[16px] sm:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="px-0.5 pb-1 flex flex-row items-center border-b border-zinc-500">
          <span className="mr-1 text-white/90">Book a call</span>
          <ArrowRight strokeWidth={1.0} size={20} className="group-hover:translate-x-1 duration-300 ease-in" />
        </div>
      </div>
    </div>
  )
}