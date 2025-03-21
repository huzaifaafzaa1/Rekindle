import HeroSection from "./HeroSection";
import DataEfficiency from "./DataEfficiency";
import OurServices from "./OurServices";
import BusinessImprovement from "./BusinessImprovement";
import CustomerSuccessStories from "./CustomerSuccessStories";
import TitleWithLogos from "@/components/shared/TitleWithLogos";

const HomePage = () => {
  return (
    <div>
      <HeroSection/>
      <DataEfficiency/>
      <OurServices/>
      <BusinessImprovement/>
      <CustomerSuccessStories/>
      <TitleWithLogos title="Our Happy Clients"/> 
    </div>
  )
}

export default HomePage
