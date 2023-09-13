"use client"
import Link from "next/link";
import React, { useEffect } from "react";
import { gsap } from "gsap";

export default function FindLearningPath() {
  useEffect(() => {
    const parallaxIt = () => {
      const images = document.querySelectorAll('.js-mouse-move');

      images.forEach((image) => {
        const movement = image.getAttribute('data-move');
        const container = image.closest('.js-mouse-move-container');
        const centerX = container?.offsetWidth / 2;
        const centerY = container?.offsetHeight / 2;

        const updatePosition = () => {
          const time = performance.now() * 0.001;
          const x = centerX + Math.sin(time) * (centerX * 0.5);
          const y = centerY + Math.cos(time) * (centerY * 0.5);

          gsap.to(image, {
            x: ((x - centerX) / container?.offsetWidth) * Number(movement),
            y: ((y - centerY) / container?.offsetHeight) * Number(movement),
            duration: 0.6,
          });

          requestAnimationFrame(updatePosition);
        };

        updatePosition();
      });
    };

    parallaxIt();
  }, []);

  return (
    <section className="cta -type-1 layout-pt-lg layout-pb-lg">
      <div data-parallax="0.6" className="cta__bg">
        <div
          data-parallax-target
          className="bg-image js-lazy"
          style={{ backgroundImage: "url(/assets/img/ctamap.png) ", backgroundColor: "#008E63" }}
        ></div>
      </div>

      <div className="js-mouse-move-container">
        <div
          data-aos="ease-out-back"
          data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{ position: 'absolute', top: "0rem", left: "5rem" }}
        >
          <img src={'/assets/img/learning2.png'} alt="icon" className="js-mouse-move" />
        </div>

        <div
          data-aos="ease-out-back"
          data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{ position: 'absolute', top: "10rem", left: "9rem" }}
        >
          <img src={'/assets/img/learning1.png'} alt="icon" className="js-mouse-move" />
        </div>

        <div   data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"0rem",left:"5rem"}}
                  >
                    <img src={'/assets/img/learning2.png'} alt="icon" className="js-mouse-move" />
                    
      </div>
      <div id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"10rem",left:"9rem"}}
                  >
                    <img src={'/assets/img/learning1.png'} alt="icon" className="js-mouse-move" />
                    
      </div>
      <div id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"25rem",left:"4rem"}}
                  >
                    <img src={'/assets/img/learning2.png'} alt="icon" className="js-mouse-move" />
                    
      </div>
      <div  id="movableDiv" data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"25rem",left:"70rem"}}
                  >
                    <img src={'/assets/img/learning3.png'} alt="icon" className="js-mouse-move" />
                    
      </div>
      <div  id="movableDiv" data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"14rem",left:"90rem"}}
                  >
                    <img src={'/assets/img/learning4.png'} alt="icon" className="js-mouse-move" />
                    
      </div>
      <div id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"30rem",left:"90rem"}}
                  >
                    <img src={'/assets/img/learning2.png'} alt="icon" className="js-mouse-move" />
                    
                  </div>
      <div   data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"6rem",left:"100rem"}}
                  >
                    <img src={'/assets/img/learning1.png'} alt="icon" className="js-mouse-move" />
                    
                  </div>
      <div id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"28rem",left:"34rem"}}
                  >
                    <img src={'/assets/img/learning1.png'} alt="icon" className="js-mouse-move" />
                    
                  </div>
      <div  id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"1rem",left:"70rem"}}
                  >
                    <img src={'/assets/img/learning2.png'} alt="icon" className="js-mouse-move" />
                    
                  </div>
        
      </div>

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <h2 className="text-45 md:text-30 text-white" style={{ fontSize: "84px" }}>
              Start learning with <br /><b className="text-dark-1">DENTABEST</b> community
            </h2>
          </div>

          <div className="w-100"></div>

          <div className="col-lg-12 col-md-8">
            <p className="text-white mt-15" style={{ fontSize: "32px", lineHeight: "42px" }}>
              evaluate your preparations alongside students <br />all across the world
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
