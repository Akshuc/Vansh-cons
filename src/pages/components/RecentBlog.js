'use client';

import React,{useRef,useCallback,useState,useEffect} from 'react'
import Link from 'next/link';
import Image from 'next/image';

import {BiChevronRight,BiChevronLeft} from 'react-icons/bi';
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'

const blogContent = {
    heading : {
        headingSubTitle : "Our Supplies",
        headingTitle : "What we supply",
        description : "we go beyond just providing construction services – we offer a comprehensive supply solution for all the basic materials required to bring your construction projects to fruition. Our commitment to excellence extends to sourcing and delivering top-quality materials that meet the highest industry standards.From concrete and steel to electrical components and finishing materials, we have you covered at every stage of your project. Our carefully curated selection ensures that each material contributes to the overall quality and durability of your construction.",
    },
    recentProd : [
        {
            permalink : "#_",
            featuredImg : "/images/bricks.webp",
            title:"Essential supplies from vansh co",
            expert:"Fly Ash Bricks",

        },
        {
            permalink : "#_",
            featuredImg : "/images/proda.jpg",
            title:"Essential supplies from vansh co",
            expert:"Agreegates",

        },
        {
            permalink : "#_",
            featuredImg : "/images/prod2.jpg",
            title:"Essential supplies from vansh co",
            expert:"Sand",
            
        },
        {
            permalink : "#_",
            featuredImg : "/images/prod3.jpg",
            title:"Essential supplies from vansh co",
            expert:"Iron-Rods",
            
        },
        {
            permalink : "#_",
            featuredImg : "/images/prod4.jpg",
            title:"Essential supplies from vansh co",
            expert:"Red Bricks",
            
        },
        {
            permalink : "#_",
            featuredImg : "/images/cement0.webp",
            title:"Essential supplies from vansh co",
            expert:"Cement",

        },
    ]
}

const RecentBlog = () => {
    const [slideIndex,setSlideIndex] = useState(0);
    const[isEnd,setIsEnd] = useState(null);
    const [isBeginning,setIsBeginning] = useState(null);
    const sliderRef = useRef(null);

    useState(()=>{
        setIsEnd(sliderRef.current?.swiper.isEnd);
        setIsBeginning(sliderRef.current?.swiper.isBeginning);
    })

    const prevHandler = useCallback(()=>{
        if(!sliderRef.current) return;
        sliderRef.current?.swiper.slidePrev();
    })

    const nextHandler = useCallback(()=>{
        if(!sliderRef.current) return;
        sliderRef.current?.swiper.slideNext();
    })

  return (
    <section className='py-20 bg-light overflow-x-hidden'>
        <div className='container px-4 mx-auto'>
            <div className='lg:flex justify-between items-center mb-10'>
                <div className='lg:w-5/12 mb-10 lg:mb-0'>
                    {blogContent.heading.headingSubTitle && (
                        <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 z-50 before:content-[''] before:absolute before:w-2/3  before:left-0 before:top-0 before:bottom-0 before-z-10">
                            {blogContent.heading.headingSubTitle}
                        </span>
                    )}

                    {blogContent.heading.headingTitle && (
                        <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
                            {blogContent.heading.headingTitle}
                        </h2>
                    )}

                    {blogContent.heading.description && (
                        <p className='text-body leading-relaxed mb-10'>
                            {blogContent.heading.description}
                        </p>
                    )}
                </div>
                <div className='lg:w-5/12 text-left lg:text-right'>
                    <div className='inline-flex ml-auto space-x-3'>
                        <div onClick={prevHandler} className={`${isBeginning == true ? "opacity-30 bg-[#E1E7EA] cursor-auto" : "opacity-100 hover:bg-primary"}  group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}>
                            <BiChevronLeft className='text-3xl text-primary transition-all duration-300 ease-in-out group-hover:text-white ${isBegining == true ? "group-hover : !text-primary" : "group-hover:text-white"}'/>
                        </div>
                        <div onClick={nextHandler} className={`${isEnd == true ? "opacity-30 bg-[#E1E7EA] cursor-auto" : "opacity-100 hover:bg-primary"}  group transition-all duration-300 ease-in-out w-12 h-12 cursor-pointer bg-[#E1E7EA] rounded-full inline-flex justify-center items-center`}>
                            <BiChevronRight className='text-3xl text-primary transition-all duration-300 ease-in-out group-hover : text-white ${isBegining == true ? "group-hover : !text-primary" : "group-hover:text-white"}'/>
                        </div>
                    </div>                            
                </div>
            </div>

            <Swiper breakpoints={{
                640 : {
                    width : 640,
                    slidesPerView : 1,
                    },
                    768 : {
                    width : 768,
                    slidesPerView : 2,
                    },
                    968 : {
                    width : 968,
                    slidesPerView : 2,
                    },
                    
            }} 
            ref={sliderRef}
            speed={700}
            
            onSlideChange={(swiper)=>setSlideIndex(swiper.activeIndex)}
            className="z-50 py-32 mb-24 relative flex items-stretch !overflow-visible before:content-[''] before:z-50 before:py-32 before:right-full before:w-screen before:absolute before:-top-5 before:-bottom-5 before:bg-light"
            >
                {blogContent.recentProd.map((blog,idx)=>(
                    <SwiperSlide key={blog.title} className='overflow-visible h-full mx-3'>
                        <div className='bg-white rounded-lg shadow-lg p-5 relative mt-10'>
                            
                                <Image src={blog.featuredImg} alt="blog1" width={782} height={467}/>
                            
                            <h2 className='text-heading text-lg font-bold leading-7 mb-5'>
                            <Link href={blog.permalink} className='relative text-heading'>
                                {blog.title}
                            </Link>
                            </h2>
                            <p className='relative mb-6'>{blog.expert}</p>
                        
                                {/* <div className='flex-shrink-0 '>
                                    <Image src={blog.author} width={50} height={50} alt='any' className='rounded-full object-cover w-14 h-14' />
                                </div> */}
                                {/* <div className='leading-5'>
                                    <strong className='block text-heading'>{blog.author.name}</strong>
                                    <span className='block text-sm'>{blog.author.designation}</span>
                                </div> */}
                            
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </div>

    </section>
  )
}

export default RecentBlog

