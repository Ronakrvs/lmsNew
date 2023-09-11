"use client";

import React from "react";
import Links from "../component/Links";
import Socials from "@/components/common/Socials";
import Image from "next/image";
import FooterLinksThree from "../component/FooterLinksThree";
import Link from "next/link";

export default function FooterSeven() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <footer className="footer -type-4 bg-white border-top-light">
      <div className="container" style={{width:"100%",maxWidth:"100%",margin:"0",padding:"0"}}>
        <div className="row " >
        <div className="col-lg-7 col-md-6" style={{borderRight:"1px solid",background:"#1D2C45"}}>
            <div className="row y-gap-30" style={{padding:"70px"}}>
              <FooterLinksThree isRequire={true}
                allClasses={"text-17 fw-500 text-white uppercase mb-25"}
                parentclassName={"col-lg-4 col-md-4 text-white"}
              />
            </div>
          </div>
        

          <div className="col-xl-5 col-lg-6 col-md-6" style={{background:"#0D1736"}}>
            {/* <div className="footer-header__logo">
              <Image
                width={140}
                height={50}
                src="/assets/img/general/logo-dark.svg"
                alt="logo"
              />
            </div> */}

            <div className="d-flex justify-between mt-30">
              <div className="text-white" style={{fontSize:"25px",padding:"40px"}}>
              The Dentabest is committed to preparing students for success in the Integrated National Board Dental Examination (INBDE) solflessly.
              </div>
            
            </div>
            <div className="col-auto">
            <Link
              href="/blog-list-1"
              className="button -icon -md -green-8 rounded-200 text-white"
            >
              Browse Blog
              <i className="icon-arrow-top-right text-13 ml-10"></i>
            </Link>
          </div>
          </div>
        </div>

        <div className="row">
        
        <div className="col-lg-7 col-md-6" style={{borderRight:"1px solid",background:"#0D1736"}}>
        <div className="row justify-between items-end y-gap-20">
            <div className="col-auto">
              <div className=" d-flex items-end h-100 text-white" style={{fontSize:"30px"}}>
                © {new Date().getFullYear()} Dentabest. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-20 items-end flex-wrap">
                {/* <div>
                  <div className="d-flex x-gap-15">
                    <Links />
                  </div>
                </div> */}

                {/* <div className="">
                  <a
                    href="#"
                    className="button -md -light-3 px-15 rounded-200 -blue-8 text-white"
                  >
                    <i className="icon-worldwide mr-10"></i>English
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          </div>
          <div className="col-xl-5 col-lg-6 col-md-6" style={{background:"#1D2C45"}}>
            {/* <div className="">
              <div className="text-17 uppercase text-whitedark-1 fw-500">
                Take your learning with you
              </div>
              <div className="d-flex mt-15">
                <a href="#">
                  <Image
                    width={180}
                    height={60}
                    src="/assets/img/footer/apps-2/1.png"
                    alt="image"
                  />
                </a>
                <a href="#" className="ml-10">
                  <Image
                    width={180}
                    height={60}
                    src="/assets/img/footer/apps-2/2.png"
                    alt="image"
                  />
                </a>
              </div>
            </div> */}

            <div className="footer-header-socials ">
              {/* <div className="text-17 uppercase text-white fw-500">
                Follow us on social media
              </div> */}
              <div className="footer-header-socials__list d-flex items-center mt-15" >
                <Socials
                  componentsClass={"size-70 d-flex justify-center bg-blue-8 text-white items-center fs-45"}
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="py-30 border-top-light-15">
          <div className="row justify-between items-center y-gap-20">
            <div className="col-auto">
              <div className="d-flex items-center h-100">
                © {new Date().getFullYear()} Educrat. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                <div>
                  <div className="d-flex x-gap-15">
                    <Links />
                  </div>
                </div>

                <div className="">
                  <a
                    href="#"
                    className="button -md -light-3 px-15 rounded-200 -purple-3 text-purple-1"
                  >
                    <i className="icon-worldwide mr-10"></i>English
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
}
