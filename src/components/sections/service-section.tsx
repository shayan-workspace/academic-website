import React from "react";
import { Galada } from "next/font/google";
import Link from "../../../node_modules/next/link";

const galada = Galada({ subsets: ["latin"], weight: ["400"] });

const ServiceSection = () => {
  return (
    <div className=" py-20 bg-emerald-700  w-[100%] flex justify-center items-center">
      <div className=" w-[90%] h-[90%] flex justify-center items-center flex-col gap-5">
        <span className="text-xl text-center text-white">{data.title}</span>
        <span
          style={galada.style}
          className="w-[60%] text-center italic font-bold text-6xl text-amber-500">
          {data.head}
        </span>
        <span className=" w-[90%] flex flex-wrap justify-center items-center gap-5 ">
          {data.serviecs.map((val, i) => (
            <div
              key={i}
              className="rounded-lg flex flex-col items-start gap-5 w-[370px] min-h-[300px] p-8 bg-yellow-50">
              <span className="text-amber-600">{val.icon}</span>
              <span className="text-3xl font-semibold">{val.name}</span>
              <span className="text-lg">{val.txt}</span>
              <Link
                className="border rounded-full p-3 px-8 text-white text-lg font-normal bg-emerald-700 duration-500 hover:scale-105"
                href={val.url}>
                {val.btn}
              </Link>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

const data = {
  title: "Our Services",
  head: "We Are Providing Effective Arabic & Quran Services.",
  serviecs: [
    {
      icon: "",
      name: "Online Quran Class",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis odit suscipit error.",
      btn: "Read More",
      url: "/contact",
    },
    {
      icon: "",
      name: "Value Our Student",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis odit suscipit error.",
      btn: "Read More",
      url: "/contact",
    },
    {
      icon: "",
      name: "Special Child Care",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis odit suscipit error.",
      btn: "Read More",
      url: "/contact",
    },
    {
      icon: "",
      name: "Help Poor",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis odit suscipit error.",
      btn: "Read More",
      url: "/contact",
    },
    {
      icon: "",
      name: "Tafseer Course",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis odit suscipit error.",
      btn: "Read More",
      url: "/contact",
    },
    {
      icon: "Quick Learning",
      name: "",
      txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis odit suscipit error.",
      btn: "Read More",
      url: "/contact",
    },
  ],
};
export default ServiceSection;
