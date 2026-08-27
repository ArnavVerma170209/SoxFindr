import Hero from "@/components/Hero";
import { getOrCreateUser } from "@/db/user";

export default async function Home() {
  const user = await getOrCreateUser()
  console.log(user)
  return (<>
   <Hero/>

   {/* section to make a seemless transition from waves to bg color */}
   <div className="bg-linear-to-b from-transparent h-[30vh] via-mist-950/40 to-mist-950  text-[80px] text-mist-100 font-mono w-screen flex flex-col justify-center items-center bg-[#6e54f5]">
    <div className="font-mono tracking-tighter -mt-4 font-bold xl:max-w-5xl lg:max-w-3xl text-center  w-full px-10 lg:px-0 ">
    SOCIETIES
    </div> 
    <p className="font-mont text-[16px] text-white/80 tracking-tighter -mt-4 font-medium xl:max-w-5xl lg:max-w-3xl text-center  w-full px-10 lg:px-0 ">
      The big leagues
    </p>
   </div>

      </>
  ) 
}