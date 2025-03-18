import Image from "next/image";
import CustomButton from "./shared/CustomButton";

const Navbar = () => {
  return (
    <nav className="navbar h-[60px] max-w-full bg-white flex items-center justify-evenly">
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
      <div className="flex gap-2 justify-center items-center">
        <CustomButton label="Log in" textColor="text-black" bgColor="bg-gray-100"/>
        <CustomButton  label="Join as a Professional" textColor="text-white" bgColor="bg-[var(--color-green-primary)]" iconLeft="/icons/user.svg"
/>
      </div>
    </nav>
  );
};

export default Navbar;
