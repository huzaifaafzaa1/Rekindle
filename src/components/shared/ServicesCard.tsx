import Image from "next/image"
import CustomButton from "./CustomButton"

interface ServicesCardProps{
    icon:  string;
    title: string;
    items: string[];
    buttonLabel: string;
}

const ServicesCard : React.FC<ServicesCardProps>= ({icon,title,items,buttonLabel}) => {
  return (
    <div className="p-4 my-4">
      <div className="h-[40px] w-[40px] my-3 flex justify-center items-center" ><Image src={icon} alt="" height={40} width={40}/></div>
      <p className="my-2 text-[18px]">{title}</p>
      <ul>
        {items.map((item, index)=>(
            <li key={index} className="list-disc  text-[var(--color-light-slate)]">{item}</li>
        ))}
      </ul>
      <CustomButton label={buttonLabel} textColor="text-white" bgColor="bg-[var(--color-blue-primary)]" />
    </div>
  )
}

export default ServicesCard
