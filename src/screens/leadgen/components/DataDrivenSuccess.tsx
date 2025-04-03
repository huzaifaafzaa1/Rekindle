import Image from "next/image";
import BusinessInquiryForm from "@/components/shared/forms/BusinessInquiryForm";

const lists =[
    {icon:"/icons/tick.svg", text:"Real-Time Leads"},
    {icon:"/icons/tick.svg", text:"Choose Your Geo"},
    {icon:"/icons/tick.svg", text:"No Fixed Commitments"},
    {icon:"/icons/tick.svg", text:"Start Receiving Leads Today"},
]

const DataDrivenSuccess = () => {
  return (
    <div className="flex justify-center items-center">
    <div className="w-[90%] lg:w-[70%] mt-3 md:mt-20 flex flex-col md:flex-row gap-10 justify-center items-center">
        <div className="flex flex-col justify-center p-6 ">
            <div className="mb-4"><Image src="/logos/trophy.svg" alt="Trophy Icon" width={50} height={50} /></div>
            <h2 className="text-2xl md:text-3xl ">Rekindle Data Generates Over</h2>
            <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">Over 40,000 Monthly for 450 Dealerships Nationwide</h1>
            <div className="mt-10">
              {lists.map((list,index)=>(<div key={index} className="my-1 flex gap-2 items-center ">
              <Image src={list.icon} alt={list.text} height={25} width={25}/><p>{list.text}</p>
              </div>))}
            </div>
        </div>
        
        {/*Form */}
        <div className="">
          <BusinessInquiryForm/>
        </div>
    </div>
    </div>
  )
}

export default DataDrivenSuccess
