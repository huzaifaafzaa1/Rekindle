import Image from "next/image"
import auditData from '../../../const/auditData.json';
import CustomButton from "@/components/shared/CustomButton";

const TechDebt = () => {
  return (
    <div className="purple-bg md:h-[40vh] flex justify-center items-center">
      <div className="my-2 flex flex-col md:flex-row md:w-[80%]  gap-6 justify-center items-center ">
        <div className="flex-shrink-0">
            <Image src="/images/debt.svg" alt="" height={400} width={300}/>
        </div>
        <div className="p-2">
          <h2 className="my-1 text-4xl font-semibold text-white">{auditData.techDebt.title}</h2>
          <p className="text-white">{auditData.techDebt.description}</p>
          <CustomButton label={auditData.techDebt.buttons.calculateYourCost} textColor="text-var(--color-purple)" bgColor="bg-white"/>
        </div>
      </div>
    </div>
  )
}

export default TechDebt
