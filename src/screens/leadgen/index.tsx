import WinLocalJobs from "./components/WinLocalJobs"
import OurServices from "../home/OurServices"
import FindingLeads from "./components/FindingLeads"
import OurFeatures from "./components/OurFeatures"
import TitleWithLogos from "@/components/shared/TitleWithLogos"
import DataDrivenSuccess from "./components/DataDrivenSuccess"

const LeadgenPage = () => {
  return (
    <div>
      <WinLocalJobs/>
      <OurServices/>
      <FindingLeads/>
      <OurFeatures/>
      <DataDrivenSuccess/>
      <TitleWithLogos title="Large businesses use Rekindle Data"/>
    </div>
  )
}

export default LeadgenPage
