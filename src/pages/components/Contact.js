'use client';
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {

    
        const [state, handleSubmit] = useForm("moqowwqr");
        if (state.succeeded) {
            return(
                <>
                <div style={{color:"white"}} className='bg-primary flex justify-center align-middle mb-4'>
                    <h1>Thanks for contacting us!</h1>
                    <p>We will get back to you soon.</p>
                </div>
                </>
            );
        }
        
    
    return (
        <section className='py-20 bg-light overflow-x-hidden'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.0585999818454!2d75.88122197544887!3d22.80029242458635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963036a55458c3b%3A0xb4ec8c71bbb7258e!2sRV2M%2B4G7%2C%20Madhya%20Pradesh%20453555!5e0!3m2!1sen!2sin!4v1693109399661!5m2!1sen!2sin" width="85%" height="450" style={{border:0,borderRadius:"14px",marginLeft:"120px"}} allowFullScreen="true" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            <div className='px-4 mx-auto my-40 grid xs:grid-cols-4 sm:grid-cols-3 gap-4'>
                <div></div>
                <div>
                    <div className='text-center'>
                        <h2 className='text-4xl font-bold mb-4'>Contact Us</h2>
                        <p className='text-xl'>Contact Us for getting started with our services.</p>
                    </div>
                    <div className='mt-10'>
                        <form action='https://formspree.io/f/moqowwqr' method='POST' onSubmit={handleSubmit}>
                            <div className='grid grid-cols-2 gap-4'>
                                <div>
                                    <label htmlFor="name" className='block mb-2'>Name</label>
                                    <input type="text" name='name' className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellowLight' />
                                    <ValidationError prefix="Name"  field="name"errors={state.errors}/>
                                </div>
                                <div>
                                    <label htmlFor="phone" className='block mb-2'>Phone no</label>
                                    <input type="phone" name='phone' className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellowLight' />
                                    <ValidationError prefix="Phone"  field="phone"errors={state.errors}/>
                                </div>
                            </div>
                            <div className='mt-4'>
                                <label htmlFor="services" className='block mb-2'>Select your services</label>
                                <select name="Services" id="service" className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellowLight'>
                                    <option value="construction">Construction</option>
                                    <option value="Plumber">Plumber</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Materials">Materials</option>
                                    <option value="Interior designing">Interiror Designing</option>
                                    <option value="Fabrication">Fabrication</option>
                                    
                                </select>
                                <ValidationError prefix="Services"  field="service"errors={state.errors}/>
                                {/* <textarea name="message" id="message" cols="30" rows="10" className='w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-yellowLight'></textarea> */}
                                <input type="submit" value="submit" />
                            </div>
                            <div className='mt-4'>
                                <button type='submit' className='bg-primary text-white px-4 py-2 rounded-md'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div></div>

            </div>
        </section>
    )
}



export default Contact;