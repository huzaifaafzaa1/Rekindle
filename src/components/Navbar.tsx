"use client";
import Image from "next/image";
import CustomButton from "./shared/CustomButton";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";
import { CircleUserRound, Shell } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const segment = useSelectedLayoutSegment(); // ✅ Works better in Next.js 15

  const isHomePage = segment === null; // Null means it's the root ("/")

  return (
    <nav className="px-5 w-[92%] lg:w-[77%] mx-auto navbar h-[60px] bg-white flex items-center justify-between">
      <div className="flex justify-center items-center gap-8">
        <div className="flex gap-1 justify-center items-center">
          <Shell size={36} color={isHomePage ? "#2447A2" : "#000000"} />
          <p className="font-josefin-sans text-[28px] font-semibold text-center">
            Rekindle
          </p>
        </div>
        <div className="relative group z-10">
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <p>Explore</p>
            <div className="h-[8px] w-[8px]">
              <Image
                src="/icons/arrowdown.svg"
                height={8}
                width={8}
                alt="arrow down"
              />
            </div>
          </div>

          <div className="absolute top-8 left-0 w-40 bg-white shadow-lg rounded-md flex flex-col py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <Link href="/" className="px-4 py-2 hover:bg-gray-100">
              Home
            </Link>
            <Link href="/leadgen" className="px-4 py-2 hover:bg-gray-100">
              Leadgen
            </Link>
            <Link href="/audit" className="px-4 py-2 hover:bg-gray-100">
              Audit
            </Link>
            <Link href="/consultation" className="px-4 py-2 hover:bg-gray-100">
              Consultation
            </Link>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="hidden md:flex gap-2 justify-center items-center">
        <CustomButton
          label="Log in"
          textColor="text-black"
          bgColor="bg-gray-100"
        />
        <CustomButton
          label="Join as a Professional"
          textColor="text-white"
          bgColor={isHomePage ? "bg-[var(--color-green-primary)]" : "bg-[#2563EB]"}
          iconLeft={<CircleUserRound size={20} />}
        />
      </div>

      {/* mobile buttons */}
      <button
        className="md:hidden flex justify-center items-center h-[30px] w-[30px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <IoMenu className="h-[30px] w-[30px]" />
      </button>

      {/* when click on the button this part will be executed */}
      {isOpen && (
        <div className="absolute z-10 top-[60px] right-0 w-full bg-white flex flex-col items-center py-4 md:hidden">
          <CustomButton
            label="Log in"
            textColor="text-black"
            bgColor="bg-gray-100"
          />
          <CustomButton
            label="Join as a Professional"
            textColor="text-white"
            bgColor={isHomePage ? "bg-[var(--color-green-primary)]" : "bg-[#2563EB]"}
            iconLeft={<CircleUserRound size={20} />}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
