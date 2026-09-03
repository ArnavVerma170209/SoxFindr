"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { HoverBorderGradient } from "./ui/hover-button-gradient"
import { useState } from "react"
import { MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Show } from "@clerk/nextjs";

const Navbar =  () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const closeMenu = () => setIsExpanded(false);
  return (
    <div className={cn("z-100 w-screen  font-mont flex lg:justify-center border-b border-mist-900 bg-mist-950/80 h-20 fixed backdrop-blur-lg ", 
      isExpanded && "bg-mist-900"
     )}>

    <div className="flex xl:gap-52   xl:max-w-5xl lg:max-w-3xl lg:gap-28 gap-4  w-full h-20  font-bold text-2xl items-center justify-between   px-10 lg:px-0 ">
     <Link href="/" aria-label="SoxFindr home" className="h-full flex justify-center items-center border-x border-x-mist-800/50 w-20"> <div>
        
        <Image
          src="/logo.svg"
          alt="SoxFindr Logo"
          width={40}
          height={40}
          className={cn(isExpanded && "hidden")}
        />
      </div>
      </Link>
      <div className=" gap-4 hidden lg:flex">
        <Link href="/">
          <Button variant="ghost" className={"text-accent hover:bg-transparent text-[16px] hover:text-accent/80"} size="lg">
            Home
          </Button>
        </Link>   <Link href="/societies">
          <Button variant="ghost" className={"text-accent hover:bg-transparent text-[16px] hover:text-accent/80"} size="lg">
            Societies
          </Button>
        </Link>     <Link href="/faqs">
          <Button variant="ghost" className={"text-accent hover:bg-transparent text-[16px] hover:text-accent/80"} size="lg">
            FAQs
          </Button>
        </Link>
      </div> <div className="flex gap-10">
        <Show when="signed-out">
      <Link href="/login">
         
      <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white hidden lg:block text-sm  font-bold hover:bg-mist-200 hover:text-mist-800 transition duration-1000 text-mist-950  space-x-2"
            clockwise={false}
          >
            <span>
              Register
            </span>
          </HoverBorderGradient>
        </Link></Show>
        <Show when="signed-in">
          <Link href="/dashboard">
         
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="bg-white hidden lg:block text-sm  font-bold hover:bg-mist-200 hover:text-mist-800 transition duration-1000 text-mist-950  space-x-2"
            clockwise={false}
          >
            <span>
              Dashboard
            </span>
          </HoverBorderGradient>
          </Link></Show>
         <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsExpanded(true)}
            className={cn("block lg:hidden", isExpanded && "hidden")}
          >
            <MenuIcon className="h-8 w-8 text-white" aria-hidden="true" />
          </button>
      </div>
    </div>
     <div
        className={cn(
          "flex xl:hidden bg-mist-900 backdrop-blur-2xl fixed z-100",
          isExpanded && "top-0 transition duration-500"
        )}
      >
        <div
          className={cn(
            "hidden h-screen fixed w-screen  transition duration-500 z-10 bg-mist-900/70 backdrop-blur-xl text-white",
            isExpanded && "flex flex-col absolute "
          )}
        >
          <div className="h-20   w-full flex justify-between items-center p-7">
            <Link href={"/"} aria-label="SoxFindr home">
              <Image src={"/logo.svg"} height={40} width={40} alt="" />{" "}
            </Link>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsExpanded(false)}
              className="h-10 w-10 text-white"
            >
              <X className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div
            className={cn(
              "transition font-mono duration-500 px-7 justify-center bg-mist-900/95 backdrop-blur-3xl  gap-y-4 text-5xl h-full flex flex-col",
              isExpanded && "flex font-mono flex-col"
            )}
          >
            <Link href={"/"} onClick={closeMenu}>Home</Link>
            <Link href={"/societies"} onClick={closeMenu}>Societies</Link>
            <Link href={"/faqs"} onClick={closeMenu}>FAQs</Link>
            <Show when="signed-in">
              <Link href={"/dashboard"} onClick={closeMenu}>Dashboard</Link>
            </Show>
            <Show when="signed-out">
            <Link href={"/login"} onClick={closeMenu}>Register</Link>
            </Show>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Navbar