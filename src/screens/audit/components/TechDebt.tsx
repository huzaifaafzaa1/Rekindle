import Image from "next/image"
import { useTranslations } from 'next-intl'
import CustomButton from "@/components/shared/CustomButton"

const TechDebt = () => {
  const t = useTranslations('techDebt')

  return (
    <div className="purple-bg md:h-[40vh] flex justify-center items-center">
      <div className="my-2 flex flex-col md:flex-row w-[90%] lg:w-[75%] gap-6 justify-center items-center">
        <div className="flex-shrink-0">
          <Image 
            src="/images/debt.svg" 
            alt="" 
            height={400} 
            width={300}
          />
        </div>
        <div className="p-2">
          <h2 className="my-1 text-2xl md:text-4xl font-semibold text-white">
            {t('title')}
          </h2>
          <p className="text-white">
            {t('description')}
          </p>
          <CustomButton 
            label={t('buttons.calculateYourCost')} 
            textColor="text-var(--color-purple)" 
            bgColor="bg-white"
          />
        </div>
      </div>
    </div>
  )
}

export default TechDebt