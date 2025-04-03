import Image from "next/image"

const DataEfficiency = () => {
  return (
    <div className='w-[90%] lg:w-[75%]  mx-auto mt-3 md:mt-20 flex  justify-center items-center'>
      <div className="h-[80vh] w-[70vw] relative ">
        <Image src="/images/dataefficiency.svg" alt="" fill/>
      </div>
    </div>
  )
}

export default DataEfficiency
