import RevenueGrowth from "./components/RevenueGrowth"
import DesignGrowth from "./components/DesignGrowth"
import TitleWithLogos from "@/components/shared/TitleWithLogos"
import ReviewSection from "./components/ReviewSection"
import FaqList from "./components/FaqList"

const ConsultationPage = () => {
  return (
    <div>
      <RevenueGrowth/>
      <DesignGrowth/>
      <ReviewSection/>
      <FaqList/>
      <TitleWithLogos title="Large businesses use Rekindle Data"/>
    </div>
  )
}

export default ConsultationPage
