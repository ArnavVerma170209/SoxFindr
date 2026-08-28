import Navbar from '@/components/navbar'
import Section from '@/components/Societies/Section'
import { TextAnimate } from '@/components/ui/text-animate'
import React from 'react'

const page = () => {
  return (
    <div>
        <Navbar />
        <div className="mt-20 bg-linear-to-b from-transparent h-[30vh] via-mist-950/40 to-mist-950  text-[60px] lg:text-[80px] text-mist-100 font-mono w-screen flex flex-col justify-center items-center bg-mist-900 ">
            <div className="font-mono  tracking-tighter -mt-4 font-bold xl:max-w-5xl lg:max-w-3xl text-center  w-full  lg:px-0 ">
              <TextAnimate animation="slideUp" by="word" > 
                SOCIETIES
            </TextAnimate>
        
            </div> 
            <div className="font-mont text-[16px] text-white/80 tracking-tighter -mt-4 font-medium xl:max-w-5xl lg:max-w-3xl text-center  w-full px-10 lg:px-0 ">
                <TextAnimate animation="slideUp" by="word" > The Big Leagues
            </TextAnimate>
            </div>
           </div>
        <Section /> 
        <div className="h-24"></div>
          <div className="h-12 bg-mist-900 text-mist-100/20 flex justify-center items-center w-full">
         made doing msti by Arnav Verma :)
       </div>
    </div>
  )
}

export default page