import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { BiCheck } from 'react-icons/bi'

const solutionContent = {
    text:{
        headingSubTitle : 'Our Solutions',
        headingTitle : 'Transforming Visions into Reality: Elevate Your Business with Our Comprehensive Solutions',
        description:'we offer a range of expert solutions tailored to elevate your commercial spaces. From construction to interior design, electrical services to furniture solutions, our dedicated team ensures your vision becomes a reality. With a focus on innovation, quality, and timely delivery, we collaborate closely with you to create functional and inspiring environments that reflect your brand identity. Discover how our comprehensive services can transform your business today.',
        features : [
            {
                title:"Construction Excellence"
            },
            {
                title:'Creative Interior Designs'
            },
            {
                title:"Reliable Electrical Services"
            },
            {
                title:"Tailored Furniture Solutions"
            },
            {
                title:"Innovative Commercial Designs"
            }
        ],
        cta:{
            btn1:{
                href:"components/Contact",
                label:"Get Started"
            },
            
                btn2:{
                    href:"components/Contact",
                    label:"Get Started",
                },

            
        },
    },
    images:{
          img1:"/images/solution1.jpg",
          img2:"/images/solution2.jpg",
          img3:"/images/solution3.jpg",
    },
    experience : {
        year:"25+",
        label:"years of experience",
    }
}

const Solution = () => {
  return (
    <section className='py-32 bg-light overflow-x-hidden'>
        <div className='container px-4 mx-auto'>
            <div className='lg:flex space-x-2 justify-between'>
                <div className="lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:-[''] before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:-top-20 before:bg-white before:-bottom-20">
                    <div className='flex gap-2'>
                        <div className='flex flex-col space-y-2'>
                            <div>
                                <Image src={solutionContent.images.img1} width={626} height={640} className='object-cover h-full w-full rounded-lg' alt='sol1'/>
                            </div>
                            <div className='flex justify-end gap-2'>
                                <div className='w-4/12 flex'>
                                    <div className='ml-auto'>
                                        <div className='bg-greenLight w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]'></div>
                                    </div>

                                </div>

                                <div className='w-6/12'>
                                    <Image src={solutionContent.images.img3} width={600} height={640} className='object-cover h-full w-full rounded-lg' alt="sol3"/>
                                </div>

                            </div>
                        </div>

                        <div className='mt-auto'>
                            <div className='flex flex-col gap-2'>
                                <div>
                                    <div className='bg-purpleLight w-10 h-10 lg:w-20 lg:h-20 rounded-2xl rounded-tr-[200px]'></div>
                                </div>
                                <div>
                                    <Image src={solutionContent.images.img2} width={547} height={573} className='object-cover h-full w-full rounded-lg shadow-2xl' alt="sol3"/>
                                </div>
                                {solutionContent.experience.label && (
                                    <div>
                                        <div className='p-4 lg:p-10 shadow-2xl rounded-lg bg-white w-full leading-5'>
                                            <strong className='block font-bold text-primary text-xl lg:text-5xl'>
                                                {solutionContent.experience.year}
                                            </strong>
                                            <span>{solutionContent.experience.label}</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>
                <div className='lg:w-5/12 relative z-10'>
                    {solutionContent.text.headingSubTitle && (
                    <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 z-50 before:content-[''] before:absolute before:w-2/3  before:left-0 before:top-0 before:bottom-0 before-z-10">
                        {solutionContent.text.headingSubTitle}
                     </span>
                    )}

                    {solutionContent.text.headingTitle && (
                        <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
                            {solutionContent.text.headingTitle}
                        </h2>
                    )}

                    {solutionContent.text.description && (
                        <p className='text-body leading-relaxed mb-10'>
                            {solutionContent.text.description}
                        </p>
                    )}

                    <ul className='grid grid-cols-1 sm:grid-cols-2 w-full gap-4 md:gap-5 mb-10'>
                        {solutionContent.text.features.map((feature,idx)=>(
                            <li className='flex flex-grow items-center space-x-5' key={feature.title}>
                                <span className='w-7 h-7 rounded-full bg-primary flex items-center justify-center'>
                                    <BiCheck className='text-white text-xl'/>
                                </span>
                                <span>{feature.title}</span>
                            </li>
                        ))}
                    </ul>
                    <div className='flex space-x-3'>
                    <Link href="components/Contact" className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:box-shadow-lg inline-block relative hover:-top-1'>{solutionContent.text.cta.btn1.label}</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Solution;

