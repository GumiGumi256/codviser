import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import { HoverBorderGradient } from "./ui/hover-border-gradient"
import { ArrowRightCircleIcon } from "@heroicons/react/20/solid"
  

const MobileNav = () => {
  return (
    <Sheet>
  <SheetTrigger aria-label="menu button"> <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden border-none"
        
        /></SheetTrigger>
  <SheetContent className="bg-green-10/10 backdrop-blur-md text-gray-50">
   
    <div className="">
          <ul className="h-full gap-5 flex flex-col max-w-fit p-5">
          {NAV_LINKS.map((link) => (
         

          <li  key={link.key} className="regular-24 lg:text-gray-50  cursor-pointer pb-1.5 transition-all hover:text-green-50 hover:border-b-[2px] hover:border-green-50">
             <Link
              href={link.href}
            >
            <SheetClose >
              {link.label}
          </SheetClose>
            </Link>
           </li>
          ))}
        </ul>
        

           <Link href="/contact-us">
           <SheetClose>
        <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" bg-green-90 text-lg flex items-center gap-2 text-gray-50 px-8 py-3 font-bold"
      >
        Get In Touch <ArrowRightCircleIcon className="w-5" />
      </HoverBorderGradient>
        
          </SheetClose>
          </Link>
      
        </div>
  </SheetContent>
</Sheet>

  )
}

export default MobileNav