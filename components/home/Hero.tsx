import React from "react";
import HeroCarousel from "./HeroCarousel";
import { Button } from "../ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl'>
          Lorem ipsum dolor sit amet.
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
          consequatur facere, doloremque ipsa, ipsam dolor dicta ut enim iure
          molestiae doloribus deleniti error quidem esse fugiat, aperiam
          repellendus nihil! Eligendi, nisi. Inventore, minima? Debitis labore
          consectetur voluptatem, voluptas id laboriosam.
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};

export default Hero;
