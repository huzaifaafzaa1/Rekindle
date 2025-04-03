import { Button } from "@/components/ui/button";

interface ButtonProps {
  label: string;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  textColor?: string;
  bgColor?: string;
  borderless?: boolean; // New prop to control border visibility
}

export default function CustomButton({
  label,
  iconLeft,
  iconRight,
  textColor,
  bgColor,
  borderless = false, // Default is false (border is present)
}: ButtonProps) {
  return (
    <Button
      className={`flex items-center gap-2 px-4 py-2 my-4 rounded-[50px] font-inter  ${borderless ? "border-none" : "border"} hover:${bgColor} ${textColor} ${bgColor}`}
    >
      {iconLeft && <span>{iconLeft}</span>}
      {label}
      {iconRight && <span>{iconRight}</span>}
    </Button>
  );
}
