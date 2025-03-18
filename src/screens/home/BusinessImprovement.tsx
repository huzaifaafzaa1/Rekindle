import CustomButton from '../../components/shared/CustomButton'
import BusinessImprovementCard from '../../components/shared/BusinessImprovementCard'

const BusinessImprovement = () => {
  return (
    <div className='mt-20 flex justify-evenly border-2 bg-slate-50'>
       <div className='flex flex-col justify-center '>
        <h1 className='text-6xl my-2'>Join us for business <br /> <span className='font-bold'>Improvement</span></h1>
        <p className='my-2'>Hundreds of businesses are using our services </p>
        <div><CustomButton label='Join them' textColor='text-white' bgColor='bg-[var(--color-blue-primary)]'/></div>
       </div>
       <div className='grid grid-cols-2 gap-6 '>
        <BusinessImprovementCard icon="/icons/leads.svg" title="10,000s" text="Leads"/>
        <BusinessImprovementCard icon="/icons/revenuegenerated.svg" title="$1M+" text="Revenue generated"/>
        <BusinessImprovementCard icon="/icons/industries.svg" title="1,000+" text="Industries"/>
        <BusinessImprovementCard icon="/icons/business.svg" title="500K+" text="Businesses"/>
       </div>
    </div>
  )
}

export default BusinessImprovement
