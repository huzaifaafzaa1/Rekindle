import Image from "next/image"
import { Star } from 'lucide-react';
import CustomButton from "@/components/shared/CustomButton";
import { ArrowRight } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const ratings = [
    { label: "Quality:", value: "5.0" },
    { label: "Schedule:", value: "5.0" },
    { label: "Cost:", value: "5.0" },
    { label: "Willing to refer:", value: "5.0" },
  ];

const ReviewSection = () => {
  return (
    <div className=" mt-3 md:mt-13">
        <div className="mx-auto w-[90%] lg:w-[75%]">
            <h2 className="p-2 bg-black text-white text-center text-2xl md:text-3xl font-bold">Exometrics Reviews</h2>
            <div className="border border-gray-300">
                <div className="flex items-center gap-3  p-2">
                    <h1 className="text-2xl md:text-3xl font-semibold">5.0</h1>
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} className="text-[var(--color-orange)] fill-[var(--color-orange)]" />
                        ))}
                    </div>
                    <p className="text-[var(--color-orange)] text-sm">2 REVIEWS</p>
                </div>

                <div className="border border-gray-300 mx-2">
                    <div className="border-b border-gray-300 flex justify-between">
                        <div className="flex items-center gap-2 p-3">
                            <div className="flex justify-center items-center h-[15px] w-[15px]"><Image src="/icons/development.svg" alt="" height={15} width={15}/></div>
                            <p className="text-[var(--color-light-slate)] text-sm ">Custom Software Development</p>
                        </div>
                        <div className="flex items-center w-[30%] border-l border-gray-300">
                          <p className="px-3 text-[var(--color-light-slate)] text-sm ">AUG 24, 2021</p>
                        </div>
                    </div>
                    <div className="p-3 flex flex-col gap-3 justify-center">
                        <h2 className="text-xl md:text-2xl">ML-Based Anti-Money Laundering Tool for Digital Assets Firm</h2>
                        <p>“Their ML skills were top-notch.”</p>
                        <div className="flex items-center gap-3">
                            <h1 className="text-2xl  md:text-3xl font-semibold">5.0</h1>
                            <div className="flex gap-1">
                             {Array.from({ length: 5 }).map((_, index) => (
                             <Star key={index} className="text-[var(--color-orange)] fill-[var(--color-orange)]" />
                             ))}
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 border-t border-gray-300 text-[var(--color-light-slate)] text-sm">
                        {ratings.map((item, index) => (
                        <div key={index} 
                        className={`flex justify-between p-3 ${index < 2 ? "border-b border-gray-300 " : ""}
                        ${index % 2 === 0 ? "border-r border-gray-300" : ""}`}>
                        <span>{item.label}</span>
                        <span className="text-black font-semibold">{item.value}</span>
                        </div>
                     ))}
                    </div>
                </div>

                {/* the project */}
                <div className="mx-2 my-4"> 
                    <h2 className="text-sm md:text-lg font-medium">THE PROJECT</h2>
                    <div className="border border-gray-300">
                        <div className="flex border-b border-gray-300">
                            <div className="w-[50%] p-3 flex gap-2 items-center border-gray-300 border-r">
                              <div className="h-[20px] w-[20px]flex justify-center items-center"><Image src="/icons/banknote.svg" alt="" height={20} width={20}/></div>
                              <p className="text-[var(--color-light-slate)] text-sm">$10,000 to $49,999</p>
                            </div>
                            <div className="p-3 flex gap-2 items-center">
                            <div className="h-[20px] w-[20px]flex justify-center items-center"><Image src="/icons/calendar.svg" alt="" height={20} width={20}/></div>
                              <p className="text-[var(--color-light-slate)] text-sm">Mar. 2021 - Ongoing</p>
                            </div>
                        </div>
                        <div className="my-2 p-2">
                            <h2 className=" text-lg md:text-xl font-medium">Project summary</h2>
                            <p className="text-[var(--color-light-slate)] text-sm">Exometrics created a machine learning (ML) algorithm for a digital asset mining company’s anti-money laundering tool. Their work involved creating a proof of concept (POC) for the firm to use in their service.</p>
                        </div>
                    </div>
                </div>

                {/* the reviewer */}
                <div className="mx-2 my-4"> 
                    <h2 className=" text-sm md:text-lg font-medium">THE REVIEWER</h2>
                    <div className="border border-gray-300">
                        <div className="flex border-b border-gray-300">
                            <div className="w-[50%] p-3 flex gap-2 items-center border-gray-300 border-r">
                            <div className="h-[20px] w-[20px]flex justify-center items-center"><Image src="/icons/employees.svg" alt="" height={20} width={20}/></div>
                              <p className="text-[var(--color-light-slate)] text-sm">11-50 Employees</p>
                            </div>
                            <div className="p-3 flex gap-2 items-center">
                            <div className="h-[20px] w-[20px]flex justify-center items-center"><Image src="/icons/uk.svg" alt="" height={20} width={20}/></div>
                              <p className="text-[var(--color-light-slate)] text-sm">United Kingdom</p>
                            </div>
                        </div>
                        <div className="my-2 p-2 flex items-center gap-4">
                            <div>
                                <Avatar className="bg-slate-100">
                                    <AvatarImage src="/icons/ceo.svg" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>
                            <div>
                                <p className="text-sm text-[var(--color-light-slate)]">Ian Gilmour</p>
                                <p className="text-sm md:text-lg font-medium">Former CEO, Parabolic Digital</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex justify-center items-center h-[15px] w-[15px]"><Image src="/icons/verified1.svg" alt="" height={15} width={15}/></div>
                                    <p className="text-sm text-[var(--color-light-slate)]">Verified</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* feedback summary */}
                <div className="mx-2 my-4"> 
                    <h2 className=" text-sm md:text-lg font-medium">THE PROJECT</h2>
                    <div className="border border-gray-300 my-2 p-2">
                        <h2 className="text-lg md:text-xl font-medium">Feedback summary</h2>
                        <p className="text-[var(--color-light-slate)] text-sm">The engagement was successful. Thanks to Exometrics’ work, the company gained higher B2B engagements and sales. The team delivered the POC on time and within budget, and they leveraged their data science expertise to work independently. Overall, they met all of the client’s expectations.</p>
                        <CustomButton label="Read Full Review" bgColor="bg-[var(--color-blue-primary)]" iconRight={<ArrowRight size={20} />}/>
                    </div>
                </div>            
                <div className="flex gap-8 justify-center items-center pb-4">
                    <Image src="/icons/arrowleft.svg" alt="" height={20} width={20}/>
                    <div className="flex gap-2">
                        <Image src="/icons/dotdark.svg" alt="" height={7} width={7}/>
                        <Image src="/icons/dotlight.svg" alt="" height={7} width={7}/>
                    </div>
                    <Image src="/icons/arrowright.svg" alt="arrowright" height={20} width={20}/>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default ReviewSection
