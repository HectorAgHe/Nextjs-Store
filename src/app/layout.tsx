
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Header } from 'app/components/shared/Header'
import { Footer } from 'app/components/shared/Footer'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('Hola mundo layout')
  
  return (
    <html lang="en">
       <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
