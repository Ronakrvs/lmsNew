import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HeroFive({ heroHeader }) {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(heroHeader);
  }, [heroHeader]);

  // AOS.refresh()
  return (
    <section 
      className="masthead -type-4 mt-2"
      style={{
        backgroundColor: "#0D1736",
        height: "100vh",
        
      }}
    >
      <div className="container">
        <div
          className="row y-gap-50 x-gap-50 justify-between items-center"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div className="col-xl-5 col-lg-6">
            <div className="masthead__content" >
              <h1 className="masthead__title text-white">
                <div    data-aos="fade-right"
                  data-aos-delay="500">{data?.herotitle}</div>
                {data?.title}
              </h1>
              <p
                className="masthead__text pt-15 text-white"
                style={{ fontSize: "24px" }}
                data-aos="fade-left"
                data-aos-delay="500"
              >
                {data?.description}
              </p>
              <div className="masthead__button row x-gap-20 y-gap-20 pt-30">
                <div
                  className="col-auto"
                  
                >
                  <Link
                    href="/signup"
                    className="button -md -green-8 -rounded text-white"
                  //   data-aos="fade-left"
                  // data-aos-delay="200"
                  >
                    Learn More
                  </Link>
                </div>
                <div
                  className="col-auto"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <Link
                    href="/courses-list-1"
                    className="button -md -green-8 -rounded text-white-1 text-white"
                  >
                    Find Courses
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-xl-6 col-lg-6  d-sm-block d-md-block"
            style={{
              backgroundImage: `url(${data?.bgbackimage})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              textAlign: "center",
              position: "relative",
              bottom: "100px"
            }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="masthead__image"    data-aos="fade-left"
                  data-aos-delay="500" >
              <img
                width={"auto"}
                style={{ width: "auto", top: "10px", position: "relative" }}
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
