import Link from "next/link";
import { images } from "@/assets";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className=" py-20 w-full flex justify-center items-center ">
      <div className=" w-[70%] h-[90%] flex flex-row-reverse flex-wrap justify-center items-center gap-20">
        <div className=" flex flex-col items-start justify-start gap-5 lg:flex-1">
          <span className="text-xl text-center text-amber-600">
            {data.title}
          </span>
          <span className="text-4xl font-bold text-emerald-700">
            {data.head}
          </span>
          <span className="text-m text-start">{data.txt}</span>
          <Link
            href={data.url}
            className=" rounded-full p-3 px-8 text-white text-lg font-normal bg-amber-600 duration-500 hover:scale-105"
          >
            {data.btn}
          </Link>
        </div>
        <div className="  flex justify-center items-center relative">
          <Image
            className=" rounded-b-lg rounded-t-[250px] h-[450px] w-[350px]"
            src={images.about}
            alt="about"
          />
          <span className="absolute bg-emerald-700 text-white text-md p-5 w-[250px] rounded bottom-10 -left-10">
            Since 1999 operating in the World
          </span>
        </div>
      </div>
    </div>
  );
}

const data = {
  title: "About Us",
  head: "Embark on a Journey of Faith and Knowledge",
  txt: "Embark on a profound educational journey with SALAM IQRA’ School, where we pave the path to spiritual growth and academic excellence. Our school is a sanctuary of knowledge where the timeless teachings of the Quran meet the nurturing guidance of our experienced educators. We are dedicated to instilling a love for learning and a deep understanding of Islamic heritage through our immersive Quranic and religious programs. Join us in an enlightening experience that nurtures the mind, inspires the heart, and transforms the soul.",
  btn: "Read More",
  url: "/about",
};
