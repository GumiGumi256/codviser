'use client'

import { useState } from "react"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {

   // Define state to track whether the menu is open or closed
   const [isMenuOpen, setIsMenuOpen] = useState(false);

     // Function to toggle the menu's visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/codviser-logo.svg" alt="logo" width={120} height={40} />
      </Link>

        {/* Conditional rendering for the menu icon or close icon  */}
       {isMenuOpen ? (
        <Image
          src="close.svg"
          alt="close"
          width={50}
          height={50}
          className="inline-block cursor-pointer lg:hidden relative -top-10 mr-4"
          onClick={toggleMenu}
        />
      ) : (
        <Image
          src="menu.svg"
          alt="menu"
          width={32}
          height={32}
          className="inline-block cursor-pointer lg:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Conditional rendering based on the `isMenuOpen` state  */}

      {isMenuOpen ? (
        <div className="ml-2 bg-green-10 text-gray-50 w-[50vw] h-[100vh] shadow-sm absolute top-0 right-0 transition ease-in-out delay-150 duration-300">
          <ul className="h-full gap-5 flex flex-col p-5">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-24 lg:text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 hover:border-b-[2px] hover:border-green-50"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </ul>
        </div>
      ) :  <ul className="h-full gap-12 lg:flex hidden">
      {NAV_LINKS.map((link) => (
        <Link
          href={link.href}
          key={link.key}
          className="regular-24 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold hover:text-green-50 hover:border-b-[3px] hover:border-green-50"
         
        >
          {link.label}
        </Link>
      ))}
    </ul>}

     {/* Render the "Get in Touch" button  */}

      {isMenuOpen && (
        <div className="relative top-[80vh] left-[12px] md:left-[-100px]">
           <Link href="/contact-us" onClick={() => setIsMenuOpen(false)}>
          <Button
            type="button"
            title="Get in Touch"
            variant="btn_white"
          />
          </Link>
        </div>
      )}

      <div className="lg:flexCenter hidden">
        <Link href="/contact-us">
        <Button 
          type="button"
          title="Get in Touch"
          variant="btn_white_hover"
        />
        </Link>
      </div>

      
    </nav>
  )
}

export default Navbar