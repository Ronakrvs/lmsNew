// import HomeOne from "@/components/homes/home";
"use client"
import {useEffect} from 'react'

import BrandsTwo from '@/components/homes/brands/BrandsTwo'
import HeroFive from '@/components/homes/heros/HeroFive'
import HeaderFive from '@/components/layout/headers/HeaderFive'
import CoursesFive from '@/components/homes/courses/CoursesFive'
import React from 'react'
import CategoriesFive from '@/components/homes/categories/CategoriesFive'
import StudentsFive from '@/components/homes/students/StudentsFive'
import LearningPathFive from '@/components/common/LearningCommon'
import Pricing from '@/components/homes/pricing/Pricing'

import GetAppFive from '@/components/homes/getApp/GetAppFive'
import BlogsFive from '@/components/homes/blogs/BlogsFive'
import RecomentationFive from '@/components/homes/LearningRecomentation/RecomentationFive'
import FooterFive from '@/components/layout/footers/FooterFive'
import Instructors from "../components/common/Instructors";

import Preloader from "@/components/common/Preloader";
import { useRouter } from "next/navigation";
import { Cookies } from 'react-cookie';
import { httpClient } from '@/utils/api';
import Header from '@/components/layout/headers/Header'
import InstractorSeven from '@/components/homes/instractors/InstractorSeven'
import BlogsTwo from '@/components/homes/blogs/BlogsTwo'
import GetAppSix from '@/components/homes/getApp/GetAppSix'
import FooterThree from '@/components/layout/footers/FooterThree'


// export const metadata = {
//   title: 'Home-1 || Educrat - Professional LMS Online Education Course NextJS Template',
//   description:
//     'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
// }

export default function HomePage() {
  const router = useRouter()
  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    httpClient.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    if (token) {
      router.push('/')
    } else {
      router.push('/login')
      
    }
  
    
  }, [])
  
  return (
    
    <>
    <Preloader/>
    <Header/>
    
    <div className="content-wrapper  js-content-wrapper overflow-hidden">
    
       <HeroFive/>
        {/* <BrandsTwo/> */}
        <InstractorSeven/>
          <CoursesFive/>
          {/* <CategoriesFive/> */}
          <Instructors backgroundColor={'bg-beige-1'}/>
          {/* <StudentsFive/> */}
          <LearningPathFive/>
          <Pricing/>
          {/* <GetAppFive/> */}
        {/* <BlogsFive/> */}
          <BlogsTwo/>
          {/* <RecomentationFive/> */}
          <GetAppSix/>
            <FooterThree/>
      
      
    </div>
  </>
  );
}
