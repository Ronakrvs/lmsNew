"use client";

import {
  categories,
  coursesData,
  duration,
  instractorNames,
  languages,
  levels,
  prices,
  rating,
  sortingOptions,
} from "@/data/courses";
import React, { useState, useEffect } from "react";
import Star from "../common/Star";
import PaginationTwo from "../common/PaginationTwo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { useContextElement } from "@/context/Context";

export default function ExamListSeven({ courseList }) {
  console.log("courseList",courseList)
  const [filterOpen, setFilterOpen] = useState(false);
  const { isAddedToCartCourses, addCourseToCart } = useContextElement();


  const [currentSortingOption, setCurrentSortingOption] = useState("Default");

  const [filteredData, setFilteredData] = useState([]);

  const [sortedFilteredData, setSortedFilteredData] = useState([]);

  const [pageNumber, setPageNumber] = useState(1);


  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">

                <div>
                  <p className="page-header__text">
                   Courses Includes in Exam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-60">
            {courseList
              ?.slice((pageNumber - 1) * 7, pageNumber * 7)
              .map((elm, i) => (
                <div key={i} className="col-12 border-bottom-light">
                  <div className="coursesCard -type-1 row y-gap-20 flex-row items-center">
                    <div className="col-xl-3 col-lg-4">
                      <div className="coursesCard__image rounded-8 relative">
                        <img
                          width={510}
                          height={360}
                          className="w-1/1 rounded-8"
                          src={elm?.image?.[0]?.fileUrl}
                          alt="image"
                        />
                        <div className="coursesCard__image_overlay rounded-8"></div>
                      </div>
                    </div>

                    <div className="col">
                      <div className="d-flex items-center">
                        <div className="text-14 lh-1 text-yellow-1 mr-10">
                          {elm.rating}
                        </div>
                        <div className="d-flex x-gap-5 items-center">
                          <Star star={5} />
                        </div>
                        <div className="text-13 lh-1 ml-10">
                          ({elm.totalRating ? elm.totalRating : 4.5})
                        </div>
                      </div>

                      <div className="col-xl-7 text-17 lh-15 fw-500 text-dark-1 mt-10">
                        <Link
                          className="linkCustom"
                          href={`/courses/${elm._id}`}
                        >
                          {elm.title}
                        </Link>
                      </div>
                      {/* <div className="mt-8">{elm.desc}</div> */}

                      <div className="row x-gap-10 y-gap-10 items-center pt-10">
                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <img
                              width={30}
                              height={30}
                              src={'/assets/img/avatar1.webp'}
                              alt="image"
                            />
                            <div className="ml-10">{elm.authorName}</div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <img
                              width={16}
                              height={17}
                              className="mr-8"
                              src="/assets/img/Vector.svg"
                              alt="icon"
                            />
                            <div className="text-14 lh-1">
                              {elm.lessonCount || 20 } Subject
                            </div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <Image
                              width={16}
                              height={17}
                              className="mr-8"
                              src="/assets/img/clock.svg"
                              alt="icon"
                            />
                            <div className="text-14 lh-1">{`${Math.floor(
                              elm.duration ||30 / 60,
                            )}h ${Math.floor(elm.duration ||30 % 60)}m`}</div>
                          </div>
                        </div>

                      </div>
                    </div>

                    <div className="col-auto md:d-none">
                      <div className="line -vertical -h-120 bg-light-5 ml-60 lg:ml-20 md:ml-0"></div>
                    </div>

                    <div className="col-md-auto">
                      <div className="text-right md:text-left">
                        {elm.paid ? (
                          <>
                            <div className="text-15 lh-1 fw-500 line-through">
                              ${elm.price}
                            </div>
                            <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                              ${elm.price}
                            </div>
                          </>
                        ) : (
                          <>
                            <div></div>
                            <div className="text-24 lh-1 fw-500 text-dark-1 mt-10">
                            ${elm.price}
                            </div>
                          </>
                        )}
                      </div>
                      <div className="row x-gap-20 y-gap-20 items-center pt-25">
                        <div className="col-auto">
                          <button
                            className="button h-50 px-30 -purple-3 text-purple-1"
                            onClick={() => addCourseToCart(elm.id)}
                          >
                            {isAddedToCartCourses(elm.id)
                              ? "Already Added"
                              : "Add To Cart"}
                          </button>
                        </div>
                        <div className="col-auto">
                          <button className="button size-50 rounded-full -purple-3 text-light-1">
                            <div
                              className="size-20  "
                              style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <FontAwesomeIcon
                                style={{ fontSize: "20px" }}
                                icon={faHeart}
                              />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* <div className="row justify-center pt-90 lg:pt-50">
            <div className="col-auto">
              <PaginationTwo
                pageNumber={pageNumber}
                setPageNumber={setPageNumber}
                data={sortedFilteredData}
                pageCapacity={7}
              />
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
