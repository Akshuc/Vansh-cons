import React from 'react'
import Image from 'next/image';

const servicesContent = {
    heading : {
        headingSubTitle : "Our Awesome Services",
        headingTitle:"Our Services",
        description:"we offer a comprehensive range of services designed to meet the diverse needs of our clients. With a focus on excellence, innovation, and customer satisfaction, our dedicated team of professionals is committed to delivering outstanding results that elevate your business to new heights.Our services include:"
    },

    items:[
        {
            icon:'/images/icon1.png',
            title:"Commercial",
            description:"we specialize in delivering top-notch commercial construction solutions tailored to meet your business needs. With a proven track record of excellence, we take pride in transforming your visions into reality. Our dedicated team of experienced professionals is committed to ensuring the highest standards of quality, efficiency, and innovation throughout every phase of your project."
        },
        {
            icon:'/images/icon2.png',
            title:"Design",
            description:"we are dedicated to transforming spaces into captivating environments through our exceptional Commercial Design Services. Our team of talented designers is passionate about creating visually stunning and functional spaces that leave a lasting impression.We understand that every commercial space has a unique purpose and identity."
        },
        {
            icon:'/images/icon3.png',
            title:"Electrical",
            description:"we specialize in providing top-tier Electrical Services for all your commercial needs. With a commitment to quality, safety, and efficiency, our skilled electricians are dedicated to ensuring your electrical systems are not only functional but also reliable and up to code.Whether you're setting up a new commercial facility, upgrading your existing electrical infrastructure."
        },
        {
            icon:'/images/icon4.png',
            title:"Furniture",
            description:"we specialize in delivering exceptional Furniture Services to enhance the functionality, aesthetics, and comfort of your commercial spaces. Our dedicated team of furniture experts is committed to transforming your vision into reality, creating a workspace that aligns with your brand identity and meets your unique requirements.Whether you're looking to furnish a new office, upgrade your existing furniture."
        },
        {
            icon:'/images/icon5.png',
            title:"Construction",
            description:"we take pride in offering exceptional Construction Services designed to bring your commercial projects to life. With a commitment to quality craftsmanship, innovation, and customer satisfaction, our experienced team of construction professionals is dedicated to delivering outstanding results that exceed your expectations.Our comprehensive Construction Services cover a wide range of needs."
        },
        {
            icon:'/images/icon6.png',
            title:"Interior",
            description:"we specialize in crafting captivating and functional interior spaces through our exceptional Interior Design Services. With a passion for creativity and an unwavering commitment to client satisfaction, our team of skilled designers is dedicated to transforming your vision into a reality that reflects your brand identity and enhances the overall experience."
        },
    ]
}

const Services = () => {
  return (
    <section className='py-20 bg-light'>
        <div className='container px-4 mx-auto'>
            <div className='max-w-xl mx-auto text-center mb-20'>
                {servicesContent.heading.headingSubTitle && (
                    <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 z-50 before:content-[''] before:absolute before:w-2/3  before:left-0 before:top-0 before:bottom-0 before-z-10">
                       {servicesContent.heading.headingSubTitle}
                    </span>
                )}

                {servicesContent.heading.headingTitle &&(
                    <h2 className='text-heading text-2xl lg:text-4xl font-bold mb-5'>{servicesContent.heading.headingTitle}</h2>
                )}

                {servicesContent.heading.description && (
                    <p className='text-body leading-relaxed'>{servicesContent.heading.description}</p>
                )}
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                {
                    servicesContent.items.map((item,idx)=>(
                        <div className='flex space-x-10' key={item.title}>
                            <div className='w-14 shrink-0'>
                                <span className='inline-flex items-center justify-center p-2 w-[60px] h-[60px] rounded-lg bg-white shadow-2xl'>
                                    <Image src={item.icon} width={60} height={60} alt="icon"/>
                                </span>
                            </div>

                            <div>
                                {item.title && (
                                    <h3 className='text-heading font-bold text-md mb-3'>
                                    {item.title}
                                </h3>
                                )}

                                {item.description && (
                                    <p className='leading-relaxed'>{item.description}</p>
                                )}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Services;


