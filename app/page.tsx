import FAQ from "@/components/FAQs";
import Hero from "@/components/Hero";
import Navbar from "@/components/navbar";
import Section from "@/components/Societies/Section";
import { TextAnimate } from "@/components/ui/text-animate";
import { getOrCreateUser } from "@/db/user";
import { cn } from "@/lib/utils";

export default async function Home() {
  return (<>


   <Hero/>

   {/* section to make a seemless transition from waves to bg color */}
   <div className="bg-linear-to-b from-transparent h-[30vh] via-mist-950/40 to-mist-950  text-[60px] lg:text-[80px] text-mist-100 font-mono w-screen flex flex-col justify-center items-center bg-[#de9228] xl:bg-[#de9228]">
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
     <div className="flex mt-48 mb-20 justify-center  h-auto w-full flex-col overflow-hidden">
          <h1
            className={cn(
              "font-mono text-center h-24 xl:text-6xl  text-5xl tracking-tighter text-white drop-shadow-[0_0px_35px_#ce1fff)] uppercase ",
              
            )}
          >
            Frequently asked questions
          </h1>     
        </div>
    <FAQ />

       <div className="h-12 bg-mist-900 text-mist-100/20 flex justify-center items-center w-full">
         made doing msti by Arnav Verma :)
       </div>
      </>
  ) 
}