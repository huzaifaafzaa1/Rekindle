import Image from "next/image"

interface BusinessImprovementProps{
    icon: string;
    title: string;
    text: string;
}

const BusinessImprovementCard: React.FC<BusinessImprovementProps> = ({icon,title,text}) => {
  return (
    <div className="flex flex-col gap-5 p-6 justify-center items-center bg-white rounded-[10px] my-2">
      <div className="flex justify-items-center items-center h-[60px] w-[60px]"><Image src={icon} alt="" height={60} width={60}/></div>
      <div className="text-center">
        <h1 className="text-4xl">{title}</h1>
        <p className="text-[var(--color-light-slate)]">{text}</p>
      </div>
    </div>
  )
}

export default BusinessImprovementCard
