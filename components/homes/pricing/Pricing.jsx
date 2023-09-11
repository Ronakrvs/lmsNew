"use client";

import React, { useState } from "react";
import {pricingDataNew as pricingData } from "../../../data/pricing";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faXmark } from "@fortawesome/free-solid-svg-icons";
export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const handleCheckboxChange = (event) => {
    setIsYearly(event.target.checked);
  };
  return (
    <section className="layout-pt-lg layout-pb-sm bg-light-3">
      <div className="container">
      <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle ">
              <h2 className="" style={{fontSize:"50px", color:"#0D1736"}}>
                   <b style={{color:"#0AA0DF"}}>Our</b> Plans
                </h2>              </div>
            </div>

            {/* <div className="col-auto">
              <div className="tabs__controls d-flex justify-center x-gap-10 js-tabs-controls">
                {courseStates.map((elm, i) => (
                  <div key={i}>
                    <button
                      onClick={() => setCurrentCourseState(elm)}
                      className={`${
                        tabBtnStyle
                          ? tabBtnStyle
                          : "tabs__button px-20 py-8 rounded-200 js-tabs-button"
                      }  ${currentCourseState == elm ? "is-active" : ""} `}
                      data-tab-target=".-tab-item-1"
                      type="button"
                    >
                      {elm}
                    </button>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

        <div className="row y-gap-30 justify-between pt-60 lg:pt-50">
          <div className="col-lg-6 col-md-6">
            <div
              className="priceCard -type-1 rounded-16 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={500}
            >
              <div className="priceCard__header py-40 pl-50 bg-green-8">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  {pricingData[0].type}
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  {pricingData[0].price ? pricingData[0].price : "Free User"}
                </div>
                <div className="priceCard__period text-white mt-5">
                  {pricingData[0].period}
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
                {/* <div className="priceCard__text">
                  Standard listing submission, active for 30 dayss
                </div> */}

                <div className="priceCard__list mt-30">
                  {pricingData[0].features.map((elm, i) => (
                    <div key={i} className="d-flex justify-between">
                    
                      {elm?.key}
                      <span
                        className=" pr-8 text-purple-1"
                        style={{
                          
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                        aria-hidden="true"
                      >
                        {elm?.available ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon   color="red"icon={faXmark} />}

                      </span>
                    </div>
                  ))}
                </div>

                <div className="priceCard__button mt-30">
                  <Link
                    className="button -md rounded-200 -green-8 text-white"
                    href="/courses-list-1"
                  >
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="col-lg-6 col-md-6">
            <div
              className="priceCard -type-1 rounded-16 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <div className="priceCard__header py-40 pl-50 bg-purple-1">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  {pricingData[1].type}
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  $
                  {isYearly
                    ? (pricingData[1].price * 12 * 0.7).toFixed(2)
                    : pricingData[1].price}
                </div>
                <div className="priceCard__period text-white mt-5">
                  {isYearly ? "per year" : pricingData[1].period}
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-purple-1">
                <div className="priceCard__text text-white">
                  Standard listing submission, active for 30 dayss
                </div>

                <div className="priceCard__list mt-30">
                  {pricingData[1].features.map((elm, i) => (
                    <div key={i} className="text-white">
                     <span
                        className=" pr-8  text-white"
                        style={{
                          
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                        aria-hidden="true"
                      >
                        <FontAwesomeIcon icon={faCheck} />

                      </span>
                      {elm}
                    </div>
                  ))}
                </div>

                <div className="priceCard__button mt-30">
                  <Link
                    className="button -md -white text-purple-1"
                    href="/courses-list-1"
                  >
                    Get Started Now
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          <div className="col-lg-6 col-md-6">
            <div
              className="priceCard -type-1 rounded-16 overflow-hidden"
              data-aos="fade-right"
              data-aos-duration={1500}
            >
              <div className="priceCard__header py-40 pl-50 bg-primary">
                <div className="priceCard__type text-18 lh-11 fw-500 text-white">
                  {pricingData[2].type}
                </div>
                <div className="priceCard__price text-45 lh-11 fw-700 text-white mt-8">
                  $
                  {isYearly
                    ? (pricingData[2].price * 12 * 0.7).toFixed(2)
                    : pricingData[2].price}
                </div>
                <div className="priceCard__period text-white mt-5">
                  {isYearly ? "per year" : pricingData[2].period}
                </div>
              </div>

              <div className="priceCard__content pt-30 pr-90 pb-50 pl-50 bg-white">
                {/* <div className="priceCard__text">
                  Standard listing submission, active for 30 dayss
                </div> */}

                <div className="priceCard__list mt-30">
                  {pricingData[2].features.map((elm, i) => (
                    <div key={i} className="d-flex justify-between">
                    
                      {elm?.key}
                      <span
                        className="pr-8  text-purple-1"
                        style={{
                          
                          fontSize: "12px",
                          fontWeight: "300",
                        }}
                        aria-hidden="true"
                      >
                         {elm?.available ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon color="red" icon={faXmark} />}

                      </span>
                    </div>
                  ))}
                </div>

                <div className="priceCard__button mt-30">
                  <Link
                    className="button -md rounded-200 -green-8 text-white"
                    href="/courses-list-1"
                  >
                    Enrolled Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
