"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
export default function CourseCardSix({ data, index }) {
  console.log(data);
  const [rating, setRating] = useState([]);
  useEffect(() => {
    for (let i = Math.round(data.rating); i >= 1; i--) {
      setRating((pre) => [...pre, "star"]);
    }
  }, []);
  return (
    <div className="col-lg-12">
      <div className="coursesCard -type-4 d-flex sm:d-block items-center border-light rounded-8 px-10 py-10">
        <div className="coursesCard__image max-w-250 rounded-8">
          <img
            width={250}
            height={175}
            className="w-1/1 rounded-8"
            src={'/assets/img/desc.webp'}
            alt="image"
          />
        </div>

        <div className="coursesCard__content pl-20 sm:pl-10 pr-10">
          {/* <div className="coursesCard__stars">
            <div className="d-flex items-center">
              <div className="text-14 lh-1 text-yellow-1 mr-10">
                {data.rating}
              </div>
              <div className="d-flex x-gap-5 items-center">
                {rating.map((itm, i) => (
                  <div key={i} className="icon-star text-9 text-yellow-1"></div>
                ))}
              </div>
              <div className="text-13 lh-1 ml-10">({data.ratingCount})</div>
            </div>
          </div> */}
          <div className="text-17 lh-13 fw-500 text-dark-1 mt-10">
            <Link className="linkCustom" href={`/subject/${data._id}`}>
              {data?.title}
            </Link>
          </div>

          <div className="d-flex x-gap-15 items-center py-10">
            <div className="d-flex items-center">
              <div className="mr-10">
                <img
                  width={16}
                  height={17}
                  src={'/assets/img/clock.svg'}
                  alt="icon"
                />
              </div>
              <div className="text-14 lh-1">{data.lessonCount || 20} Material</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-10">
                <img
                  width={16}
                  height={17}
                  src={'/assets/img/Vector.svg'}
                  alt="icon"
                />
              </div>
              <div className="text-14 lh-1 text-light-1">{`${Math.floor(
                data.duration || 60 / 60,
              )}h ${Math.floor(data.duration || 30 % 60)}m`}</div>
            </div>

            {/* <div className="d-flex items-center">
              <div className="mr-10">
                <Image
                  width={16}
                  height={17}
                  src="assets/img/coursesCards/icons/3.svg"
                  alt="icon"
                />
              </div>
              <div className="text-14 lh-1 text-light-1">{data.level}</div>
            </div> */}
          </div>

          <div className="d-flex justify-between items-center pt-10 border-top-light">
            <div className="d-flex items-center">
              <img
                width={30}
                height={30}
                src={'/assets/img/avatar1.webp' }
                alt="image"
              />
              <div className="text-light-1 ml-10">{data?.authorName ||'Jane Cooper'}</div>
            </div>

            <div className="d-flex items-center">
              {data.paid ? (
                <>
                  <div className="fw-500 mr-10 line-through text-light-1">
                    ${data.price}
                  </div>
                  <div className="text-18 fw-500 text-dark-1">
                    ${data.price}
                  </div>
                </>
              ) : (
                <>
                  <div></div>
                  <div className="text-18 fw-500 text-dark-1">${data.price}</div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
