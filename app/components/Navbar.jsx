import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='grid grid-cols-3 p-5 border-b-[1px] border-black max-sm:flex max-sm:justify-between'>
        <div className='flex justify-center items-center text-center space-x-3 max-sm:hidden'>
            <Image src="/page/facebook.svg" width="40" height="40" className='cursor-pointer'/>
            <Image src="/page/insta.svg" width="40" height="40" className='cursor-pointer'/>
            <Image src="/page/github.svg" width="40" height="40" className='cursor-pointer'/>
        </div>
        <div className='flex justify-center items-center text-center'>
           <Link href="/"> <h1 className='text-3xl font-semibold max-sm:text-2xl'>Code<span className='text-mtavari'>Room</span></h1> </Link>
        </div>
        <div className='flex justify-center items-center text-center'>
            <ul className='flex  space-x-4 justify-center items-center text-center'>
                <Link href="#" className='font-semibold hover:underline text-md max-sm:text-sm'>Sign In</Link>
                <Link href="#" className='font-semibold hover:underline text-md max-sm:text-sm'>Sign Up</Link>   
            </ul>
        </div>
    </nav>
  )
}

export default Navbar