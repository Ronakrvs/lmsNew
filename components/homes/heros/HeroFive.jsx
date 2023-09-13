import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";

export default function HeroFive({ heroHeader }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const parallaxIt = () => {
      AOS.refreshHard()
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

  useEffect(() => {
    setData(heroHeader);
  }, [heroHeader]);

  return (
    <section
      className="masthead -type-4 mt-2"
      style={{
        backgroundColor: "#0D1736",
        height: "100vh",
      }}
      data-parallax="0.6"
    >
      <div data-parallax-target> <div className="js-mouse-move-container">
        <div
          data-move="90"
         
          
          className="lg:d-none img-el -w-150 px-20 py-20 d-flex items-center  rounded-8 js-mouse-move"
          style={{ position: 'absolute', top: "10%", left: "25%" }}
        >
          <img src={'/assets/img/ele1.png'} alt="icon" className="js-mouse-move" style={{width:"5rem"}} />
        </div>
        <div
          data-aos="ease-out-back"
          className="lg:d-none img-el -w-150 px-20 py-80 d-flex items-center  rounded-8 js-mouse-move"
          style={{ position: 'absolute', top: "65%", left: "40%" }}
        >
          <img src={'/assets/img/ele2.png'} alt="icon" className="js-mouse-move" style={{width:"5rem"}} />
        </div>
        <div
          data-aos="ease-in-out-cubic"
      
          className="lg:d-none img-el -w-150 px-20 py-20 d-flex items-center  rounded-8 js-mouse-move"
          style={{ position: 'absolute', top: "40%%", left: "45%" }}
        >
          <img src={'/assets/img/ele3.png'} alt="icon" className="js-mouse-move" style={{width:"5rem"}} />
          </div>
          </div></div>
      <div className="container" >
     
        <div
          className="row y-gap-50 x-gap-50 justify-between items-center"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <div className="col-xl-5 col-lg-6">
            <div className="masthead__content">
              <h1 className="masthead__title text-white">
                <div data-aos="fade-right" data-aos-delay="500">{data?.herotitle}</div>
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
                <div className="col-auto">
                  <Link
                    href="/signup"
                    className="button -md -green-8 -rounded text-white"
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
            className="col-xl-6 col-lg-6  d-sm-block d-md-block d-xs-block sm:d-none md:d-none  "
            style={{
              backgroundImage: `url(${data?.bgbackimage})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              textAlign: "center",
              // position: "absolute",
              // bottom: "100px",
            }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="masthead__image" data-aos="fade-left" data-aos-delay="500">
              <img
                // width={720}
                // style={{ width: "auto",display:"flex",justifyContent: "center",alignItems: "flex-end"}}
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
