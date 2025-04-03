import Image from "next/image"
import { useTranslations } from 'next-intl'
import CustomButton from "@/components/shared/CustomButton";
import { ArrowRight } from "lucide-react";

const ScaleAutomation = () => {
  const t = useTranslations('scaleAutomations')

  return (
    <div className="relative md:h-screen bg-black flex flex-col md:flex-row justify-center items-center">
      <div className="absolute right-0 h-[70vh] w-[60vw]">
        <Image src="/images/auditbg3.svg" alt="" height={0} width={0} className="object-cover h-[100%] w-[100%]"/>
      </div>

      <div className="w-[90%] lg:w-[75%] flex flex-col md:flex-row justify-center items-center gap-3">
        <div className="p-2 flex flex-col md:w-1/2 text-white z-10">
          <h2 className="text-2xl md:text-4xl font-semibold my-2">{t('title')}</h2>
          <p>{t('description1')}</p>
          <p>{t('description2')}</p>
          <div className="my-2">
            <CustomButton 
              label={t('buttons.startFreeAutomation')} 
              textColor="text-black" 
              bgColor="bg-white" 
              iconRight={<ArrowRight size={20} />}
            />
          </div>
          <ul>
            {t.raw('cta').map((line: string, index: number) => (
              <li key={index} className="flex items-center gap-2 my-1">
                <Image src="/icons/cube.svg" alt="" height={20} width={20} />
                {line}
              </li>
            ))}
          </ul>
        </div>
      
        <div className="h-[60vh] w-[40vw]">
          <Image src="/images/robot.svg" alt="" height={0} width={0} className="h-[100%] w-[100%]"/>
        </div>
      </div> 
    </div>
  )
}

export default ScaleAutomation