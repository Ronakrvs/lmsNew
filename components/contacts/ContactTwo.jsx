"use client";

import React,{useState} from "react";
import { locationData } from "@/data/officeLocation";
import { message } from "antd";
import {onContactUsSubmit} from '../../service/contact'
export default function ContactTwo() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    mobile: "",
    comment: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onContactUsSubmit(formData).then(({ data }) => {
        message.success({ content: data?.message, key: "1" })
      })

    } catch (error) {
      message.error({content:data?.message,key:"1"})
    }
  }  
 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <>
      <section className="page-header -type-4 bg-dark-1 text-white">
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title text-white">Contact Us</h1>
                </div>

                <div>
                  <p className="page-header__text text-white">
                    We’re on a mission to deliver engaging, curated
                    <br /> courses at a reasonable price.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-50 justify-between">
            <div className="col-xl-5 col-lg-6">
              <h3 className="text-24 lh-1 fw-500">Our offices</h3>
              <div className="row y-gap-30 pt-40">
                {locationData.map((elm, i) => (
                  <div key={i} className="col-sm-6">
                    <div className="text-20 fw-500 text-dark-1">
                      {elm.location}
                    </div>
                    <div className="y-gap-10 pt-15">
                      <a href="#" className="d-block">
                        {elm.address}
                      </a>
                      <a href="#" className="d-block">
                        {elm.phoneNumber}
                      </a>
                      <a href="#" className="d-block">
                        {elm.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-6">
              <div className="px-40 py-40 bg-white border-light shadow-1 rounded-8 contact-form-to-top">
                <h3 className="text-24 fw-500">Send a Message</h3>
               

                <form
                  className="contact-form row y-gap-30 pt-60 lg:pt-40"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Email Address
                    </label>
                    <input
                      required
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                     Mobile Number
                    </label>
                    <input
                      required
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile..."
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Message...
                    </label>
                    <textarea
                      name="comment"
                      value={formData.comment}
                      onChange={handleChange}
                      placeholder="Message"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      name="submit"
                      id="submit"
                      className="button -md -dark-1 text-white fw-500 w-1/1"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
