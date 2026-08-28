"use client"
import React, { useEffect } from 'react'
import Navbar from './navbar'
import { TextAnimate } from './ui/text-animate'
import Countdown from './Countdown'
import Lenis from 'lenis'

const Hero = () => {
  useEffect(() => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", ({ scroll }) => {
    document.documentElement.style.setProperty(
      "--scroll",
      `${scroll}px`
    );
  });

  return () => lenis.destroy();
}, []);
  return (
    
<div className="flex screen flex-col h-screen justify-between bg-cover bg-no-repeat w-screen items-center"    
  style={{
  backgroundPosition: `center calc(100% + 100px + var(--scroll) * 0.1)`,
}}>
     <Navbar />
    <div className="flex   flex-col font-mono mt-40 justify-start items-center  tracking-tighter h-full xl:text-[120px] text-7xl font-extrabold text-mist-100 xl:max-w-5xl lg:max-w-3xl   w-full  ">
        <TextAnimate animation="slideUp"  by="word">
      SoxFindr
    </TextAnimate>
      <div className="text-[16px] font-mont w-full text-center  flex justify-center  items-center font-normal text-mist-400  tracking-tighter">
       <TextAnimate animation="slideUp" by="word">
         find your passion, build your skills, and connect with like-minded individuals.

        </TextAnimate>
      </div >
      <div className="flex gap-2 ">
      {/* <p className="flex text-mist-100 bg-[#de9228] font-normal w-min rounded-full px-2 py-1 mt-2 text-[12px] tracking-tighter gap-4 ">
        Trusted
      </p>    */}
       <p className="flex bg-[#de9228] text-mist-100 font-normal  rounded-full px-2 py-1 mt-2 text-[12px] tracking-tighter gap-4 ">
        By the students, For the students
      </p>
      </div>
      <Countdown targetDate="2026-09-18T00:00:00" />
    </div>
  </div>  
  )
}

export default Hero