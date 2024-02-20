import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {

  
  return (
    <footer className="flexCenter mb-24 font-sans">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="codviser-logo.svg" alt="logo" width={100} height={100}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title} key={columns.title}>
                <ul className="regular-20 flex flex-col gap-4 text-gray-50">
                  {columns.links.map((link) => (
                  <li>
                     <Link href={link.href}>
                    <div key={link.key} className=' hover:text-green-50'>
                      {link.link}
                    </div>
                   </Link>
                  </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <div
                    
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="whitespace-nowrap text-gray-50 hover:text-green-50">
                      {link.label}:
                    </p>
                    <p className="regular-20 whitespace-nowrap text-gray-50 hover:text-green-50">
                      {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-24 flex gap-4 text-gray-50">
                  {SOCIALS.links.map((link) => (
                    <li>
                      <Link href="/" key={link}>
                      <Image src={link} alt=" social media logo" width={24} height={24} className='text-green-50' />
                    </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-20 w-full text-center text-gray-50">{new Date().getFullYear()} <span className='text-green-50'>Codviser</span> | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h3 className="bold-18 whitespace-nowrap text-green-50">{title}</h3>
      {children}
    </div>
  )
}

export default Footer