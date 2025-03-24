import Image from "next/image"

const DataEfficiency = () => {
  return (
    <div className='mt-3 md:mt-20 flex  justify-center items-center  border-2'>
      <div className="h-[80vh] w-[80vw] relative">
        <Image src="/images/dataefficiency.svg" alt="" fill/>
      </div>
    </div>
  )
}

export default DataEfficiency
