import Image from "next/image"
import CustomButton from "@/components/shared/CustomButton"
import auditData from '../../../const/auditData.json';


const DataExtraction = () => {
  return (
    <div className="bg-[var(--color-blue-bg)] md:h-screen mt-3 md:mt-20 flex gap-2 flex-col  justify-center items-center ">
      <div className="buttons flex justify-center items-center">
        <CustomButton label={auditData.dataExtraction.buttons.withoutCaptain} textColor="text-white" bgColor="bg-[var(--color-blue-primary)]"/>
        <CustomButton label={auditData.dataExtraction.buttons.withCaptain} textColor="text-white" bgColor="bg-[var(--color-navy)]"/>
      </div>
      <div className="h-[60%] w-[80%] ">
        <Image src="images/auditbg2.svg" alt="" height={0} width={0} className="h-[100%] w-[100%] " />
      </div>
      <div className="w-[80%] ">
        <hr className="border border-white w-[80%]"/>
        <div className="my-2 p-2 flex flex-col md:flex-row gap-3 text-white justify-center ">
        {auditData.dataExtraction.sections.map((section, index) => (
        <div key={index} >
          <h3 className="text-2xl font-medium">{section.title}</h3>
          <p>{section.description}</p>
        </div>
      ))}
        </div>
      </div>
    </div>
  )
}

export default DataExtraction
