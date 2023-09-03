'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BiChevronLeft, BiChevronRight, BiCurrentLocation, BiLocationPlus, BiLogoFacebook } from 'react-icons/bi'
// import {HiLocationMarker} from 'react-icons/h1'
import {HiPhone,HiMiniGlobeAmericas,HiMiniHeart} from 'react-icons/hi2'



const footerContent = {
    about : {
        logo:"/images/logo.jpg",
        description:"Taking Dreams to New Heights, Assisting in Making Reality. With our heritage of craftsmanship, we weave architectural wonders that stand as witnesses to time. Step into a world where imagination and innovation converge"
    },
    footerLinks : [
        
                {
                    href:"https://www.facebook.com/shashank.mod.3?mibextid=ZbWKwL",
                    label:"Facebook",
                    icon:"/images/fb.png"
                    
                },
                {
                    href:"https://wa.me/message/T5NTS26IWQGAE1",
                    label:"Support",
                    icon:"/images/whatsapp.png"
                },
                {
                    href:"https://instagram.com/shashank_mod?utm_source=qr&igshid=ZDc4ODBmNjlmNQ==",
                    label:"",
                    icon:"/images/insta.png"
                }, 
    ],
    contact : {
        heading : "Contact",
        description:"Please feel free to reach out to us with any inquries,questions, or assistance you may need.",
        address:{
            street:"RV2M+4G7, Indore, Madhya Pradesh 453555, India",
            phone:"+91 7247351570",
        }
    },
    copyright:{
        labelOne:"Copyright 2023, Designed with",
        labelTwo:"by Niositsolution.com All rights reserved"
    }
}


const Footer = () => {
  return (
    <footer role='contentinfo' className='py-20 bg-white'>
        <div className='container px-4 mx-auto'>
            <div className='block lg:flex gap-20 mb-10 pb-10'>
                <div className='w-full lg:w-4/12 mb-10 lg:mb-0'>
                    <Link href="/" className='mb-4 inline-block'>
                        <Image src={footerContent.about.logo} alt='logo' width={157} height={30} ></Image>
                    </Link>
                    <p className='leading-relaxed mb-7'>
                        {footerContent.about.description}
                    </p>
                </div>
                <div className='w-full lg:w-4/12 mb-10 lg:mb-0'>
                    <div className='grid grid-cols-2 gap-10'>
                        
                                <ul className='p-0 m-0 flex gap-10'>
                                    {footerContent.footerLinks.map((link,idx)=>(
                                        <li key={link.label} className='mb-3'>
                                            <Link href={link.href} className='group-flex items-center duration-300 transition-all ease-in-out hover:text-primary'>
                                                
                                                <Image src={link.icon} height={40} width={40} alt="fb"></Image>
                                                <span className='left-2 relative duration-300 transition-all ease-in-out opacity-0 group-hover:opacity-100 group-hover:left-3'>
                                                    <BiChevronRight className='text-xl'/>
                                                </span>
                                            </Link>
                                        </li>
))}
                                </ul>
                            
                    
                    </div>
                </div>
                <div className='w-full lg:w-4/12'>
                        <h3 className='font-semibold text-heading mb-5'>
                            {footerContent.contact.heading}
                        </h3>
                        <p className='leading-relaxed mb-7 '>
                            {footerContent.contact.description}
                        </p>
                        <ul>
                            <li className='flex items-start space-x-3 mb-5'>
                            <BiLocationPlus className='text-xl text-primary'/>
                            <span>{footerContent.contact.address.street}</span>
                            </li>

                            <li className='flex items-start space-x-3 mb-5'>
                            <HiPhone className='text-xl text-primary'/>
                            <span>{footerContent.contact.address.phone}</span>
                            </li>
                        </ul>
                </div>
            </div>
            <div className='text-center pt-10 border-t border-gray-200'>
                <p>
                    {footerContent.copyright.labelOne}{" "}
                    <HiMiniHeart className='text-red-600 inline-block'/>
                    {footerContent.copyright.labelTwo}
                </p>
            </div>
        </div>

    </footer>
  )
}

export default Footer

