import CourseCard from "../../components/CourseCard";
import { Courses } from "@/app/data/courses";
import Link from "next/link";

const Page = () => {
  return (
      <div className="flex flex-col justify-center items-center text-center p-5">
        <div>
          <ul className="flex space-x-7 text-lg max-sm:flex-col max-sm:space-x-0 max-sm:space-y-2">
          <Link href="/courses/software-dev" className="hover:underline">Software Development</Link>
            <Link href="/courses/web-dev" className="hover:underline bg-mtavari rounded-lg text-white px-2">Web Development</Link>
            <Link href="/courses/linux-adm" className="hover:underline">Linux Administration</Link>
            <Link href="/courses/mobile-dev" className="hover:underline">Mobile Development</Link>
          </ul>
        </div>
        <div className="flex flex-wrap justify-center items-center p-6">
          {Courses.filter((course) => course.courseCategory === "Web-Development").map((course) => (
            <CourseCard course={course} key={course.id} /> // Make sure to add a unique key
          ))}
        </div>
      </div>
  );
};

export default Page;
