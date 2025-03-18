import ServicesCard from "@/components/shared/ServicesCard"


const OurServices = () => {
  return (
    <div className='border-2 mt-20 flex  justify-evenly items-center'>
        <ServicesCard icon="/icons/qualitylead.svg" title="Get Quality Leads"
         items={[ "View Leads locally or nationwide",
          "Review leads for free",
          "Get leads sent to you in real time",]}
          buttonLabel="How it Works"/>

        <ServicesCard icon="/icons/newclients.svg" title="Win New Clients"
         items={[ "View Leads locally or nation wide",
          "Review leads for free",
          "Get leads sent to you in real time",]}
          buttonLabel="See an example lead"/>

        <ServicesCard icon="/icons/growbusiness.svg" title="Grow Your Business"
         items={[ "View Leads locally or nation wide",
          "Review leads for free",
          "Get leads sent to you in real time",]}
          buttonLabel="See an example lead"/>
    </div>
  )
}

export default OurServices
