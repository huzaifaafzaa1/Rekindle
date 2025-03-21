import ServiceProviderForm from "@/components/shared/forms/ServiceProviderForm";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const services = [
  { name: "House Cleaning", icon: "/icons/housecleaning.svg" },
  { name: "Graphic Design", icon: "/icons/graphicdesign.svg" },
  { name: "Life Coaching", icon: "/icons/lifecoaching.svg" },
  { name: "Bookkeeping Services", icon: "/icons/bookkeepingservices.svg" },
  { name: "Web Design", icon: "/icons/webdesign.svg" },
  { name: "Building Contractors", icon: "/icons/buildingcontractors.svg" },
  { name: "General Photography", icon: "/icons/generalphotography.svg" },
  { name: "Personal Trainers", icon: "/icons/personaltrainers.svg" },
  { name: "Web Development", icon: "/icons/webdevelopment.svg" },
  { name: "Gardening", icon: "/icons/gardening.svg" },
  { name: "Social Media Marketing", icon: "/icons/socialmediamarketing.svg" },
  { name: "Commercial & Office Cleaning", icon: "/icons/commercialofficecleaning.svg",},
];

const WinLocalJobs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center gap-5 mt-3 md:mt-10 ">
      <div className="p-4 ">
        <h1 className="text-3xl md:text-5xl">Win local Jobs and <br /> <span className="font-bold">grow your business</span></h1>
        <p className="mt-4 text-[var(--color-light-slate)]">View opportunities in your area for free!</p>
        <ServiceProviderForm />
        <p className="mt-4 text-lg font-semibold">Popular services</p>
        <div className="grid sm:grid-cols-2 gap-3 mt-2">
          {services.map((service, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <Image src={service.icon} alt="" width={20} height={20} />
              <span>{service.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <div className="relative h-[500px] w-[370px] flex justify-center">
            <Image src="/images/excellentrated.svg" alt="" height={500} width={370} />
            <Button className="absolute bottom-9 w-[90%] py-5 text-black bg-white hover:bg-white">Excellent Rated</Button>
        </div>
      </div>
    </div>
  );
};

export default WinLocalJobs;
