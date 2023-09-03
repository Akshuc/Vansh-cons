'use client';

import Image from 'next/image'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import logo from '../../../public/images/logo.jpg'


import {HiBars3} from "react-icons/hi2"
import {GrClose} from 'react-icons/gr'
import {BiChevronRight, BiLogoWhatsapp} from 'react-icons/bi'

const NavigationMenu = [
    {
        href:"/",
        label:"Home",
    },

    {
        href:"#",
        label:"About",
    },

    {
        href:"/services",
        label:"Services",
    },

    {
        href:"/Solution",
        label:"Projects",
    },

    {
        href:"/components/Contact",
        label:"Contact",
    },
]

const Navigation = () => {

    const [navOpen,setNavOpen] = useState(false);
    const [dimensions,setDimensions] = useState({
        height:"window.innerHeight",
        width:"window.innerWidth",
    })

    useEffect(()=>{
        function handleResize(){
            setDimensions({
                height: window.innerHeight,
                width : window.innerWidth,
            })
            
            // when the window resize we set the navOpen false
            if(dimensions.width > 768 && navOpen){
                setNavOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);

        return (_) =>{
            window.removeEventListener('resize',handleResize);
        }
    })
    
    const mobileMenuHandler = ()=>{
        setNavOpen(!navOpen);
    }

  return (
    <>
       <header className='py-7'>
        <div className='container px-4 mx-auto'>
            <div className='flex justify-between items-center'>
                {/* Logo */}
                <div style={{border:"2px solid purple", height:"55px", width:"70px", display:"flex",justifyContent:"center", alignItems:"center",borderRadius:"50px"}}>
                    <Link href="/">
                        <Image src={logo} height={50} width={60} style={{borderRadius:"100px"}} alt="logo"/>
                    </Link>
                </div>
                {/* Navigation Menu */}
                <div className='hidden lg:block text-center'>
                   <ul className='flex space-x-7'>
                     {NavigationMenu.map((item,index)=>(
                        <li key={item.label}>
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                     ))
                     }
                   </ul>
                </div>
                {/* CTA */}
                <div>
                    <Link href="https://wa.me/message/T5NTS26IWQGAE1" target='_blank' className='px-5 py-4 bg-primary  text-white rounded-lg hidden lg:inline-block'><BiLogoWhatsapp/></Link>
                    <button className='block lg:hidden' onClick={mobileMenuHandler}>
                       <HiBars3 className='text-3xl'/>
                    </button>
                </div>

            </div>
        </div>
       </header>

       {/* for mobile/tab devices nav menu */}
       <div className={navOpen ? "py-0 block fixed w-screen x-[9999]":"py-0 hidden fixed w-screen x-[9999]"}>
        <div className="h-screen w-screen z-[999] top-0 fixed bg-white bg-opacity-50" onClick={mobileMenuHandler}>
            <div className='bg-white w-[300px] top-0 right-0 z-[999] h-screen fixed'>
                <div className='h-14 px-10 border-b flex items-center'>
                   <button className='flex items-center space-x-3' onClick={mobileMenuHandler}>
                    <GrClose/>
                    <span>Close</span>
                   </button>
                </div>
                <div className='h-full py-3 px-10 pb-20 overflow-y-scroll scroll-smooth'>
                     <ul className='block mb-7'>
                          {NavigationMenu.map((item,index)=>(
                            <li key={item.label}>
                               <Link href={item.href} className='group flex items-center py-2 duration-300 transition-all text-black ease-in-out hover:text-primary'>
                                <span>{item.label}</span>
                                <span className='left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3'>
                                    <BiChevronRight className="text-xl"/>
                                </span>
                                </Link>
                            </li>
                          ))}
                     </ul>
                </div>
            </div>

        </div>
       </div>
    </>
  )
}

export default Navigation