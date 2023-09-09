import React from "react";
import { learningfeatures } from "../../../data/learningPaths";
import Image from "next/image";
import LogoName from "@/components/common/logoName";
export default function LearningPathsSix() {
  return (
    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-xl-5 col-lg-6 col-md-9 lg:order-2">
            <h3 className="text-45 md:text-30 lh-12">
              <span className="text-dark-1">Welcome to</span> 
              <br className="lg:d-none" /> <LogoName/>
            </h3>
            <p className="mt-20">
            The dentabest is an initiative to help students clear National Boards Dental Examinations with ease. Till date, The dentabest providing advanced mock tests and resources to help you in INBDE preparation. 
              <br className="lg:d-none" /> .
            </p>
            <div className="d-inline-block mt-30">
              <a href="#" className="button -md -dark-1 text-white">
               Start Learning
              </a>
            </div>
          </div>

          <div className="col-lg-6 lg:order-1">
            <div className="composition -type-3">
              <div className="-el-1">
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
              </div>
              <div className="-el-2">
                <img
                  width={580}
                  height={670}
                  style={{ width: "100%", height: "100%" }}
                  className="w-1/1"
                  src='https://educrat-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimg%2Fhome-6%2Flearn%2F1.png&w=640&q=75'
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
