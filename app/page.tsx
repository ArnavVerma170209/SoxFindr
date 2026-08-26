import Countdown from "@/components/Countdown";
import Navbar from "@/components/navbar";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

export default function Home() {
  return (<>
   <div className="flex flex-col h-screen justify-between w-screen items-center"><Navbar />
 
    <div className="flex   flex-col font-mono mt-40 justify-start  tracking-tighter h-full text-[120px] font-extrabold text-mist-100 xl:max-w-5xl lg:max-w-3xl   w-full  ">
        <TextAnimate animation="slideUp" by="word">
      SoxFindr
    </TextAnimate>
      <div className="text-[16px] font-normal text-mist-400 -mt-8 tracking-tighter">
       <TextAnimate animation="slideUp" by="word">
         find what you are looking for, grow your personality, and connect with like-minded individuals.

        </TextAnimate>
      </div >
      <div className="flex gap-2 ">
      <p className="flex text-mist-900 border-mist-950 bg-amber-200 border-[1.5px] font-normal w-min rounded-full px-2 py-1 mt-2 text-[16px] tracking-tighter gap-4 ">
        Trusted
      </p>   
       <p className="flex bg-blue-300 text-mist-900  border-mist-950  border-[1.5px] font-normal  rounded-full px-2 py-1 mt-2 text-[16px] tracking-tighter gap-4 ">
        Reccomended By Seniors 
      </p>
      </div>
      <Countdown targetDate="2026-09-18T00:00:00" />
    </div>
  </div>    
  </>
  ) 
}