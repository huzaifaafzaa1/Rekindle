import { Button } from "@/components/ui/button"
import Image from "next/image";

interface ButtonProps {
  label: string;
  iconLeft?: string;
  iconRight?: string;
  textColor?: string;
  bgColor?: string;
}

export default function CustomButton({ label, iconLeft, iconRight, textColor, bgColor}: ButtonProps) {
  return (
    <Button className={`flex items-center gap-2 px-4 py-2 my-4 rounded-[50px] font-inter hover:${bgColor} ${textColor} ${bgColor}`}>
      {iconLeft && <Image src={iconLeft} alt="icon" width={20} height={20} />}
      {label}
      {iconRight && <Image src={iconRight} alt="icon" width={20} height={20} />}
    </Button>
  );
}

