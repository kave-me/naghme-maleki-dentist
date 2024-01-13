import type {Metadata} from 'next'
import {Vazirmatn} from 'next/font/google'
import './globals.css'
import {Navbar} from '@/app/components/navbar';
import {Footer} from '@/app/components/footer';

const vazir = Vazirmatn({subsets:['latin']})

export const metadata: Metadata = {
    title: 'دکتر نغمه مالکی',
    description: 'خدمات تخصصی دندانپزکشی دکتر نغمه مالکی',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
      <html lang="en">
      <body className={vazir.className}>
      <Navbar/>
      {children}
      <Footer/>
      </body>
      </html>
    )
}
