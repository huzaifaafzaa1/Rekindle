"use client"
import Image from "next/image";
import CustomButton from "./shared/CustomButton";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const[isOpen, setIsOpen] = useState(false)
  return (
    <nav className="navbar h-[60px] max-w-full bg-white flex items-center justify-around ">
      <div className="flex gap-8">
        <div className="flex gap-1 justify-center items-center ">
          <div className="h-[35px] w-[35px] flex justify-center items-center">
            <Image src="/logos/logo.svg" height={35} width={35} alt=""></Image>
          </div>
          <p className="font-josefin-sans text-[28px] font-semibold text-center">Rekindle</p>
        </div>
        <div className="flex justify-center items-center gap-2"> 
          <p>Explore</p>
          <div className="h-[8px] w-[8px]"><Image src="/icons/arrowdown.svg" height={8} width={8} alt=""></Image></div>
        </div>
      </div>

      {/* buttons */}
      <div className=" hidden md:flex gap-2 justify-center items-center">
        <CustomButton label="Log in" textColor="text-black" bgColor="bg-gray-100"/>
        <CustomButton  label="Join as a Professional" textColor="text-white" bgColor="bg-[var(--color-green-primary)]" iconLeft="/icons/user.svg"/>
      </div>

      {/* mobie buttons */}
        <button className="md:hidden flex justify-center items-center h-[30px] w-[30px]" onClick={()=>setIsOpen(!isOpen)}><IoMenu className="h-[30px] w-[30px]" /></button>

      {/* when click on the button this part will be executed */}
      {isOpen && (<div className="absolute z-10 top-[60px] right-0 w-full bg-white flex flex-col items-center py-4 md:hidden">
        <CustomButton label="Log in" textColor="text-black" bgColor="bg-gray-100"/>
        <CustomButton  label="Join as a Professional" textColor="text-white" bgColor="bg-[var(--color-green-primary)]" iconLeft="/icons/user.svg"/>
        </div>)}
      
    </nav>
  );
};

export default Navbar;
