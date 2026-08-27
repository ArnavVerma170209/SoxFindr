"use client";
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { HoverBorderGradient } from "./ui/hover-button-gradient"
import { useState } from "react"
import { MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Show } from "@clerk/nextjs";

const navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className=" w-screen  font-mont flex lg:justify-center border-b border-mist-900 bg-mist-950/80 h-20 fixed backdrop-blur-lg ">

    <div className="flex xl:gap-52   xl:max-w-5xl lg:max-w-3xl lg:gap-28 gap-4  w-full h-20  font-bold text-2xl items-center justify-between   px-10 lg:px-0 ">
     <Link href="/" className="h-full flex justify-center items-center border-x border-x-mist-800/50 w-20"> <div>
        
        <Image
          src="/logo.svg"
          alt="SoxFindr Logo"
          width={40}
          height={40}
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
        </Link>   <Link href="/guide">
          <Button variant="ghost" className={"text-accent hover:bg-transparent text-[16px] hover:text-accent/80"} size="lg">
            Guide
          </Button>
        </Link>   <Link href="/faqs">
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
         <MenuIcon
            onClick={() => setIsExpanded(true)}
            className="h-8 w-8 text-white block lg:hidden"
          />
      </div>
    </div>
     <div
        className={cn(
          "flex xl:hidden bg-mist-900/70 backdrop-blur-2xl fixed z-10",
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
            <Link href={"/"}>
              <Image src={"/logo.svg"} height={40} width={40} alt="logo" />{" "}
            </Link>

            <X
              onClick={() => setIsExpanded(false)}
              className="h-10 w-10 text-white fill"
            />
          </div>
          <div
            className={cn(
              "transition duration-500 px-7 justify-center bg-mist-900/95 backdrop-blur-3xl  gap-y-4 text-7xl h-full flex flex-col",
              isExpanded && "flex flex-col"
            )}
          >
            <Link href={"/"}>Home</Link>
            <Link href={"/societies"}>Societies</Link>
            <Link href={"/guide"}>Guide</Link>
            <Link href={"/faqs"}>FAQs</Link>
          </div>
        </div>
    </div>
  </div>
  )
}

export default navbar