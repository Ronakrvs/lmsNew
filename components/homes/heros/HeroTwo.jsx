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
import Link from "next/link";
export default function HeroTwo() {
  const router = useRouter();
  const [showSlider, setShowSlider] = useState(false);

  useEffect(() => {
    setShowSlider(true);
  }, []);
  return (
    <section className="mainSlider -type-1 js-mainSlider customizedHeroBackground"   style={{ backgroundImage: `url('/assets/img/newui/background.png')`,backgroundColor:"#0D1736",height:"auto",minHeight:"95vh" }}>
      <div className="swiper-wrapper-two" style={{top:50}}>
        {showSlider && (
          <Swiper
            // {...setting}

            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".hero-slider-next",
              prevEl: ".hero-slider-prev",
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
            {slidesData.map((data, i) => (
              <SwiperSlide key={i}>
                <div className="swiper-slide " >
                  <div className="">
                    <div
                      className="bg-image js-lazy customedBg"
                      // style={{ backgroundImage: `url(${item.bgImage})` }}
                    >
                       {/* <div
            className="col-xl-10 col-lg-10"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="masthead__image" style={{backgroundImage:`url(${item?.bgbackimage})`,backgroundPosition: "right",
    width: "auto",
    height: "auto",
    backgroundRepeat: "no-repeat",textAlign:"right"}} data-aos="fade-left"
    data-aos-delay="750">
              <img
                // width={700}
                // height={210}
                src={item?.bgimage}
                alt="image"
              />
            </div>
          </div> */}
                      
                        <div className="container">
        <div className="row y-gap-50 justify-center items-center">
          <div
            className="col-xl-5 col-lg-6"
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="masthead__content">
              <h1 className="masthead__title text-white">
                <div>{data?.herotitle} </div>
               {data?.title}
                {/* <span className="text-purple-1 underline">Career</span> */}
              </h1>
              <p className="masthead__text pt-15 text-white" >
               {data?.description}
              </p>
              <div className="masthead__button row x-gap-20 y-gap-20 pt-30">
                <div className="col-auto"  data-aos="fade-down"
            data-aos-delay="500">
                  <Link
                    href="/signup"
                    className="button -md -purple-1 -rounded text-white"
                  >
                    Join For Free
                  </Link>
                </div>
                <div className="col-auto"  data-aos="fade-up"
            data-aos-delay="500">
                  <Link
                    href="/courses-list-1"
                    className="button -md -outline-dark-1 -rounded text-dark-1"
                  >
                    Find Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
          <div
            className="col-xl-6 col-lg-6"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <div className="masthead__image" style={{backgroundImage:`url(${data?.bgbackimage})`,backgroundPosition: "center",
    width: "auto",
    height: "auto",
    backgroundRepeat: "no-repeat",textAlign:"center"}} data-aos="fade-left"
    data-aos-delay="750">
              <img
                // width={700}
                // height={210}
                src={data?.bgimage}
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
                    </div>
                  </div>
                </div>
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
