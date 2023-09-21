import Link from "next/link"

const Header = () => {
  return (
    <header className='flex flex-col justify-center items-center text-center'>
        <ul className="text-2xl space-x-5 flex max-sm:space-x-2 max-sm:text-lg">
            <div className="py-4 px-4 sm:w-[150px] max-sm:px-1 hover:bg-mtavari hover:text-white hover:cursor-pointer"><Link href="/">Home</Link></div>
            <div className="py-4 px-4 sm:w-[150px] max-sm:px-1 hover:bg-mtavari hover:text-white hover:cursor-pointer"><Link href="/courses  ">Courses</Link></div>
            <div className="py-4 px-4 sm:w-[150px] max-sm:px-1 hover:bg-mtavari hover:text-white hover:cursor-pointer"><Link href="/">About</Link></div>
            <div className="py-4 px-4 sm:w-[150px] max-sm:px-1 hover:bg-mtavari hover:text-white hover:cursor-pointer"><Link href="/">Contact</Link></div>
        </ul>
        <div className="w-[70%] h-[1px] bg-black">

        </div>
    </header>           
  )
}

export default Header