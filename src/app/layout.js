import { Inter } from 'next/font/google'
import './globals.css'

import Header from '../app/components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Simple Quiks',
  description: 'The skill challenge that is very closely related to what you will be doing if you become a part of Simpul Technologies team. The challenge we are about to share with you is confidential and should not be shared with anyone else, including third parties, other candidates, or individuals within or outside your network.',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head>
      <link rel="icon" href="../app/assets/sq_logo.png"/>
      </head> */}
      <Header />
      <body className={`background ${inter.className}`}>{children}</body>
      <Footer />
    </html>
  )
}
