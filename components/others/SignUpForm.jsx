"use client";

import { registerNewUser } from "@/service/user";
import { httpClient } from "@/utils/api";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {useState} from 'react'
import { Cookies } from "react-cookie";

export default function SignUpForm() {
  const [loading, setLoading] = useState(false)
  const [authUser, setAuthUser] = useState(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobile: '',
    profession:'',
    email: "",
    password: "",
    confirmPassword: "",
    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const getAuthUser = (data) => {
    setLoading(true)
    httpClient.get("user/auth/me").then(({data}) => {
      if (data) {
       setLoading(false)
        // setAuthUser(data);
        router.push('/')
      } else {
        setLoading(false)
      }
    }).catch(function (error) {
      httpClient.defaults.headers.common['Authorization'] = '';
      message.error({content:error.message,key:"1"});
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
   
    if (formData?.password !== formData.confirmPassword) { 
      return message.error({content:"password does not match",key:"1"})
    }
    try {
      delete formData.confirmPassword
      
      await registerNewUser(formData).then(({data}) => { 
        if (data) {
          setLoading(false)
           httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
           const cookies = new Cookies();
           cookies.set('token', data.token);
          // getAuthUser(data);
          router.push('/login')
           // if (callbackFun) callbackFun();
         } else {
           setLoading(false)
         }
      })

    } catch (error) {
      message.error({content:error?.message,key:"1"})
    }

   
  };
  return (
    <>
     
    <div className="form-page__content lg:py-50">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-10 col-lg-9">
              <div className="px-50 py-50 md:px-25 md:py-25 bg-white rounded-16">
            
              <h3 className="text-30 lh-13">Sign Up</h3>
            

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
                 <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    First Name *
                  </label>
                  <input required type="text" name="firstname" placeholder="Enter First Name"  value={formData.firstname}
            onChange={handleChange}/>
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Last Name *
                  </label>
                  <input required type="text" name="lastname" placeholder="Enter Last Name"  value={formData.lastname}
            onChange={handleChange}/>
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                   Email *
                  </label>
                  <input required type="text" name="email" placeholder="Enter Email"  value={formData.email}
            onChange={handleChange} />
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                   Mobile No. *
                  </label>
                  <input required type="text" name="mobile" placeholder="Enter Mobile No."  value={formData.mobile}
            onChange={handleChange}/>
                </div>
                <div className="col-lg-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Profession *
                  </label>
                  <input required type="text" name="profession" placeholder="Enter Profession"  value={formData.profession}
            onChange={handleChange}/>
                </div>
               
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Password *
                  </label>
                  <input required type="text" name="password" placeholder="Enter Password"  value={formData.password}
            onChange={handleChange}/>
                </div>
                <div className="col-lg-6">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Confirm Password *
                  </label>
                  <input required type="text" name="confirmPassword" placeholder="Enter Confirm Password"  value={formData.confirmPassword}
            onChange={handleChange}/>
                </div>
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -dark-1 text-white fw-500 w-1/1"
                  >
                    Register
                  </button>
                </div>
                <p className="mt-10">
                Already have an account?
                <Link href="/login" className="text-purple-1">
                  Log in
                </Link>
              </p>
              </form>

              {/* <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                Or sign in using
              </div>

              <div className="d-flex x-gap-20 items-center justify-between pt-20">
                <div>
                  <button className="button -sm px-24 py-20 -outline-blue-3 text-blue-3 text-14">
                    Log In via Facebook
                  </button>
                </div>
                <div>
                  <button className="button -sm px-24 py-20 -outline-red-3 text-red-3 text-14">
                    Log In via Google+
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
  );
}
