import Image from "next/image";

interface TitleWithLogosProps{
    title:string;
}

const logos=[
    {logo:"/logos/coral.svg"},
    {logo:"/logos/elpais.svg"},
    {logo:"/logos/openweb.svg"},
    {logo:"/logos/lemonde.svg"},
    {logo:"/logos/reddit.svg"},
]

const TitleWithLogos: React.FC<TitleWithLogosProps> = ({title}) => {
  return (
    <div className="mx-auto w-[90%] lg:w-[75%] my-3 mt-3 md:mt-20 ">
        <h1 className="text-center text-4xl font-medium my-5">{title}</h1>
        <div className="my-3 flex justify-center items-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 place-items-center">
            {logos.map((item, index) => (
            <Image key={index} src={item.logo} alt="logo" height={70} width={140} />
            ))}
          </div>

        </div>
    </div>
  )
}

export default TitleWithLogos
