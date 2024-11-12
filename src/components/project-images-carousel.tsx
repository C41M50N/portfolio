import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectImagesCarouselProps {
  image_srcs: string[]
}

export function ProjectImagesCarousel({ image_srcs }: ProjectImagesCarouselProps) {
  return (
    <Carousel className="mx-auto w-full px-2">
      <CarouselContent className="-ml-3">
        {image_srcs.map((image_src, idx) => (
          <CarouselItem key={idx} className="pl-3">
            <div className="border border-zinc-700 rounded-sm p-1.5">
              <img src={`/src/${image_src}`} alt={`project image ${idx+1}`} className="rounded-sm" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
