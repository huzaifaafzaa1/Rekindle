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
    <div className=" my-3 mt-20 border-2">
        <h1 className="text-center text-4xl font-medium my-5">{title}</h1>
        <div className="my-3 flex justify-center items-center">
            <div className="h-[70px] w-[140px] flex justify-center items-center gap-20">
               {logos.map((item,index)=>(<Image key={index} src={item.logo} alt="logo" height={70} width={140}/>)) }
            </div>
        </div>
    </div>
  )
}

export default TitleWithLogos
