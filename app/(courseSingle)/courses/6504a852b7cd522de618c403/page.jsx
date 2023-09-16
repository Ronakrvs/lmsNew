



"use client"
import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import CourseDetailsOne from '@/components/courseSingle/CourseDetailsSix'
import CourseSlider from '@/components/courseSingle/CourseSlider'
import FooterOne from '@/components/layout/footers/FooterOne'

import Header from '@/components/layout/headers/Header'
import React from 'react'
import { useRouter, useSearchParams,useParams } from 'next/navigation'

// export const metadata = {
//   title: 'Couese-single-1 || Educrat - Professional LMS Online Education Course NextJS Template',
//   description:
//     'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
// }
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}
export default function page({  }) {

  const params = useParams()
    
  // <Preloader/>
  return (
    <div  className="main-content  ">
        <Header/>
        <div  className="content-wrapper  js-content-wrapper ">
            <PageLinks/>
            <CourseDetailsOne id={'6504a852b7cd522de618c403'} />
            {/* <CourseSlider/> */}
            <FooterOne/>
        </div>


    </div>
  )
}
