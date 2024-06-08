import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import MobileNav from "./MobileNav";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/codviser-logo.svg" alt="logo" width={120} height={40} />
      </Link>

      <MobileNav />
      <ul className="h-full gap-12 lg:flex hidden">
        {NAV_LINKS.map((link) => (
        <li  key={link.key} className="regular-24 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 hover:border-b-[3px] hover:border-green-50">
            <Link
            href={link.href}
           
            
          >
            {link.label}
          </Link>
        </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Link href="/contact-us">
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" bg-green-90 text-lg flex items-center gap-2 text-gray-50 px-8 py-3 font-bold"
      >
        Get In Touch <ArrowRightCircleIcon className="w-5" />
      </HoverBorderGradient>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
