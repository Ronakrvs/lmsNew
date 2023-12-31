'use client'

import '../public/assets/sass/styles.scss'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'react-calendar/dist/Calendar.css';
config.autoAddCss = false

import AOS from "aos";
import "aos/dist/aos.css";


import { useEffect } from 'react'
import Context from '@/context/Context';
import { Provider } from 'react-redux';

import { wrapper, store } from "../store/store";




export default function RootLayout({ children }) {
  
  useEffect(() => {
    AOS.init({
      duration: 700,
      // offset: 120,
      easing: 'ease-out',
      once:false
    });

  }, []);
  return (
    <html lang="en" className=''>
      <head>
      
      </head>
      <body  >
      <Provider store={store}>
          <Context> {children}</Context>
          </Provider>
       
        </body>
    </html>
  )
}
