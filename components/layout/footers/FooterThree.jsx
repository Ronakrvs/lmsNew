import React from "react";
import Links from "../component/Links";
import Socials from "@/components/common/Socials";
import FooterLinks from "../component/FooterLinks";
import Image from "next/image";
import logoImg from '../../../public/assets/logo.webp'
import Link from "next/link";

export default function FooterThree() {
  return (
    <footer className="footer -type-5 pt-60">
      <div className="container">
        <div className="row y-gap-30 pb-60">
          <div className="col-xl-4 col-lg-5 col-md-6">
            <div className="footer-header__logo">
            <Link href="/">
                <Image
                      width={70}
                      height={50}
                      src={logoImg}
                      alt="logo"
                    />
                    DENTA <b>BEST</b>
                  </Link>
            </div>

            <div className="mt-30">
              <div className="text-17 text-dark-1">Call Us</div>
              <div className="text-17 lh-1 fw-500 text-purple-1 mt-5">
               
                <a href='tel: +1(613)617-9322'>+1(613)617-9322</a>
              </div>
            </div>

            <div className="mt-30 pr-20">
              <div className="lh-17">
              158,piazza circle Ottawa ,Ontario K2J5S2
              <a href='mailto:Info@dentabest.com'>Info@dentabest.com</a> ,<a href="mailto:Dentabest.info@gmail.com">Dentabest.info@gmail.com</a>
              </div>
            </div>

            <div className="footer-header-socials mt-30">
              <div className="footer-header-socials__list d-flex items-center">
                <Socials
                  componentsClass={
                    "size-40 d-flex justify-center items-center "
                  }
                />
              </div>
            </div>
          </div>

          <FooterLinks
            allClasses={"text-17 fw-500 text-dark-1 uppercase mb-25"}
          />
        </div>

        <div className="py-30 border-top-light">
          <div className="row justify-between items-center y-gap-20">
            <div className="col-auto">
              <div className="footer-footer__copyright d-flex items-center h-100">
                © {new Date().getFullYear()} DENTA <b>BEST</b>. All Right Reserved.
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex x-gap-20 y-gap-20 items-center flex-wrap">
                <div>
                  <div className="d-flex x-gap-15">
                    <Links />
                  </div>
                </div>

                <div>
                  <a
                    href="#"
                    className="button -md -light-4 px-20 -purple-3 text-purple-1"
                  >
                    <i className="icon-worldwide mr-5"></i>English
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
