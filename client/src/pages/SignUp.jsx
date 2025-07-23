import React from 'react'
import Header from '../components/Navbar'
import Footer from '../components/Footer'
import bgImg from '../assets/New-Login-Bg.avif'

function SignUp() {
  
  return (
    <div>
      <Header/>
      <div className='bg-cover w-full h-auto' style={{backgroundImage: `url(${bgImg})`}}>
      {/* Page Content */}
      <div className='flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8'>
          {/* Sign Up */}
          <div className='bg-white/10 border-2 border-white/20 h-auto backdrop-blur-[30px] w-2xl p-12 rounded-2xl shadow-lg '>
            <h1 className='text-white text-center text-4xl font-bold font-mono mb-5'>SIGN UP</h1>
              <div className='flex justify-center p-5 sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0'>
                <div className='flex flex-col flex-grow-1'>
                  <label className='text-white text-xl font-semibold mb-3 font-sans' htmlFor="firstname">First Name</label>
                  <input className='bg-white border border-gray-300 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="firstname" id="firstname" />
                </div>
                <div className='flex flex-col flex-grow-1'>
                  <label className='text-white text-xl font-semibold mb-3 font-sans' htmlFor="firstname">Last Name</label>
                  <input className='bg-white border border-gray-300 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="firstname" id="firstname" />
                </div>
              </div>
            <div className='justify-center p-5 font-sans sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0'>
              <label className='text-white text-xl font-semibold' htmlFor="email">Email</label>
              <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="email" name="email" id="email" required/>
            </div>
            <div className='justify-center p-5 font-sans sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0'>
              <label className='text-white text-xl font-semibold' htmlFor="password">Password</label>
              <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300 ' type="password" required/>
            </div>
            <div className='justify-center p-5 font-sans sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0'>
              <label className='text-white text-xl font-semibold mb-3 font-sans' htmlFor="username">User Name</label>
              <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="username" id="username" />
            </div>
            <div className='flex gap-6 justify-center p-5 text-xl font-semibold  font-sans sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0'>
              <div className='flex flex-col'>
               <label className='text-white' htmlFor="gender">Gender</label>
                <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="firstname" id="firstname"   />
              </div>
              <div className='flex flex-col'>
                <label className='text-white' htmlFor="calendar">Calendar</label>
                <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="lastname" id="lastname"   />
              </div>
            </div>
            <div className='flex justify-center items-center p-5'>
              <button className='bg-custom-blue-400 text-white w-full h-10 border-none rounded-xl cursor-pointer hover:ring-1 hover:ring-custom-blue-500 hover:bg-custom-blue-500' type='submit'>SIGN UP</button>
            </div>
          </div>
      </div>
      </div>
      <Footer/>
    </div>
    
  )
 
}

export default SignUp
