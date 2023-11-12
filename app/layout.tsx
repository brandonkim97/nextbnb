import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })

import { Nunito } from 'next/font/google';
import ClientOnly from './components/ClientOnly'
import RegisterModal from './components/modals/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modals/LoginModal'
import getCurrentUser from './actions/getCurrentUser'
import RentModal from './components/modals/RentModal'
import SearchModal from './components/modals/searchModal'
import Footer from './components/footer/Footer'

export const dynamic = 'force-dynamic'

const font = Nunito({
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Nextbnb',
  description: 'Nextbnb website',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${font.className} flex flex-col h-screen`}>
        <ClientOnly>
          <ToasterProvider />
          <SearchModal />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-36 flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
