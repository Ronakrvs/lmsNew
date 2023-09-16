



"use client"
import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'
import SubjectDetailsOne from '@/components/subjectSingle/subjectDetailsOne'
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

// export async function getStaticProps() {
//   await getExamById(id).then(({ data }) => {
//     console.log(data);
//     setPageItem(data?.data ?  data.data : coursesData[0])
//   })
//   const posts = await res.json()
 
//   return {
//     props: { posts },
//     revalidate: 60,
//   }
// }

export default function Page({  }) {

  const params = useParams()

  return (
    <div  className="main-content  ">
        <Header/>
        <div  className="content-wrapper  js-content-wrapper ">
            <PageLinks/>
            <SubjectDetailsOne id={'65028556b7cd522de618c12c'} />
            {/* <CourseSlider/> */}
            <FooterOne/>
        </div>


    </div>
  )
}
