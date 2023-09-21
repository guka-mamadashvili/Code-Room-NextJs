import { Button } from "@/components/ui/button"
import Image from "next/image"


const CourseCard = ({course}) => {
  return (
    <div className='w-[300px]  h-[350px] rounded-xl flex flex-col space-y-4 justify-center items-center text-center text-white bg-mtavari py-10 m-5'>
        <Image src={course.courseImg} width="100" height="100" />
        <h1 className="text-2xl font-bold">{course.courseName}</h1>
        <p className="text-lg max-w-[200px]">{course.info}</p>
        <Button className="bg-mtavari border-2 border-white font-semibold hover:bg-white hover:text-mtavari text-lg">Enroll</Button>
    </div>
  )
}

export default CourseCard