"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import { Header } from 'app/components/Header'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('Hola mundo layout')
  
  return (
    <html lang="en">
      <header />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
