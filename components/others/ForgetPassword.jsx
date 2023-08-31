"use client";

import { loginUser } from "@/service/user";
import Link from "next/link";
import React, { useState ,useEffect} from "react";
import {Checkbox, message} from 'antd'
import {Cookies} from "react-cookie";
import { httpClient } from "@/utils/api";
import { useRouter } from "next/navigation";
import { forgetPassword } from "../../service/user";
export default function ForgetPassword() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
   
  });

//   useEffect(() => {
//     const cookies = new Cookies();
//     const token = cookies.get("token");
//     httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
// console.log("token",token)
//     if (token) {
//       router.push('/')
//     } 
  
   
//   }, [])
  

  // const getAuthUser = (data) => {
  //   setLoading(true)
  //   httpClient.get("user/auth/me").then(({data}) => {
  //     if (data) {
  //      setLoading(false)
  //       setAuthUser(data);
  //       router.push('/dshb-courses')
  //     } else {
  //       setLoading(false)
  //     }
  //   }).catch(function (error) {
  //     httpClient.defaults.headers.common['Authorization'] = '';
  //     message.error({content:error.message,key:"1"});
  //   });
  // }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await forgetPassword(formData).then(({ data }) => {
        console.log(data);
      router.push('/login')
      })
    } catch (error) {
      message.error({ content: error.message, key: "1" });
      
      setLoading(false);
    }

      
   
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  return (
    <div className="form-page__content lg:py-50">
      <div className="container">
        <div className="row justify-center items-center">
          <div className="col-xl-8 col-lg-8">
            <div className="px-50 py-50 md:px-25 md:py-25 bg-white rounded-16">
              <h3 className="text-30 lh-13">Login</h3>
             

              <form
                className="contact-form respondForm__form row y-gap-20 pt-30"
                onSubmit={handleSubmit}
              >
                <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Email
                  </label>
                  <input required type="text" name="email" placeholder="Enter Email"
                    value={formData.email}
            onChange={handleChange} />
                </div>
                {/* <div className="col-12">
                  <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                    Password
                  </label>
                  <input
                    required
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  />
                </div> */}
               
             
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -dark-1 text-white fw-500 w-1/1"
                  >
                    Send Link
                  </button>
                  {/* <div className="row">
                  <div className="col-6 ">
                    <Link href="/signin" className="text-purple-1">
                  Sign In
                </Link></div>
                <Link href="/signup" className="col-6 text-purple-1 text-right">
                  Sign up
                </Link>
              
                  </div> */}
                  </div>
              </form>

              <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                Or 
              </div>

              <div className="d-flex x-gap-20 items-center justify-between pt-20">
                <div>
                  <button className="button -md -dark-1 text-white fw-500 w-1/1">
                  <Link href="/login" >
                  Sign In
                </Link>
                  </button>
                </div>
                <div>
                  <button className="button -md -dark-1 text-white fw-500 w-1/1">
                  <Link href="/signup" >
                  Sign Up
                </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
