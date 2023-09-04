"use client";

import { loginUser } from "@/service/user";
import Link from "next/link";
import React, { useState ,useEffect} from "react";
import {Checkbox, message} from 'antd'
import {Cookies} from "react-cookie";
import { httpClient } from "@/utils/api";
import { useRouter } from "next/navigation";
export default function LoginForm() {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
console.log("token",token)
    if (token) {
      // router.push('/')
    } 
  
   
  }, [])
  

  const getAuthUser = (data) => {
    setLoading(true)
    httpClient.get("user/auth/me").then(({data}) => {
      if (data) {
       setLoading(false)
        setAuthUser(data);
        router.push('/dshb-courses')
      } else {
        setLoading(false)
      }
    }).catch(function (error) {
      httpClient.defaults.headers.common['Authorization'] = '';
      message.error({content:error.message,key:"1"});
    });
  }
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      await loginUser(formData).then(({ data }) => {
        console.log(data);
        if (data) {
         setLoading(false)
          httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
          const cookies = new Cookies();
          cookies.set('token', data.token);
          getAuthUser(data);
          // if (callbackFun) callbackFun();
        } else {
          setLoading(false)
        }
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
                    Username Or Email
                  </label>
                  <input required type="text" name="email" placeholder="Name"
                    value={formData.email}
            onChange={handleChange} />
                </div>
                <div className="col-12">
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
                </div>
                <div className="col-6"><Checkbox >Remember me</Checkbox></div>
                <div className="col-6 text-right">  <Link href="/forget-password" className="text-purple-1">
                  Forget Password
                </Link></div>
                <div className="col-12">
                  <button
                    type="submit"
                    name="submit"
                    id="submit"
                    className="button -md -dark-1 text-white fw-500 w-1/1"
                  >
                    Login
                  </button>
                  <p className="mt-10">
                Don't have an account yet?
                <Link href="/signup" className="text-purple-1">
                  Sign up for free
                </Link>
              </p>
                </div>
              </form>

              {/* <div className="lh-12 text-dark-1 fw-500 text-center mt-20">
                Or sign in using
              </div> */}

              {/* <div className="d-flex x-gap-20 items-center justify-between pt-20">
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
  );
}
