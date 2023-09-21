import Image from "next/image"
import DeveloperCard from "./components/DeveloperCard"
import { Bebas_Neue } from "next/font/google"

// developers
import { Developers } from "./data/developers"

const bebas = Bebas_Neue({ weight: '400', subsets: ['latin'] })

const page = () => {
  return (
    <>
    <div className='flex justify-center items-center  space-x-6 p-10 border-b-[1px] border-black max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:text-center'>
      <h1 className={bebas.className}><span className="font-bold text-6xl">START CODING <br /> <span className='text-mtavari'>RIGHT NOW.</span></span></h1>
      <Image src="/page/avatar.svg" width="400" height="400" /> 
    </div>
    <div className="flex flex-col justify-center text-center items-center p-10 space-y-6">
      <h1 className="text-3xl font-semibold">Our Top Developers</h1>
      <div className="flex space-x-6 max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:space-x-0 max-sm:space-y-6">
        {Developers.map((developer) => (
          <DeveloperCard developer={developer}/>
        ))}
      </div>
    </div> 
    </>
  )
}

export default page