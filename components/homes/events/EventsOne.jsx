"use client";

import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { events } from "../../../data/events";
import moment from 'moment'
import {getAllSubjectList} from '../../../service/subject'
import Link from "next/link";
export default function EventsOne() {
  const [showSlider, setShowSlider] = useState(false);
  const [subjectList,setSubjectList] = useState([]);
  useEffect(() => {
    setShowSlider(true);
  }, []);

  useEffect(() => {
    getSubjectList()
  
   
  }, [])
  const getSubjectList = async () => {
    console.log("Loading")
    await getAllSubjectList().then(({data}) => {
      console.log("Loading", data)
      let courses = data?.data ? data.data  :data?.courses
      setSubjectList(courses)
    })
  }
  return (
    <section className="layout-pt-lg layout-pb-lg bg-white">
      <div className="container">
        <div className="row y-gap-15 justify-center items-end">
          <div className="col-lg-6">
          <div className="sectionTitle ">
              <h2 className="" style={{fontSize:"50px", color:"#0D1736"}}>
                   <b style={{color:"#0AA0DF"}}>Subjects</b>  We Provide
                </h2>              
            </div>
          </div>

          {/* <div className="col-auto">
            <div className="d-flex justify-center x-gap-15 items-center">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-events-slider-prev event-slide-prev">
                  <i className="icon  icon-arrow-left"></i>
                </button>
              </div>
              <div className="col-auto">
                <div className="pagination event-pagination -arrows js-events-slider-pagination"></div>
              </div>
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-events-slider-next event-slide-next">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>
          </div> */}
        </div>

        <div className="pt-60 lg:pt-40 js-section-slider">
          {showSlider && (
            <Swiper
              className="overflow-visible"
              // {...setting}
              modules={[Navigation, Pagination]}
              pagination={{
                el: ".event-pagination",
                clickable: true,
              }}
              navigation={{
                nextEl: ".event-slide-next",
                prevEl: ".event-slide-prev",
              }}
              // loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                // when window width is >= 576px
                450: {
                  slidesPerView: 1,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                },
                1200: {
                  // when window width is >= 992px
                  slidesPerView: 3,
                },
              }}
            >
              {subjectList.slice(0, 6).map((elm, i) => (
                <SwiperSlide key={i}>
                  <div className="swiper-slide">
                    <div
                      className="eventCard -type-1"
                      data-aos="fade-left"
                      data-aos-duration={(i + 1) * 500}
                    >
                      <div className="eventCard__img">
                        <img
                          width={730}
                          height={530}
                          style={{ height: "100%", width: "100%",minHeight:"220px",maxHeight:"220px" }}
                          src={elm.image[0]?.fileUrl}
                          alt="image"
                        />
                      </div>

                      <div className="eventCard__bg bg-white">
                        <div className="eventCard__content y-gap-10">
                          <div className="eventCard__inner">
                            <h4 className="eventCard__title text-17 fw-500">
                              <Link
                                className="linkCustom"
                                href={`/events/${elm._id}`}
                              >
                                {elm.title}
                              </Link>
                            </h4>
                            <div className="d-flex x-gap-15 pt-10">
                              <div className="d-flex items-center">
                                <div className="icon-calendar-2 text-16 mr-8"></div>
                                <div className="text-14">{moment(elm.createdAt).format('DD-MM-YYYY')}</div>
                              </div>
                              <div className="d-flex items-center">
                                {/* <div className="icon-location text-16 mr-8"></div> */}
                                <div className="text-14 fw-700">${elm.price}</div>
                              </div>
                            </div>
                          </div>

                          <div className="eventCard__button">
                            <Link
                              href={`/`}
                              className="button -sm -rounded -blue-8 text-white px-25"
                            >
                              Buy
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>

        {/* <div className="row pt-60 lg:pt-40">
          <div className="col-auto">
            <Link
              href="/event-list-1"
              className="button -icon -outline-purple-1 text-purple-1 fw-500"
            >
              View All Subjects
              <span className="icon-arrow-top-right text-14 ml-10"></span>
            </Link>
          </div>
        </div> */}
      </div>
    </section>
  );
}
