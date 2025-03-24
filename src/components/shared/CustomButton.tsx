import { Button } from "@/components/ui/button";

interface ButtonProps {
  label: string;
  iconLeft?: React.ReactNode;  // Accepts React components (Lucide Icons)
  iconRight?: React.ReactNode;
  textColor?: string;
  bgColor?: string;
}

export default function CustomButton({ label, iconLeft, iconRight, textColor, bgColor }: ButtonProps) {
  return (
    <Button className={`flex items-center gap-2 px-4 py-2 my-4 rounded-[50px] font-inter hover:${bgColor} ${textColor} ${bgColor}`}>
      {iconLeft && <span>{iconLeft}</span>}
      {label}
      {iconRight && <span>{iconRight}</span>}
    </Button>
  );
}
