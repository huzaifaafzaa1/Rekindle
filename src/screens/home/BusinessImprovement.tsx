import CustomButton from '../../components/shared/CustomButton'
import BusinessImprovementCard from '../../components/shared/BusinessImprovementCard'

const businessData = [
  { icon: "/icons/leads.svg", title: "10,000s", text: "Leads" },
  { icon: "/icons/revenuegenerated.svg", title: "$1M+", text: "Revenue generated" },
  { icon: "/icons/industries.svg", title: "1,000+", text: "Industries" },
  { icon: "/icons/business.svg", title: "500K+", text: "Businesses" },
];

const BusinessImprovement = () => {
  return (
    <div className='mx-auto w-[90%] lg:w-[75%] mt-3  bg-slate-50 flex justify-evenly flex-col md:flex-row md:mt-20 '>
      <div className='flex flex-col justify-center px-4'>
        <h1 className='text-3xl md:text-5xl my-2'>
          Join us for business <span className='font-medium md:font-bold'>Improvement</span>
        </h1>
        <p className='my-2'>Hundreds of businesses are using our services</p>
        <div>
          <CustomButton label='Join them' textColor='text-white' bgColor='bg-[var(--color-blue-primary)]'/>
        </div>
      </div>

      <div className='shrink-0 grid grid-cols-2 gap-6'>
        {businessData.map((data, index) => (
          <BusinessImprovementCard key={index} icon={data.icon} title={data.title} text={data.text} />
        ))}
      </div>
    </div>
  );
}

export default BusinessImprovement;
