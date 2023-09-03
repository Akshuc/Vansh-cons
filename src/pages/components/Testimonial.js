import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const testimonialContent = {
    heading: {
        headingSubTitle: "Our Recent Projects",
        headingTitle: "We work on a single project at a time for putting our full effort and dedication.",
        description: "we take immense pride in our portfolio of successfully completed projects. With our commitment to quality craftsmanship and attention to detail, we have brought basic building layouts to life, one project at a time.",

        cta: {
            cta_href: "components/Contact",
            cta_labels: "Get Started"
        }
    },
    testimonials: [
        {
            img: "/images/untitled1.jpg",
            name: "jane copper",
            titleRole: "Customer - Dallas, Tx",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita magni blanditiis dolores amet recusandae corporis in repellendus nemo dolor."
        },
        {
            img: "/images/untitled2.jpg",
            name: "jane copper",
            titleRole: "Customer - Dallas, Tx",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita magni blanditiis dolores amet recusandae corporis in repellendus nemo dolor."
        },
        {
            img: "/images/untitled3.jpg",
            name: "jane copper",
            titleRole: "Customer - Dallas, Tx",
            testimony: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus expedita magni blanditiis dolores amet recusandae corporis in repellendus nemo dolor."
        },
    ]
}

const Testimonial = () => {
    return (
        <section className='py-20 bg-light'>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex justify-between items-center'>
                    <div className='lg:w-4/12 lg:pr-24 mb-10 lg:mb-0'>
                        {testimonialContent.heading.headingSubTitle && (
                            <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 z-50 before:content-[''] before:absolute before:w-2/3  before:left-0 before:top-0 before:bottom-0 before-z-10">
                                {testimonialContent.heading.headingSubTitle}
                            </span>
                        )}

                        {
                            testimonialContent.heading.headingTitle && (
                                <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>
                                    {testimonialContent.heading.headingTitle}
                                </h2>
                            )
                        }

                        {testimonialContent.heading.description && (
                            <p className='text-body leading-relaxed mb-10'>
                                {testimonialContent.heading.description}
                            </p>
                        )}

                        {testimonialContent.heading.cta.cta_labels && (
                            <p>
                                <Link href="components/Contact" className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:box-shadow-lg inline-block relative hover:-top-1'>{testimonialContent.heading.cta.cta_labels}</Link>
                            </p>
                        )}
                    </div>
                    <div className='lg:w-8/12'>
                        <div className='md:flex w-full space-x-0 md:space-x-6 items-end'>
                            <div className='md:w-6/12 mb-6 md:mb-0'>
                                {testimonialContent.testimonials.map((testimonial, idx) => {
                                    if(idx==2) return null;
                                    return(
                                    <div className={`bg-white p-7 rounded-lg w-full ${idx == 1 ? "" : "mb-6"}`} key={testimonial.label}>
                                        <div className='flex space-x-4 items-center mb-4'>
                                            <div className='releative'>
                                                <Image src={testimonial.img} alt="client1" width={300} height={100} className='object-cover rounded-lg h-[300px] w-[500px]' />
                                                {/* <span className='absolute bottom-0-right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                                    <Image src={"/images/quote.svg"} alt="nnnn" width={14} height={9} />
                                                </span> */}
                                            </div>
                                            {/* <div className='leading-3'>
                                                {testimonial.name && (
                                                    <strong className='block text-heading text-lg'>
                                                        {testimonial.name}
                                                    </strong>
                                                )}
                                                {
                                                    testimonial.titleRole && (
                                                        <span className='text-sm'>
                                                            {testimonial.titleRole}
                                                        </span>
                                                    )
                                                }
                                            </div> */}
                                        </div>

                                        {/* <div>
                                            <blockquote>
                                                "{testimonial.testimony}"
                                            </blockquote>
                                        </div> */}

                                    </div>
)})}
                            </div>
                            <div className='md:w-6/12'>
                                <div>
                                    <div className='w-16 h-16 hidden md:block bg-greenLight rounded-full mb-6'></div>

                                    <div className='bg-white p-7 rounded-lg w-full mb-6'>
                                        <div className='flex space-x-4 items-center mb-4'>
                                            <div className='relative '>
                                                <Image src={testimonialContent.testimonials[2].img} width={300} height={100} className='object-cover h-[300px] w-[500px] rounded-lg' alt="img"/>
                                                {/* <span className='absolute bottom-0-right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center'>
                                                    <Image src={"/images/quote.svg"} alt="nnnn" width={14} height={9} />
                                                </span> */}
                                            </div>
                                            {/* <div className='leading-3'>
                                                {testimonialContent.testimonials[2].name && (
                                                    <strong className='block text-heading text-lg'>
                                                        {testimonialContent.testimonials[2].name}
                                                    </strong>
                                                )}
                                                {
                                                testimonialContent.testimonials[2].titleRole && (
                                                        <span className='text-sm'>
                                                            {testimonialContent.testimonials[2].titleRole}
                                                        </span>
                                                    )
                                                }
                                            </div> */}
                                        </div>
                                        {/* <div>
                                            <blockquote>
                                                "{testimonialContent.testimonials[2].testimony}"
                                            </blockquote>
                                        </div> */}
                                    </div>
                                    <div className='bg-[#F27763] hidden md:inline-block w-10 h-10 lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Testimonial;


