import Image from "next/image";

const HeroSection = () => {
  const services = [
    { id: "01", text: "LEAD GENERATION", isFirst: true },
    { id: "02", text: "WEBSITE AUDITS" },
    { id: "03", text: "CONSULTING" },
    { id: "04", text: "LEAD GENERATION" },
  ];
  return (
    <div className="herosection relative bg-gradient-to-r from-[var(--color-blue-gradient-start)] to-[var(--color-blue-gradient-end)] h-[580px]">
      <div className="absolute h-[400px] w-[1354px] border-2 border-solid border-black">
        <Image src="/images/background.svg" alt="" height={400} width={1354} />
      </div>

      {/* text of herosection */}
      <div className="absolute top-[15%] left-[15%]">
        {services.map(({ id, text, isFirst }) => (
          <div key={id} className="flex gap-3 items-center my-2">
            <p
              className={`text-[var(--color-green-primary)] h-[50px] w-[50px] flex justify-center items-center ${
                isFirst ? "bg-white rounded-full" : ""}`}
            >
              {id}
            </p>
            <h1
              className={`text-5xl font-anton text-[70px] ${
                isFirst ? "text-[var(--color-blue-dark)]" : "text-white"
              }`}
            >
              {text}
            </h1>
          </div>
        ))}
      </div>

      <div className="absolute top-[20%] left-[20%] z-10">
        <p className="text-white">We Sell Leads</p>
      </div>

      <div className="absolute bottom-[10%] left-[15%] h-[50px] w-[50px] flex justify-center items-center">
        <Image src="/icons/down.svg" alt="" height={50} width={50} />
      </div>

      <div className="h-[80px] w-[1000px] absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center items-center">
        <Image src="/images/herobottom.svg" alt="" height={80} width={1000} />
      </div>
    </div>
  );
};

export default HeroSection;
