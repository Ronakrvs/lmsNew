"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Star from "../../common/Star";
import Buttons from "@/components/uiElements/Buttons";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Divider } from "antd";
export default function CourseCardFive({ data, index }) {
  const [rating, setRating] = useState([]);
  useEffect(() => {
    for (let i = Math.round(data.rating); i >= 1; i--) {
      setRating((pre) => [...pre, "star"]);
    }
  }, []);
  return (
    <div className="swiper-slide" style={{ height: "fit-content" }}>
      <div>
        <div
          className="coursesCard -type-1 "
          style={{ border: "none", padding: 0 }}
        >
          <div className="relative">
            <div className="coursesCard__image overflow-hidden rounded-8" >
              <img
                width={500}
                height={500}
                style={{ height: "100%", width: "100%",minHeight:"200px",maxHeight:"200px" }}
                className="w-1/1"
                src={Array.isArray(data?.image) ?  data.image[0]?.fileUrl : data?.image}
                alt="image"
              />
              <div className="coursesCard__image_overlay rounded-8"></div>
            </div>
            <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
          </div>

          <div className="h-100 pt-15 " style={{minHeight:"7.5em",display:"flex",flexDirection:"column",justifyContent:"space-between"}}>
          
            <div className="text-17 lh-15 fw-500 text-dark-1 mt-10 mb-20" style={{minHeight:"90px"}}>
              <Link className="linkCustom" href={`/courses/${data._id}`}>
                {data.title}
              </Link>
            </div>

            <div className="d-flex x-gap-10 items-center pt-10 justify-center align-bottom" style={{borderTop:"1px solid #EDEDED"}}>
             
              <div className="d-flex items-center">
                <div className="mr-8">
                  <img
                    width={16}
                    height={17}
                    src='/assets/img/Vector.svg'
                    alt="icon"
                  />
                </div>
                <div className="text-14 lh-1">{`${Math.floor(
                  data.totalHours,
                )}h ${Math.floor(data.totalHours % 60)}m`}</div>
                
              </div>
              <div class="vr text-color-grey"></div>
              {/* <Divider type="vertical" /> */}
              <div className="d-flex items-center">
              <Link
                          className="linkCustom"
                          href={`/courses/${data?._id}`}
                        >
                         View Details <ArrowRightOutlined/>
                        </Link>
              </div>

              {/* <div className="d-flex items-right fw-600">
              {data.paid ? (
                  <>
                    <div></div>
                    <div>${data.price}</div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>Free</div>
                  </>
                )}
              </div> */}
              </div>
              {/* <div className="d-flex items-center">
                <div className="mr-8">
                  <img
                    width={16}
                    height={17}
                    src={data?.image}
                    alt="icon"
                  />
                </div>
                <div className="text-14 lh-1">{data.level}</div>
              </div> */}
            </div>

            <div className="coursesCard-footer" style={{display:"initial",border:"0"}}>
              {/* <div className="coursesCard-footer__author">
                <img
                  width={30}
                  height={30}
                  src={data.image}
                  alt="image"
                />
                <div>{data.authorName}</div>
              </div> */}
 <button className="button -sm -green-8 rounded-200 text-white" style={{width:"100%",}}>
               Buy
              </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}
