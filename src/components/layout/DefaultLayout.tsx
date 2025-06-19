import React from 'react'
import Footer from '../footer/Footer';
import NavBar from '../navbar/Navbar';

export default function DefaultLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
  return (
    <div className="w-full items-center min-h-[50vh]">
        <NavBar/>
        <div className='flex-col justify-center max-w-7xl mx-auto sm:px-6 px-4 lg:px-8 py-4'>
            {children}
        </div>
        <Footer/>
    </div>
  )
}