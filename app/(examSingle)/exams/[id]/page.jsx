



"use client"
import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import CourseDetailsOne from '@/components/examSingle/examDetailsOne'
import CourseSlider from '@/components/courseSingle/CourseSlider'
import FooterOne from '@/components/layout/footers/FooterOne'

import Header from '@/components/layout/headers/Header'
import React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

// export const metadata = {
//   title: 'Couese-single-1 || Educrat - Professional LMS Online Education Course NextJS Template',
//   description:
//     'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
// }

export default function page({ params }) {
  const router = useRouter()
  const serarchParams = useSearchParams()
  const id = serarchParams.get('id')
  // const {id} = router
  console.log("router",serarchParams,id)
  // <Preloader/>
  return (
    <div  className="main-content  ">
        <Header/>
        <div  className="content-wrapper  js-content-wrapper ">
            <PageLinks/>
            <CourseDetailsOne id={params?.id} />
            {/* <CourseSlider/> */}
            <FooterOne/>
        </div>


    </div>
  )
}
