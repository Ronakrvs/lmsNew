




import BlogsOne from '@/components/blogs/BlogsOne'
import PageLinks from '@/components/common/PageLinks'
import Preloader from '@/components/common/Preloader'

import FooterOne from '@/components/layout/footers/FooterOne'
import FooterThree from '@/components/layout/footers/FooterThree'
import HeaderTwo from '@/components/layout/headers/HeaderTwo'
import React from 'react'

export const metadata = {
  title: 'Blog-list-1 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}


export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

      <HeaderTwo/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            <PageLinks/>

            <BlogsOne/>
            
            <FooterThree/>
        </div>

    </div>
  )
}

