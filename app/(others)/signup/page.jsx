'use client'
import React,{useEffect, useState} from 'react'
import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import FooterOne from '@/components/layout/footers/FooterOne'
import Header from '@/components/layout/headers/Header'
import HeaderAuth from '@/components/layout/headers/HeaderAuth'
import AuthImageMove from '@/components/others/AuthImageMove'
import LoginForm from '@/components/others/LoginForm'
import SignUpForm from '@/components/others/SignUpForm'
import Terms from '@/components/terms/Terms'
import { httpClient } from '@/utils/api'
import { Cookies } from 'react-cookie'
// export const metadata = {
//   title: 'Sign up || Educrat - Professional LMS Online Education Course NextJS Template',
//   description:
//     'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
// }




export default function page() {
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  console.log("token",token)
    if (token !== undefined) {
      // router.push('/')'
      getAuthUser()
    } 
  
   
  }, [])

  const getAuthUser = (data) => {
    setLoading(true)
    httpClient.get("user/auth/me").then(({data}) => {
      if (data) {
       setLoading(false)
        // setAuthUser(data);
        
      } else {
        setLoading(false)
      }
    }).catch(function (error) {
      httpClient.defaults.headers.common['Authorization'] = '';
      message.error({content:error.message,key:"1"});
    });
  }
  return (
    <div className="main-content  ">
      <Preloader/>

        {/* <HeaderAuth/> */}
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <section  className="form-page js-mouse-move-container">
          <AuthImageMove showbg={true} />
                <SignUpForm/>
            </section>
           
            
            
        </div>

    </div>
  )
}
