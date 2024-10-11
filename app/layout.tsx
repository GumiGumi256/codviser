import type { Metadata } from 'next'
import { Darker_Grotesque } from "next/font/google";
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify';
import { GoogleTagManager } from '@next/third-parties/google'


export const metadata: Metadata = {
  title: 'Codviser - Expert Web and Mobile App Development',
  description: 'Codviser is Uganda’s leading web and mobile app development company, delivering secure and scalable digital solutions. We help businesses across Africa transform their digital presence with custom websites and mobile apps. Partner with us to turn your ideas into reality and grow your business online.',
openGraph: {
    title: 'Codviser - Expert Web and Mobile App Development',
  description: 'Codviser is Uganda’s leading web and mobile app development company, delivering secure and scalable digital solutions. We help businesses across Africa transform their digital presence with custom websites and mobile apps. Partner with us to turn your ideas into reality and grow your business online.',
  },
}

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
