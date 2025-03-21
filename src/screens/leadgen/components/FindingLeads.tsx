import SectionHeader from "@/components/shared/SectionHeader"
import Image from "next/image";

const logos = [
    { name: "colorlib", src: "/logos/colorlib.svg" },
    { name: "envato", src: "/logos/envato.svg" },
    { name: "pingdom", src: "/logos/pingdom.svg" },
    { name: "Magento", src: "/logos/magento.svg" },
    { name: "WooCommerce", src: "/logos/woocommerce.svg", highlighted: true },
    { name: "Laravel", src: "/logos/laravel.svg", highlighted: true },
    { name: "Angular", src: "/logos/angular.svg", highlighted: true },
    { name: "Google", src: "/logos/google.svg", highlighted: true },
    { name: "CarGurus", src: "/logos/cargurus.svg" },
    { name: "Yahoo!", src: "/logos/yahoo.svg" },
    { name: "Bing", src: "/logos/bing.svg" },
    { name: "Kijiji", src: "/logos/kijiji.svg" },
  ];

const FindingLeads = () => {
  return (
    <div className="mt-3  md:mt-20">
        <SectionHeader 
        title="How do we find your leads?" 
        description="Let our marketing experts connect you instantly with local customers currently shopping for a vehicle. A targeted marketing program through our trusted media channels, including." 
      />
      <div className="mt-10 flex justify-center items-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-items-center w-3/4">
          {logos.map((logo, index) => (
          <div key={index} className="flex items-center">
          <Image src={logo.src} alt={logo.name} width={160} height={70} className="h-auto" />
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FindingLeads
