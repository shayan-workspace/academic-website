import React from "react";
import { Galada } from "next/font/google";

const galada = Galada({ subsets: ["latin"], weight: ["400"] });

const ServiceSection = () => {
  return (
    <div className=" bg-emerald-700 h-[100vh] w-[100%] flex justify-center items-center">
      <div className="border w-[90%] h-[90%] flex justify-center items-center flex-col gap-5">
        <span className="text-xl text-center text-white">{data.title}</span>
        <span
          style={galada.style}
          className="w-[60%] text-center italic font-bold text-6xl text-amber-500">
          {data.head}
        </span>
        <span className="border w-[90%]">
            {data.serviecs.map((val,i)=>(
                <div key={i}>

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
