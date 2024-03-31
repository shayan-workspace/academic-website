import Image from "next/image";
import Link from "next/link";
import { images } from "@/assets";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Events",
    href: "/",
  },
  {
    label: "Blog",
    href: "/",
  },
  {
    label: "Contact",
    href: "/",
  },
];

export default function Navbar() {
  return (
    <nav className="py-12 h-24 max-w-screen-lg mx-auto flex justify-center items-center gap-12">
      <Image height={24} width={24} className="" src={images.logo} alt="logo" />
      <ul className="flex justify-center items-center gap-8">
        {navLinks.map((item) => {
          return (
            <li>
              <Link href={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
