import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import hero5 from "@/public/images/hero5.jpg";
import hero6 from "@/public/images/hero6.jpg";
import hero7 from "@/public/images/hero7.jpg";
import hero8 from "@/public/images/hero8.jpg";
import hero9 from "@/public/images/hero9.jpg";
import hero10 from "@/public/images/hero10.jpg";
import hero11 from "@/public/images/hero11.jpg";
import hero12 from "@/public/images/hero12.jpg";
import hero13 from "@/public/images/hero13.jpg";
import hero14 from "@/public/images/hero14.jpg";
import hero15 from "@/public/images/hero15.jpg";
import hero16 from "@/public/images/hero16.jpg";

const carouselImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
  hero6,
  hero7,
  hero8,
  hero9,
  hero10,
  hero11,
  hero12,
  hero13,
  hero14,
  hero15,
  hero16,
];

function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <Carousel>
        <CarouselContent>
          {carouselImages.map((image, index) => {
            return (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className='p-2'>
                    <Image
                      src={image}
                      alt='hero'
                      className='w-full h-[24rem] rounded-md object-cover'
                      priority
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
