"use client";

import React,{useState} from "react";
import Image from "next/image";
import { message } from "antd";
import {onSubscribeNewsletter} from '../../../service/newsletter'
import { Cookies } from "react-cookie";
export default function JoinTwo() {
  const [email, setEmail] = useState('')
 
  const handleSubmit = async(e) => {

    e.preventDefault();
try {
  await   onSubscribeNewsletter(email).then(({data}) => {
    message.success({ content: data?.message, key: "1" })
    const cookies = new Cookies();
    cookies.set('newsletter', true);
    setEmail('')
  })
} catch (error) {
  message.error({content:error?.message,key:"1"})
  
}

  };
  return (
    <section className="layout-pt-lg layout-pb-lg mb-90 section-bg">
      <div className="section-bg__item bg-light-10"></div>
        {/* <Image
          width={1200}
          height={1200}
          className="img-full rounded-16"
          src="/assets/img/app/buttons/1.svg"
          alt="image"
        /> */}
      

      <div className="container">
        <div className="row justify-center text-center">
          <div className="col-xl-5 col-lg-6 col-md-11">
            <div className="sectionTitle -light">
              <h2 className="sectionTitle__title text-dark-1">
                Subscribe our Newsletter &
              </h2>

              <p className="sectionTitle__text text-dark-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-30 justify-center">
          <div className="col-lg-6">
            <form
              className="form-single-field -help"
              action="post"
              onSubmit={handleSubmit}
            >
              <input required type="text" placeholder="Your Email..." value={email} onChange={(e)=>setEmail(e?.target?.value)} />
              <button className="button -purple-1 text-white" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
