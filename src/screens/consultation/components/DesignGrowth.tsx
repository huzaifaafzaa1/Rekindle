import Image from "next/image"
import CustomButton from "@/components/shared/CustomButton"

const DesignGrowth = () => {
  return (
    <div className="bg-blue-50 mt-2 md:mt-10 flex justify-center items-center">
    <div className="flex gap-4 justify-center items-center w-[90%] lg:w-[75%] flex-col md:flex-row  my-3 ">
      <div className='relative w-[60vw] h-[50vh] md:h-[60vh] md:w-[30vw] shrink-0'>
        <Image src="/images/growth.svg" alt="" fill />
      </div>
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">Design-led growth, <em>made easy.</em></h2>
        <div className="mt-3 relative flex gap-2 h-[40vh] w-[40vw]">
          <Image src="/images/blocktext.svg" alt="" fill/>
        </div>
        <CustomButton label='Get Started' textColor="text-white" bgColor="bg-[var(--color-blue-primary)]" />
      </div>
    </div>
    </div>
  )
}

export default DesignGrowth
