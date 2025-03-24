import TitleWithLogos from "@/components/shared/TitleWithLogos"
import SectionHeader from "@/components/shared/SectionHeader"
import LeadGenerationAutomation from "./components/LeadGenerationAutomation"
import DataExtraction from "./components/DataExtraction"
import ScaleAutomation from "./components/ScaleAutomation"
import TechDebt from "./components/TechDebt"

const AuditPage = () => {
  return (
    <div>
      <LeadGenerationAutomation/>
      <SectionHeader title="The ultimate automatoon tool for ambitious teams"
       description="Are your tools preventing you from scaling your sales and marketing ops, creating silos? "
      />
      <DataExtraction/>    
      <ScaleAutomation/>  
      <TechDebt/>
      <TitleWithLogos title="Large businesses use Rekindle Data"/>
    </div>
  )
}

export default AuditPage
