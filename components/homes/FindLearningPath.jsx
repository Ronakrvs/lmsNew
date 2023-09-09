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
          style={{ backgroundImage: "url(/assets/img/ctamap.png)" ,backgroundColor:"#2da397"}}
        ></div>
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-45 md:text-30 text-white">
           Start learning with <br/><LogoName/> community
            </h2>
          </div>

          <div className="w-100"></div>

          <div className="col-lg-4 col-md-8">
            <p className="text-white mt-15">
            evaluate your preperations alongside students <br/>all across the world
            </p>
          </div>

          <div className="w-100"></div>

          <div className="col-auto">
            <Link
              href="/courses-list-3"
              className="button -md -outline-white text-white mt-45 md:mt-20"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
