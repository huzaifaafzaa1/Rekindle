import Image from "next/image";

const footerData = [
  {
    title: "For Customers",
    links: ["Our Guarantee", "About us", "Testimonials"],
  },
  {
    title: "Our Services",
    links: [
      "How it works",
      "Pricing",
      "Join as a Professional",
      "Help centre",
      "Mobile App",
    ],
  },
  {
    title: "About",
    links: ["About Rekindle Data", "Partners", "Careers", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer className="mt-10 py-6 mx-auto w-[85%] ">

      <div className=" flex flex-col gap-2 lg:flex-row ">
        <div className="flex flex-col justify-center items-center text-center md:text-left  md:flex-row md:items-start  my-2 ">
        {footerData.map((section, index) => (
          <div key={index} className="mb-6  mx-12">
            <h3 className="font-semibold text-[var( --color-light-slate)] mb-3">{section.title}</h3>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a className="text-[var(--color-light-slate)]">{link}</a>
                </li>
              ))}
            </ul>
          </div>
         ))}
        </div>
        
        <div className="my-2 text-center lg:text-right">
          <p>team@company.com</p>
          <h2 className="text-xl font-medium mt-2">(604) 222-2221</h2>
          <p className="text-[var(--color-light-slate)]">(open 24 hours 7 days a week)</p>
          <div className="flex gap-3 justify-center lg:justify-end my-3">
            <div className="flex justify-center items-center h-[25px] w-[25px]"><Image src="/logos/twitter.svg" alt="" height={25} width={25}/></div>
            <div className="flex justify-center items-center h-[25px] w-[25px]"><Image src="/logos/facebook.svg" alt="" height={25} width={25}/></div>
            <div className="flex justify-center items-center h-[25px] w-[25px]"><Image src="/logos/linkedin.svg" alt="" height={25} width={25}/></div>
          </div>
          
          <div className="flex items-center justify-center border rounded-lg px-4 py-2 my-4 cursor-pointer">
            {/* Country Flag */}
            <div className="flex justify-center items-center w-[24px] h-[16px]"><Image src="/images/canada.svg" alt="Canada Flag" width={24} height={16} /></div>
            
            {/* Country Name */}
            <input
            type="text"
            value="Canada"
            readOnly
            className="ml-2 font-medium  cursor-pointer"
            />
            {/* Dropdown Arrow */}
            <div className="flex justify-center items-center h-[8px] w-[8px]"><Image src="/icons/arrowdown.svg" alt="Dropdown Icon" width={8} height={8} className="ml-2"/></div>
            </div>
          </div>
        </div>
      
      <hr />
      <p className="text-center text-sm mt-4">© 2022 Bark.com Global Limited. Terms & Conditions / Cookie policy / Privacy policy</p>
    </footer>
  );
}
