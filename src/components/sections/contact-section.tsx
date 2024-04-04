import React from "react";
import Link from "../../../node_modules/next/link";
import { Galada } from "next/font/google";

const galada = Galada({ subsets: ["latin"], weight: ["400"] });

const ContactSection = () => {
  return (
    <div className="py-20 bg-amber-500 flex justify-center items-center flex-col gap-5">
      <span
        style={galada.style}
        className="w-[70%] italic font-bold text-6xl text-black text-center ">
        Honoured To Serve Thousands Of Muslim Families Worldwide.
      </span>
      <Link
        href={'/contact'}
        className=" rounded-full p-3 px-8 text-white text-lg font-normal bg-emerald-700 duration-500 hover:scale-105">
        Get In Touch
      </Link>
    </div>
  );
};

export default ContactSection;
