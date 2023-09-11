import Link from "next/link";
import React from "react";
import LogoName from "../common/logoName";

export default function FindLearningPath() {
  return (
    <section className="cta -type-1 layout-pt-lg layout-pb-lg">
      <div data-parallax="0.6" className="cta__bg">
        <div
          data-parallax-target
          className="bg-image js-lazy"
          style={{ backgroundImage: "url(/assets/img/ctamap.png)" ,backgroundColor:"#008E63"}}
        ></div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-45 md:text-30 text-white" style={{fontSize:"84px"}}>
           Start learning with <br/><b className="text-dark-1">DENTABEST</b> community
            </h2>
          </div>

          <div className="w-100"></div>

          <div className="col-lg-12 col-md-8">
            <p className="text-white mt-15" style={{fontSize:"32px",lineHeight:"42px"}}>
            evaluate your preperations alongside students <br/>all across the world
            </p>
          </div>

          <div className="w-100"></div>

          <div className="col-auto">
            <Link
              href="/courses-list-3"
              className="button -md -blue-8 rounded-200  text-white mt-45 md:mt-20 fw-700"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
