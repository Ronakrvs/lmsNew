import React from "react";
import { learningfeatures } from "../../../data/learningPaths";
import Image from "next/image";
import LogoName from "@/components/common/logoName";
import { featureTwo } from "@/data/features";
export default function LearningPathsSix() {
  return (
    <section className="layout-pt-sm layout-pb-lg  mt-40">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-5 col-lg-6 col-md-9 lg:order-2">
            <h3 className="text-45 md:text-30 lh-12">
              <span className="text-dark-1">Welcome to</span> 
              <br className="lg:d-none" /> <span className="text-blue-8">DENTABEST</span>
            </h3>
            <p className="mt-20" style={{fontSize:"20px",fontWeight:"400",lineHeight:"37px",fontFamily:"inter"}}>
            The dentabest is an initiative to help students clear National Boards Dental Examinations with ease. Till date, The dentabest providing advanced mock tests and resources to help you in INBDE preparation. 
              <br className="lg:d-none" /> 
            </p>
            {/* <div className="row y-gap-30 justify-between">
          {featureTwo.map((elm, i) => (
            <div key={i} className="col-xl-3 col-md-6">
              <div className="d-flex items-center">
                <span className="d-flex w-20">
                <img width={70} height={70} src={elm.imgSrc} alt="icon" />
                <div className="text-20 fw-500">{elm.title}</div>
                </span>

                <div>
                
                </div>
              </div>
            </div>
          ))}
        </div> */}
            
            <div className="row x-gap-20 y-gap-20 items-center pt-40 lg:pt-30 ">
                {featureTwo.map((elm, i) => (
                  <div key={i} className="col-xl-4 col-auto ">
                    <div className="text-dark-1 d-flex  justify-around">
                      <div className="mr-10 d-flex justify-between " style={{display:"flex" }}>
                        <img
                          width={90}
                          height={90}
                          src={elm.imgSrc}
                          // style={{width:"auto"}}
                          alt="icon"
                        />
                      </div>
                      <div className="fw-500 lh-11 mt-10">
                        {elm?.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            <div className="d-inline-block mt-30">

              <a href="#" className="button -md rounded-200 -green-8 text-white">
               Start Learning
              </a>
            </div>
          </div>

          <div className="col-lg-6 lg:order-1">
            <div className="">
              {/* <div className="-el-1">
                <div className="bg-dark-1 py-50 px-30 rounded-8">
                  <div className="y-gap-20 pt-25">
                    {learningfeatures.map((elm, i) => (
                      <div key={i} className="d-flex items-center">
                        <div className="d-flex items-center justify-center size-25 rounded-full bg-purple-1 mr-15">
                          <i className="fa fa-check text-white"></i>
                        </div>
                        <div className="fw-500 text-white">{elm.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div> */}
              <div className="-el-2">
                <img
                  width={750}
                  height={670}
                  style={{ width: "100%", height: "100%" }}
                  className="w-1/1"
                  src='/assets/img/bgdenta.jpeg'
                  alt="image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
