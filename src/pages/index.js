import Image from 'next/image'
import { Inter } from 'next/font/google'

import Navbar from '../pages/ui/Navigation'
import Footer from '../pages/ui/Footer'

import Hero from "../pages/components/Hero";
import RecentBlog from '../pages/components/RecentBlog'
import Contact from '../pages/components/Contact';
import Services from "../pages/components/Services";
import Solution from "../pages/components/Solution";
import Stats from "../pages/components/Stats";
import Testimonial from "../pages/components/Testimonial";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Stats/>
    <Services/>
    <Solution/>
    <Testimonial/>
    <RecentBlog/>
    <Contact/>
    <Footer/>
     </>
  )
}
