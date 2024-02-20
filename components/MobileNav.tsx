import {
    Sheet,
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
  

const MobileNav = () => {
  return (
    <Sheet>
  <SheetTrigger> <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
        
        /></SheetTrigger>
  <SheetContent className="bg-green-10 text-white">
    <SheetHeader>
      <SheetTitle className="bold-16 text-white">Menu</SheetTitle>
      {/* <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription> */}
    </SheetHeader>
    <div className="">
          <ul className="h-full gap-5 flex flex-col p-5">
          {NAV_LINKS.map((link) => (
           <li  className="regular-24 lg:text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 hover:border-b-[2px] hover:border-green-50">
             <Link
              href={link.href}
              key={link.key}
             
            
            >
              {link.label}
            </Link>
           </li>
          ))}
        </ul>
        <div className="flex justify-center items-center">
           <Link href="/contact-us">
          <Button
            type="button"
            title="Get in Touch"
            variant="btn_white"
          />
          </Link>
        </div>
        </div>
  </SheetContent>
</Sheet>

  )
}

export default MobileNav