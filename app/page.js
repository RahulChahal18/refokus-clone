"use client"
import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'; 


const page = () => {
  useEffect(() => {
    // Check if window is defined before instantiating LocomotiveScroll
    if (typeof window !== 'undefined') {
      const locomotiveScroll = new LocomotiveScroll();
      //return () => {
        //locomotiveScroll.destroy(); // Clean up on component unmount
      //};
    }
  }, []); // Empty dependency array to ensure it only runs once after component mounts

  return (
    // h-screen
    <div className=' w-full text-white  bg-zinc-900 font-["satoshi"]'>
      <Navbar></Navbar>
      <Work />
      <Stripes /> 
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default page
