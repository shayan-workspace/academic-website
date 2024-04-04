import React from "react";
import { images } from "@/assets";
import Image from "next/image";
import { Galada } from "next/font/google";


 const galada = Galada({ subsets: ["latin"], weight: ["400"] });


const PillarsSection = () => {
 
  return (
    <div
      className="py-20 w-full flex 
    justify-center items-center relative">
      <Image
        src={images.pillars}
        className="h-[100%] w-[100%] absolute object-cover object-center  "
      />
      <div className="w-[90%] h-[90%] z-10 flex justify-center items-center flex-col gap-5">
        <span className="text-xl text-center text-white">{data.name}</span>
        <span
          style={galada.style}
          className="italic font-bold text-6xl text-amber-500">
          {data.txt}
        </span>
        <span className=" w-[90%] flex justify-center items-center flex-wrap gap-10 py-4">
          {data.pillars.map((val, index) => (
            <div
              key={index}
              className="border border-amber-500 
              rounded bg-zinc-800 
              flex justify-center items-center flex-col gap-3 w-[200px] h-[250px]">
              <span className="bg-emerald-700 rounded-full p-4 text-2xl text-white font-normal">{val.no}</span>
              <span className="text-white text-3xl font-bold ">{val.name}</span>
              <span className="text-white text-lg">{val.txt}</span>
            </div>
          ))}
        </span>
      </div>
    </div>
  );
};

const data = {
  name: "Pillars Of Islam",
  txt: "Five Pillars Of Islam",
  pillars: [
    {
      no: "01/",
      name: "SHADAH",
      txt: "Faith",
    },
    {
      no: "02/",
      name: "SALAH",
      txt: "Prayer",
    },
    {
      no: "03/",
      name: "SAWM",
      txt: "Fasting",
    },
    {
      no: "04/",
      name: "ZAKAT",
      txt: "Almsgiving",
    },
    {
      no: "05/",
      name: "HAJJ",
      txt: "Pilgrimage",
    },
  ],
};

export default PillarsSection;
