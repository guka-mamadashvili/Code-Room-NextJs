import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="grid grid-cols-3 bg-mtavari p-3 text-white max-sm:flex max-sm:flex-col">
      <div className="flex flex-col justify-center items-center text-center max-sm:border-b-[1px] max-sm:border-white max-sm:p-4">
        <h1 className="text-xl">USEFUL LINKS</h1>
        <ul className="flex flex-col">
          <Link href="#" className="hover:underline">
            About
          </Link>
          <Link href="/courses" className="hover:underline">
            Courses
          </Link>
          <Link href="#" className="hover:underline">
            Contact
          </Link>
          <Link href="#" className="hover:underline">
            Become a Member
          </Link>
        </ul>
      </div>
      <div className="flex flex-col justify-center items-center text-center space-y-2 max-sm:border-b-[1px] max-sm:border-white max-sm:p-4">
        <h1 className="text-xl">SIGN UP FOR NEWSLETTER</h1>
        <input
          type="email"
          className="w-[300px] h-[35px] rounded-md p-2 text-black"
          placeholder="your.email@company.com"
        />
        <Button className="bg-mtavari border-2 border-white font-semibold hover:bg-white hover:text-mtavari text-lg">
          Sign Up
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center text-center max-sm:p-4">
        <h1 className="text-xl">CONTACT</h1>
        <Link
          href="https://www.google.com/maps/dir/13+Davit+Aghmashenebeli+Ave,+T'bilisi/Tbilisi/data=!4m8!4m7!1m2!1m1!1s0x40440ce076e64517:0x5532c5cea843999a!1m2!1m1!1s0x40440cd7e64f626b:0x61d084ede2576ea3!3e0?sa=X&ved=2ahUKEwiJxubZpryAAxXvbvEDHUJnCgMQ-A96BAgXEAA&ved=2ahUKEwiJxubZpryAAxXvbvEDHUJnCgMQ-A96BAgYEA0"
          className="max-w-[200px] hover:underline"
        >
          2, David Agmashenebeli Alley 13 km Tbilisi, Georgia
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
