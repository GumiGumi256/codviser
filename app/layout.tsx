import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ToastContainer } from 'react-toastify';



export const metadata: Metadata = {
  title: 'Codviser, Bringing ideas to life',
  description: 'Turn your idea into the next big thing with us',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-bg-img-1'>
      <ToastContainer />
        <Navbar />
      {children}
      <Footer />
      </body>
    </html>
  )
}
