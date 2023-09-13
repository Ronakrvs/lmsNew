// import HomeOne from "@/components/homes/home";
"use client"
import {useEffect, useState} from 'react'

import BrandsTwo from '@/components/homes/brands/BrandsTwo'
import HeroFive from '@/components/homes/heros/HeroFive'
import HeaderFive from '@/components/layout/headers/HeaderFive'
import CoursesFive from '@/components/homes/courses/CoursesFive'
import ExamFive from '@/components/homes/exam/ExamFive'
import React from 'react'
import CategoriesFive from '@/components/homes/categories/CategoriesFive'
import StudentsFive from '@/components/homes/students/StudentsFive'

import Pricing from '@/components/homes/pricing/Pricing'
import NoSSR from 'react-no-ssr';



import Preloader from "@/components/common/Preloader";
import { useRouter } from "next/navigation";
import { Cookies } from 'react-cookie';
import { httpClient } from '@/utils/api';
import { wrapper, store } from "../store/store";
import { Provider, useDispatch, useSelector } from "react-redux";
import Header from '@/components/layout/headers/Header'
import EventsOne from '@/components/events/EventsOne'
// import HeroTwo from '@/components/homes/heros/HeroTwo'
// import { getAuthUser } from '@/components/others/LoginForm'
import { setUserAuthInfo } from '@/store/actions/userAction'
import { message } from 'antd'
import FindLearningPath from '@/components/homes/FindLearningPath'
import HeaderTwo from '@/components/layout/headers/HeaderTwo'
import HeroTwo from '@/components/homes/heros/HeroTwo'
import FooterSeven from '@/components/layout/footers/FooterSeven'
import EventsSeven from '@/components/homes/events/EventsSeven'
import Line from '@/components/common/Line'
import SkillsOne from '@/components/homes/skills/SkillsOne'
const CustomHeroHeader = React.lazy(() => import('@/components/homes/heros/CustomHeroHeader'));
const LearningPathFive = React.lazy(() => import('@/components/common/LearningCommon'));
const LearningPathsSix = React.lazy(() => import('@/components/homes/LearningPath/LearningPathsSix'));
const InstractorSeven = React.lazy(() => import('@/components/homes/instractors/InstractorSeven'));
const BlogsTwo = React.lazy(() => import('@/components/homes/blogs/BlogsTwo'));
const GetAppSix = React.lazy(() => import('@/components/homes/getApp/GetAppSix'));
const FooterThree = React.lazy(() => import('@/components/layout/footers/FooterThree'));
const JoinTwo = React.lazy(() => import('@/components/homes/join/JoinTwo'));



// export const metadata = {
//   title: 'Home-1 || Educrat - Professional LMS Online Education Course NextJS Template',
//   description:
//     'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
// }

const HomePage=(()=> {
  const router = useRouter()
  const cookies = new Cookies();
  const dispatch = useDispatch()
  const [loading,setLoading] = useState(false)
  const sampleListData = useSelector((state) => state?.authUser);
  const { authUser } = sampleListData;
  const token = cookies.get("token");
  const newsletter = cookies.get("newsletter");
  useEffect(() => {
    httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
console.log("token",token)
    if (authUser) {
      getAuthUser()
      // router.push('/')
    }
  
    
  }, [])

 const getAuthUser = () => {
   setLoading(true)
  //  httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;
   console.log(token)
    httpClient.get("user/auth/me").then(({data}) => {
      if (data) {
       setLoading(false)
        // setAuthUser(data);
        console.log(data)
        dispatch(setUserAuthInfo(data))
        // router.push('/dshb-courses')
      } else {
        setLoading(false)
      }
    }).catch(function (error) {
      httpClient.defaults.headers.common['Authorization'] = '';
      message.error({content:error.message,key:"1"});
    });
  }
  
  return (
    
    <>
      <NoSSR loading={<Preloader/>}>
        <Provider store={store}>

    
    {/* <Header/> */}
    
          <div className="content-wrapper  js-content-wrapper overflow-hidden">
          {/* <HeroTwo/> */}
    <CustomHeroHeader />
         
          <HeaderTwo/>
        {/* <BrandsTwo/> */}
          {/* <InstractorSeven/> */}
          <LearningPathsSix/>
            <ExamFive />
            <Pricing />
            <EventsSeven />
          <CoursesFive/>
          {/* <EventsOne/> */}
          {/* <CategoriesFive/> */}
          {/* <Instructors backgroundColor={'bg-beige-1'}/> */}
          {/* <StudentsFive/> */}
          {/* <LearningPathFive/> */}
            {/* <Line/> */}
            <SkillsOne/>
            <FindLearningPath/>
          {/* <GetAppFive/> */}
        {/* <BlogsFive/> */}
        <BlogsTwo />
        {/* {!newsletter && <JoinTwo />} */}
          {/* <RecomentationFive/> */}
          {/* <GetAppSix/> */}
            {/* <FooterThree/> */}
            <FooterSeven/>
      
        </div>
        </Provider>
        </NoSSR>
  </>
  );
})
export default (HomePage);
