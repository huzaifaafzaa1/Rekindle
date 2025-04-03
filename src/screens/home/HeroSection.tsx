import Image from "next/image";

const HeroSection = () => {
  const services = [
    { id: "01", text: "LEAD GENERATION", isFirst: true },
    { id: "02", text: "WEBSITE AUDITS" },
    { id: "03", text: "CONSULTING" },
    { id: "04", text: "LEAD GENERATION" },
  ];
  return (
    <div className=" herosection h-screen relative bg-gradient-to-r from-[var(--color-blue-gradient-start)] to-[var(--color-blue-gradient-end)] ">
      {/*background Image  */}
      <div className="absolute h-[80vh] w-full ">
        <Image src="/images/herobackground.svg" alt="" height={0} width={0} fill className="object-cover" />
      </div>

      {/* text of herosection */}
      <div className="absolute top-[10%] left-[7%] lg:top-[15%] lg:left-[13%]">
        {services.map(({ id, text, isFirst }) => (
          <div key={id} className="flex gap-3 items-center my-2">
            <p
              className={`text-[var(--color-green-primary)] h-[50px] w-[50px] flex justify-center items-center ${
                isFirst ? "bg-white rounded-full" : ""}`}
            >
              {id}
            </p>
            <h1
              className={` text-4xl md:text-7xl font-anton ${
                isFirst ? "text-[var(--color-blue-dark)]" : "text-white"
              }`}
            >
              {text}
            </h1>
          </div>
        ))}
      </div>

      <div className="absolute top-[20%] left-[18%] z-10">
        <p className="text-white hidden  lg:block">We Sell Leads</p>
      </div>

     {/*bottom icon  */}
      <div className="absolute bottom-[10%] left-[7%] lg:left-[13%] h-[50px] w-[50px] flex justify-center items-center">
        <Image src="/icons/down.svg" alt="" height={50} width={50} />
      </div>

     {/*bottom image  */}
      <div className="h-[10vh] w-[60%] absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center">
        <Image src="/images/herobottom.svg" alt="" height={0} width={0} fill  />
      </div>
    </div>
  );
};

export default HeroSection;
