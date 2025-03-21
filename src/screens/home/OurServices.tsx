import ServicesCard from "@/components/shared/ServicesCard";

const services = [
  {
    icon: "/icons/qualitylead.svg",
    title: "Get Quality Leads",
    items: [
      "View Leads locally or nationwide",
      "Review leads for free",
      "Get leads sent to you in real time",
    ],
    buttonLabel: "How it Works",
  },
  {
    icon: "/icons/newclients.svg",
    title: "Win New Clients",
    items: [
      "View Leads locally or nationwide",
      "Review leads for free",
      "Get leads sent to you in real time",
    ],
    buttonLabel: "See an example lead",
  },
  {
    icon: "/icons/growbusiness.svg",
    title: "Grow Your Business",
    items: [
      "View Leads locally or nationwide",
      "Review leads for free",
      "Get leads sent to you in real time",
    ],
    buttonLabel: "See more about pricing",
  },
];

const OurServices = () => {
  return (
    <div className="border-2 p-3 mt-3 flex flex-col justify-center gap-6 items-center md:flex-row md:mt-20">
      {services.map((service, index) => (
        <ServicesCard
          key={index}
          icon={service.icon}
          title={service.title}
          items={service.items}
          buttonLabel={service.buttonLabel}
        />
      ))}
    </div>
  );
};

export default OurServices;
