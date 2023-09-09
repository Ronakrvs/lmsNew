import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function HeroFive({ heroHeader }) {
  const [data,setData] = useState({})
  useEffect(() => {
    
  setData(heroHeader)
  
  }, [heroHeader])
  
  return (
    <section className="masthead -type-4 mt-2"
      style={{ backgroundImage: `url('/assets/img/newui/background.png')`,backgroundColor:"#0D1736" }}
    >
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
                    className="button -md -blue-8 -rounded text-white"
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
    </section>
  );
}
