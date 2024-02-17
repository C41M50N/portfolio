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
    <Carousel className="mx-auto max-w-56">
      <CarouselContent className="-ml-3">
        {image_srcs.map((image_src, idx) => (
          <CarouselItem key={idx} className="pl-3">
            <div className="border border-gray-500 rounded-xl p-2">
              <img src={`/src/${image_src}`} alt="..." />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
