import Header from '../components/Navbar.jsx'
import React from 'react'
import Footer from '../components/Footer.jsx'
import AboutUs from '../assets/AboutUs.avif';
import  { useState } from 'react';

const About = () => {
 
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
        <Header />
        
        {/* Page Content */}
        <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8 '>

          {/* About us */}
          <section className='grid gap-8 md:grid-cols-2 bg-custom-blue-500 text-white rounded-xl  '>
            <div className='p-20 '>
              
              <h1  className='text-7xl underline decoration-[3px] underline-offset-4'>Who <br /> we <br /> are</h1>
              <p className='mt-7 text-2xl sm:text-xl'>"Skill meets opportunity here. Whether you're a freelancer or a client, we’re the bridge to your success."  </p>
              
              {showMore && (
                  <p className="mt-6 text-lg text-white" >
                    We are a passionate team focused on creating innovative digital solutions that empower businesses and individuals.
                  </p>
              )}
              <button className='mt-15 px-6 py-2 lg:ml-50 bg-blue-600 text-white rounded-lg hover:bg-custom-blue-400 transition'  onClick={() => setShowMore(!showMore)} >{showMore ? 'Learn Less' : 'Learn More'}</button>
            </div>

            <div className='bg-white ' >
              <img src={AboutUs} alt="About Us" />
            </div>
          </section>

          {/* Contact us */}
          <div className='flex items-center justify-center h-full mt-20 mb-20'>
            <div className='bg-custom-blue-100 h-auto w-auto p-12 rounded-2xl shadow-lg'>
                <h1 className='text-center text-4xl font-bold font-mono mb-5'>Contact Us</h1>
              <div className='flex gap-6 mb-4 justify-center p-5 text-xl font-semibold  font-sans'>  
              <div >
                <label htmlFor="firstname">First Name</label>
                <input className='bg-white border border-gray-300 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="firstname" id="firstname"   />
              </div>
              <div className='w-1/2'>
                <label htmlFor="lastname">Last Name</label>
                <input className='bg-white border border-gray-300 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="lastname" id="lastname"   />
              </div>
              </div>
              <div className='justify-center text-xl font-semibold p-5 mb-3 font-sans'>
                <label htmlFor="email">Email</label>
                <input className='bg-white border border-gray-300 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="email" id="email"   />
              </div>
              <div className='justify-center text-xl font-semibold p-5 mb-3 font-sans'>
                <label htmlFor="yourmessage">Your Message</label>
                <input className='bg-white border border-gray-300 h-25 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="yourmessage" id="yourmessage"   />
              </div>
            <div className='flex justify-center items-center p-5'>
                        <button className='bg-black text-white w-full h-10 border-none rounded-xl cursor-pointer hover:ring-1 hover:ring-custom-blue-500 hover:bg-custom-blue-500' type='submit'>Submit</button>
                    </div>


             


            </div>
          </div>


        </div>

        
        <Footer/> 
    </div>

  )
}

export default About