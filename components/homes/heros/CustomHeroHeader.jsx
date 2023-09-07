"use client";
import Image from "next/image";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";

import React from "react";
import { featureTwo } from "../../../data/features";
import { slidesData } from "../../../data/hero";
import { useRouter } from "next/navigation";
import HeroFive from "./HeroFive";
import HeroTwo from "./HeroTwo";
const CustomHeroHeader=()=> {
  const router = useRouter();
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="">
      <div className="swiper-wrapper-two"  data-gap="30"
                data-slider-cols="xl-4 lg-3 md-2 sm-2"
                data-aos="fade-left"
                data-aos-offset="80"
              data-aos-duration={800}
        //    data-aos="fade-right"
            data-aos-delay="500">
        {showSlider && (
          <Swiper
            // {...setting}

            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".hero-slider-next",
              prevEl: ".hero-slider-prev",
            }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            spaceBetween={0}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 576px
              450: {
                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 1,
              },
              1200: {
                // when window width is >= 992px
                slidesPerView: 1,
              },
            }}
            speed={1200}
          >
            {slidesData.map((item, i) => (
              <SwiperSlide key={i}>
                
                <HeroFive data={item} />
                            {/* <HeroTwo/> */}
                
              </SwiperSlide>
              // 140,90
            ))}
          </Swiper>
        )}
      </div>



      <button className="swiper-prev hero-slider-prev button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-prev">
        <i className="icon icon-arrow-left text-24"></i>
      </button>

      <button className="swiper-next hero-slider-next button -white-20 text-white size-60 rounded-full d-flex justify-center items-center js-next">
        <i className="icon icon-arrow-right text-24"></i>
      </button>
    </section>
  );
}

export default CustomHeroHeader