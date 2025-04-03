import SectionHeader from "@/components/shared/SectionHeader"
import FeaturesCard from "@/components/shared/FeaturesCard"
import CustomButton from "@/components/shared/CustomButton"

const features = [
    {icon: "/icons/exclusive.svg", title: "Exclusive", text: "All leads are 100% exclusive to your dealership"},
    {icon: "/icons/verified.svg", title: "Verified", text: "We verify the information submitted by the client and deliver you the lead immediately."},
    {icon: "/icons/realtime.svg", title: "Real-Time", text: "All leads are 100% exclusive to your dealership"},
    {icon: "/icons/returnpolicy.svg", title: "Return Policy", text: "Replacement policy can be done in our online portal."},
    {icon: "/icons/proton.svg", title: "Exclusive", text: "We provide reliable volume of leads ready to have a car."},
    {icon: "/icons/geotargeting.svg", title: "Geo-Targeting", text: "Geo-location is fully controlled by you."},
]

const OurFeatures = () => {
  return (
    <div className="mx-auto w-[90%] lg:w-[75%] mt-3 md:mt-20 ">
        <SectionHeader title="Our Features" 
        description="Let our marketing experts connect you instantly with local customers currently shopping for a vehicle. 
        A targeted marketing programs through our trusted media channels, including."/>
        <div className=" mt-4 flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
               {features.map((feature,index)=>(<FeaturesCard  key={index} icon={feature.icon} title={feature.title} text={feature.text}/>))} 
            </div>
        </div>
        <div className="flex justify-center items-center"><CustomButton label="Get Leads" textColor="text-white" bgColor="bg-[var(--color-blue-primary)]"/></div>
    </div>
  )
}

export default OurFeatures
