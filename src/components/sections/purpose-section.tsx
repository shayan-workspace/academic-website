import React from "react";
import Link from "next/link";
import { MdCalendarMonth, MdMosque, MdVolunteerActivism } from "react-icons/md";

export default function Purpose() {
  return (
    <section className="py-20 w-full bg-white  flex justify-center items-center">
      <div className="h-[90%] w-[90%] flex flex-col justify-center items-center gap-5">
        <span className="text-4xl font-bold text-emerald-700">OUR PURPOSE</span>
        <span className="w-[50%] text-xl text-center  ">
          (name) is a non-profit 501(c)(3), tax-exempt, religious organization.
          Its purpose is to promote Islamic teachings, understanding, and unity
          among all Muslims in the greater Sacramento area. The emergence of an
          American-Muslim identity is its prime goal. SALAM prides itself on
          being a multi-ethnic organization and shall strive to maintain it.
        </span>
        <div className="w-full py-10 flex gap-4 items-center justify-center flex-wrap">
          {data.map((val, i) => (
            <div
              className=" rounded-lg flex flex-col items-start gap-5 w-[370px] min-h-[300px] p-8 bg-stone-50"
              key={i}
            >
              <span className="text-amber-600">{val.icon}</span>
              <span className="text-3xl font-semibold">{val.name}</span>
              <span className="text-lg">{val.desc}</span>
              <Link
                className="border rounded-full p-3 px-8 text-white text-lg font-normal bg-emerald-700 duration-500 hover:scale-105"
                href={val.url}
              >
                {val.btn}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
const data = [
  {
    icon: <MdMosque className="text-5xl" />,
    name: "Prayer Services",
    desc: "Open for daily prayers and Jumuah",
    btn: "Prayer Times",
    url: "/",
  },
  {
    icon: <MdCalendarMonth className="text-5xl" />,
    name: "Upcoming Events",
    desc: "Stay up-to-date with current events",
    btn: "Latest Events",
    url: "/",
  },
  {
    icon: <MdVolunteerActivism className="text-5xl" />,
    name: "Support",
    desc: "Help maintain Allah’s House",
    btn: "Donate",
    url: "/",
  },
];
