import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const heroContent = {
    text: {
        subheading: "welcome to Vansh Constructions",
        heading: "We transform your vision into reality with expert craftsmanship and dedication",
        description: "आवाज़ करें वंश निर्माण कंपनी की – सपनों को उँचाइयों तक ले जाने, यथार्थ बनाने में मदद करने में। हमारी शिल्पकला की विरासत के साथ, हम वास्तुकला के चमत्कारी कामों को बुनते हैं जो समय के साक्षी के रूप में खड़े रहते हैं। एक ऐसे दुनिया में कदम रखें जहाँ कल्पना और उद्भवन का संगम होता है"
    },
    images: {
        img1: '/images/hero-1.jpg',
        img2: '/images/hero-2.jpg',
        img3: "/images/hero-3.jpg",
        img4: "/images/hero-4.jpg",
        img5: "/images/hero-5.jpg",
    }
}

const Hero = () => {
    return (
        <section className='py-20'>
            <div className='container px-4 mx-auto'>
                <div className='lg:flex justify-between items-center'>
                    <div className='lg:w-5/12 mb-10 lg:mb-0'>


                        {heroContent.text.subheading && (
                            <span className="inline-block py-0.5 pl-3 text-heading font-semibold relative mb-7 before:content-[''] before:absolute before:2/3 before:bg-yellowLight before:left-0 before:top-0 before:bottom-0 before:z-[-1]">
                                {heroContent.text.subheading}
                            </span>)}

                        {heroContent.text.heading && (<h1 className='text-4xl lg:text-5xl font-bold text-heading mb-7'>{heroContent.text.heading}</h1>)}

                        {heroContent.text.description && (<p className='leading-relaxed text-body mb-10'>{heroContent.text.description}</p>)}

                        <div className="flex space-x-3">
                            <Link href="/components/Contact" className='py-4 px-5 bg-primary text-white rounded-lg duration-300 transition-all ease-in-out hover:bg-[#134761] hover:box-shadow-lg inline-block relative hover:-top-1'>Connect Us</Link>
                        </div>

                    </div>
                    <div className='lg:w-6/12 space-y-2'>
                        <div className='flex space-x-2 items-stretch'>
                            <div className='w-8/12'>
                                {heroContent.images.img1 && (
                                    <Image className='object-cover h-full w-full rounded-2xl' src={heroContent.images.img1} alt='Img' width={397} height={406} />
                                )}
                            </div>

                            <div className='w-4/12 self-end space-y-2'>
                                <div className='grid grid-cols-2 gap-2'>
                                    {heroContent.images.img2 && (
                                        <div>
                                            <Image src={heroContent.images.img2} alt="img2" width={437} height={437} className='object-cover h-full w-full rounded-2xl ' />
                                        </div>
                                    )}

                                    <div className='bg-yellowLight rounded-2xl rounded-tr-[200px]'></div>
                                </div>

                                {heroContent.images.img3 && (
                                    <div>
                                        <Image src={heroContent.images.img3} alt='img3' width={374} height={392} className='object-cover h-full w-full rounded-2xl' />

                                    </div>
                                )}
                            </div>

                        </div>
                        <div className='flex space-x-2'>
                            <div className='w-4/12'>
                                <div className='grid grid-cols-2 gap-2'>
                                    <div className='bg-greenLight rounded-2xl rounded-bl-[200px]'></div>
                                    {heroContent.images.img4 && (
                                        <div>
                                            <Image src={heroContent.images.img4} alt='img4' width={394} height={394} className='object-cover h-full w-full rounded-2xl' />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='w-5/12'>
                                {heroContent.images.img5 && (
                                    <Image src={heroContent.images.img5} width={446} height={495} alt="img5" className='object-cover h-full w-full rounded-2xl' />
                                )}
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero;









