import Image from "next/image"
import auditData from '../../../const/auditData.json';
import CustomButton from "@/components/shared/CustomButton";
import { ArrowRight } from "lucide-react";


const LeadGenerationAutomation = () => {
  return (
    <div className=" md:h-screen relative mb:3 md:mb-20 flex justify-center items-center">
        {/* background Image */}
        <div className="absolute w-full h-full">
            <Image src="/images/auditbg1.svg" alt="" fill className="object-cover"/>
        </div>

        <div className=" flex flex-col md:flex-row justify-center items-center gap-6 z-10">
          <div className=" p-2 md:w-1/2 ">
            <h2 className="text-5xl font-semibold">
              {auditData.leadGeneration.title.title1}<span className="text-[var(--color-blue-primary)]"> {auditData.leadGeneration.title.title2} </span>{auditData.leadGeneration.title.title3}
            </h2>
            <p className="my-3 text-[var(--color-light-slate)]">{auditData.leadGeneration.description}</p>
            <div className="flex flex-col md:flex-row items-center gap-2">
              <CustomButton label={auditData.leadGeneration.buttons.startFreeAutomation} textColor="text-white" bgColor="bg-[var(--color-blue-primary)]" iconRight={<ArrowRight size={20} />} />
              <p className="text-[var(--color-light-slate)]">Or</p>
              <button className="font-semibold">{auditData.leadGeneration.buttons.exploreWorkflows}</button>
            </div>
          </div>
          <div className="flex-shrink-0 h-[60vh] w-[40vw] relative">
            <Image src="/images/dashboard.svg" alt="" fill className="" />
          </div>
          
        </div>

    </div>
  )
}

export default LeadGenerationAutomation
