







import Faq from '@/components/common/Faq'
import Preloader from '@/components/common/Preloader'

import ContactTwo from '@/components/contacts/ContactTwo'

import FooterOne from '@/components/layout/footers/FooterOne'
import FooterThree from '@/components/layout/footers/FooterThree'
import HeaderTwo from '@/components/layout/headers/HeaderTwo'
import React from 'react'
export const metadata = {
  title: 'Contact-2 || Educrat - Professional LMS Online Education Course NextJS Template',
  description:
    'Elevate your e-learning content with Educrat, the most impressive LMS template for online courses, education and LMS platforms.',
  
}

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader/>

         <HeaderTwo/>
        <div className="content-wrapper js-content-wrapper overflow-hidden">
            

            <ContactTwo/>
            {/* <Faq/> */}

           
            
            <FooterThree/>
        </div>

    </div>
  )
}

