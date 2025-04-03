import CustomButton from '@/components/shared/CustomButton'
import { CirclePlay } from 'lucide-react';
import { ArrowRight } from "lucide-react";
import Image from 'next/image';

const RevenueGrowth = () => {
  return (
    <div className='flex justify-center items-center '>
    <div className='flex gap-3 flex-col md:flex-row w-[90%] lg:w-[75%] justify-center items-center mt-10 p-2'>
        <div className='flex flex-col gap-3 '>
          <p className='text-[var(--color-light-slate)]'>CRM & AUTOMATION SOFTWARE</p>
          <h2 className='text-3xl md:text-5xl font-semibold'>Grow your revenue and relationships</h2>
          <p className='text-[var(--color-light-slate)]'>Salesmate offers simple, personal, and productive experiences 
          for your sales team and customers.</p>
          <div className='flex gap-2'>
            <CustomButton label='Get Started' textColor="text-white" bgColor="bg-[var(--color-blue-primary)]" iconRight={<ArrowRight size={20} />} />
            <CustomButton label="How it works" bgColor="bg-white" textColor="text-black" borderless iconRight={<CirclePlay color='blue' size={20}/>}/>
          </div>
        </div>
        <div className='relative w-[60vw] h-[50vh] md:h-[60vh] md:w-[30vw] shrink-0 '>
            <Image alt="" src="/images/simplifiedworkflow.svg" fill/>
        </div>
    </div>
    </div>
  )
}

export default RevenueGrowth
