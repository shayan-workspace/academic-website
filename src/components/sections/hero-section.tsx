import Image from "next/image";
import { Galada } from "next/font/google";
import { Button } from "@/components/ui/button";
import { images } from "@/assets";

const galada = Galada({ subsets: ["latin"], weight: ["400"] });

export default function HeroSection() {
  return (
    <section className="px-12 bg-orange-50 grid place-items-center">
      <div className="py-12 h-[calc(100vh_-_6rem)] max-w-screen-lg mx-auto flex gap-12">
        <div className="justify-center w-1/2 flex flex-col gap-4">
          <h2 className="flex flex-col gap-4 uppercase">
            <span className="font-bold text-xl text-amber-500">
              Everything is Possible
            </span>
            <span
              style={galada.style}
              className="italic font-bold text-7xl text-green-700"
            >
              If with Allah
            </span>
          </h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nobis
            odit suscipit error. Earum dicta impedit aspernatur ipsum amet,
            officiis, ab excepturi iste voluptatibus delectus voluptates,
            commodi corporis recusandae hic.
          </p>
          <Button className="w-fit rounded-full bg-amber-500 hover:bg-amber-500/85">
            Discover More
          </Button>
        </div>
        <div className="w-1/2 relative grid grid-cols-2 gap-4">
          <div className="row-span-2 rounded-3xl rounded-br-[7rem] overflow-hidden">
            <Image
              className="h-full w-full object-cover object-center"
              src={images.heroFull}
              alt="hero"
            />
          </div>
          <div className="rounded-3xl overflow-hidden">
            <Image
              className="h-full w-full object-cover object-center"
              src={images.heroHalf2}
              alt="hero"
            />
          </div>
          <div className="rounded-3xl overflow-hidden rounded-bl-[7rem]">
            <Image
              className="h-full w-full object-cover object-center"
              src={images.heroHalf1}
              alt="hero"
            />
          </div>
          {/* <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full overflow-hidden flex justify-center items-center h-32 w-32 bg-yellow-500">
            <Image
              className="object-cover object-center animate-spin-slow"
              src={images.logo}
              alt="logo"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
}
