import Image from "next/image"
import { useTranslations } from 'next-intl'
import CustomButton from "@/components/shared/CustomButton";
import { ArrowRight } from "lucide-react";

const LeadGenerationAutomation = () => {
  const t = useTranslations('leadGeneration')

  return (
    <div className="md:h-screen relative mb:3 md:mb-20 flex justify-center items-center">
      {/* background Image */}
      <div className="absolute w-full h-full">
        <Image src="/images/auditbg1.svg" alt="" fill className="object-cover"/>
      </div>

      <div className="w-[90%] lg:w-[75%] flex flex-col md:flex-row justify-center items-center gap-1 md:gap-6 z-10">
        <div className="p-2 md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-semibold">
            {t('title.title1')}<span className="text-[var(--color-blue-primary)]"> {t('title.title2')} </span>{t('title.title3')}
          </h2>
          <p className="my-3 text-[var(--color-light-slate)]">{t('description')}</p>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <CustomButton 
              label={t('buttons.startFreeAutomation')} 
              textColor="text-white" 
              bgColor="bg-[var(--color-blue-primary)]" 
              iconRight={<ArrowRight size={20} />} 
            />
            <p className="text-[var(--color-light-slate)]">Or</p>
            < CustomButton label={t('buttons.exploreWorkflows')} bgColor="bg-white" textColor="text-black"/>
          </div>
        </div>
        <div className="flex-shrink-0 w-[60vw] h-[60vh] md:w-[30vw] relative">
          <Image src="/images/dashboard.svg" alt="" fill className="" />
        </div>
      </div>
    </div>
  )
}

export default LeadGenerationAutomation