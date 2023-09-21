import Image from "next/image"
import { Button } from "@/components/ui/button"

const DeveloperCard = ({developer}) => {
  return (
    <div className='grid grid-rows-2 w-[300px] p-6 bg-mtavari rounded-xl'>
        <div className='border-b-[1px] border-white flex justify-center items-center p-6'>
            <Image src={developer.imgUrl} width="120" height="120" className="bg-white rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center text-center p-6 text-white space-y-4">
            <h1 className="text-xl font-bold">{developer.fname}</h1>
            <p>{developer.description}</p>
            <Button className="bg-mtavari border-2 border-white font-semibold hover:bg-white hover:text-mtavari text-md rounded-xl">Learn More</Button>
        </div>
    </div>
  )
}

export default DeveloperCard