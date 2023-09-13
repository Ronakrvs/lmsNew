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
        let scale = 1; // Initial scale value
    
        const updatePosition = () => {
          const time = performance.now() * 0.001;
          const x = centerX + Math.sin(time) * (centerX * 0.5);
          const y = centerY + Math.cos(time) * (centerY * 0.5);
    
          // Add a zoom in and out effect based on sine wave
          scale = 1 + Math.sin(time) * 0.1; // You can adjust the zoom level (0.1 in this case)
    
          gsap.to(image, {
            x: ((x - centerX) / container?.offsetWidth) * Number(movement),
            y: ((y - centerY) / container?.offsetHeight) * Number(movement),
            scale: scale, // Apply the scale effect
            duration: 0.3, // Reduce the duration to 0.3 seconds
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
          style={{ position: 'absolute', top: "0%", left: "30%" }}
        >
          <img src={'/assets/img/learning4.png'} alt="icon" className="js-mouse-move w-50" style={{width:"4em"}}/>
        </div>

        

        <div   data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"0%",left:"5%"}}
                  >
                    <img src={'/assets/img/learning2.png'} alt="icon" className="js-mouse-move" style={{width:"4em"}}/>
                    
      </div>
      <div id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"30%",left:"9%"}}
                  >
                    <img src={'/assets/img/learning1.png'} alt="icon" className="js-mouse-move" style={{width:"4em"}} />
                    
      </div>
      <div id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"60%",left:"20%"}}
                  >
                    <img src={'/assets/img/learning2.png'} alt="icon" className="js-mouse-move" style={{width:"4em"}} />
                    
      </div>
      <div  id="movableDiv" data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"25%",left:"70%"}}
                  >
                    <img src={'/assets/img/learning3.png'} alt="icon" className="js-mouse-move" style={{width:"4em"}}/>
                    
      </div>
      <div  id="movableDiv" data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"70%",left:"90%"}}
                  >
                    <img src={'/assets/img/learning4.png'} alt="icon" className="js-mouse-move" style={{width:"4em"}}/>
                    
      </div>
      <div id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"30%",left:"90%"}}
                  >
                    <img src={'/assets/img/learning2.png'} alt="icon" className="js-mouse-move" style={{width:"4em"}}/>
                    
                  </div>
      <div   data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"6%",left:"100%"}}
                  >
                    <img src={'/assets/img/learning1.png'} alt="icon" className="js-mouse-move" style={{width:"4em"}}/>
                    
                  </div>
      <div id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"70%",left:"60%"}}
                  >
                    <img src={'/assets/img/learning1.png'} alt="icon" className="js-mouse-move" style={{width:"4em"}}/>
                    
                  </div>
      <div  id="movableDiv"  data-aos="ease-out-back"
          // data-aos-delay="750"
                    data-move="90"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{position: 'absolute',top:"1%",left:"70%"}}
                  >
                    <img src={'/assets/img/learning2.png'} alt="icon" className="js-mouse-move" style={{width:"4em"}}/>
                    
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
