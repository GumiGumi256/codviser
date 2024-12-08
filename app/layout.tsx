import type { Metadata } from 'next'
import { Darker_Grotesque } from "next/font/google";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify';
import { GoogleTagManager } from '@next/third-parties/google'
import 'react-phone-number-input/style.css'

export const metadata: Metadata = {
  title: 'Codviser - Custom Web and Mobile App Development in Africa',
  description: 'Codviser is Africa’s trusted partner for custom web and mobile app development. Based in Uganda, we deliver scalable, secure, and innovative digital solutions to transform your business. From e-commerce platforms to enterprise apps, Codviser helps businesses thrive online with tailored solutions.',
  openGraph: {
    title: 'Codviser - Custom Web and Mobile App Development in Africa',
    description: 'Codviser is Africa’s trusted partner for custom web and mobile app development. Based in Uganda, we deliver scalable, secure, and innovative digital solutions to transform your business. From e-commerce platforms to enterprise apps, Codviser helps businesses thrive online with tailored solutions.',
  },
};


export const revalidate = 172800; 

const darkerGrotesque = Darker_Grotesque({subsets:["latin"], weight: ['400','500','600','700','800','900']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="G-WMCCRTV2N2" />
      <body className={`bg-bg-img-1 ${darkerGrotesque.className}`}>
      <ToastContainer />
        <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
