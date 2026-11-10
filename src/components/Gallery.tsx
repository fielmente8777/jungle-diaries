"use client";

import React, { useState } from "react";
import Image from "next/image";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Section } from "./sectionComponants";
import { BtnNextIcon, BtnPrevIcon } from "@/utils/icons";
import { GalleryProps } from "@/app/amaltas-villa/pagedata";

interface Props {
  data: GalleryProps;
}

export const Gallery: React.FC<Props> = ({ data }) => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const images = data?.images || [];

  // Ensure enough slides for a seamless infinite loop across 4+ columns
  const displayImages =
    images.length > 0 && images.length < 8 ? [...images, ...images] : images;

  return (
    <Section sectionClassName="overflow-hidden" defaultPadding={false}>
      <div className="relative w-full h-[280px] min-[400px]:h-[320px] sm:h-[350px] lg:h-[400px] xl:h-[420px] overflow-hidden group">
        <Swiper
          modules={[Navigation, Autoplay, Keyboard]}
          loop={displayImages.length > 1}
          speed={800}
          grabCursor={true}
          keyboard={{ enabled: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
          }}
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          className="w-full h-full select-none"
        >
          {displayImages.map((src, index) => (
            <SwiperSlide key={`${src}-${index}`} className="relative w-full h-full">
              <div className="relative w-full h-full overflow-hidden group/slide">
                <Image
                  src={src}
                  alt={`Destinn Dhela Gallery Showcase ${(index % images.length) + 1}`}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover/slide:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  priority={index < 4}
                />
                <div className="absolute inset-0 bg-black/10 group-hover/slide:bg-black/0 transition-colors pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Manual Navigation Controls (Previous & Next Buttons) */}
        {displayImages.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => swiperInstance?.slidePrev()}
              aria-label="Previous gallery photo"
              className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center drop-shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100 hover:brightness-110"
            >
              <BtnPrevIcon />
            </button>
            <button
              type="button"
              onClick={() => swiperInstance?.slideNext()}
              aria-label="Next gallery photo"
              className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center drop-shadow-xl opacity-90 sm:opacity-0 group-hover:opacity-100 hover:brightness-110"
            >
              <BtnNextIcon />
            </button>
          </>
        )}
      </div>
    </Section>
  );
};

export default Gallery;
