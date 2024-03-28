import { images } from "@/assets";
import { Badge } from "@/components/ui/badge";
import { Button } from "../ui/button";

import { Poppins } from "next/font/google";
import { PlayCircleIcon, PlayIcon } from "lucide-react";

const poppins = Poppins({ subsets: ["latin"], weight: ["700"] });

export default function HeroSection() {
  return (
    <section
      style={{ backgroundImage: `url('${images.heroBg.src}')` }}
      className={`h-screen bg-cover bg-center relative before:absolute before:w-full before:h-full before:bg-black/15 flex flex-col justify-center`}
    >
      <article className="px-36 text-white z-10">
        <Badge className="mb-4" variant="secondary">
          Islam, Education, Community
        </Badge>
        <h2 style={poppins.style} className="mb-6 font-medium text-7xl">
          <span className="block">Deepen</span>
          <span className="block">
            <span className="text-orange-700/75">Your</span>{" "}
            <span className="">Faith</span>
          </span>
        </h2>
        <p className="max-w-screen-sm mb-6 text-xl">
          Explore educational programs for all ages. Learn & grow in your faith.
        </p>
      </article>
    </section>
  );
}
