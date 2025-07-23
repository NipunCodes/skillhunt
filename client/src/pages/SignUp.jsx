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
      <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8 h-screen'>
      {/* Sign Up */}
        <div className='flex items-center justify-center h-full'>
          <div className='bg-white/10 border-2 border-white/20 backdrop-blur-[30px] h-auto w-2xl p-12 rounded-2xl shadow-lg'>
            <h1 className='text-white text-center text-4xl font-bold font-mono mb-5'>SIGN UP</h1>
            <div className='flex gap-6 justify-center p-5 font-sans'>
              <div className='w-1/2'>
               <label className='text-white text-xl font-semibold' htmlFor="firstname">First Name</label>
                <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="firstname" id="firstname" />
              </div>
              <div className='w-1/2' >
                <label className='text-white text-xl font-semibold' htmlFor="lastname">Last Name</label>
                <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="lastname" id="lastname" />
              </div>
            </div>
            <div className='justify-center p-5 font-sans'>
              <label className='text-white text-xl font-semibold' htmlFor="email">Email</label>
              <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="email" name="email" id="email" required/>
            </div>
            <div className='justify-center p-5 font-sans'>
              <label className='text-white text-xl font-semibold' htmlFor="password">Password</label>
              <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300 ' type="password" required/>
            </div>
            <div className='justify-center p-5 font-sans'>
              <label className='text-white text-xl font-semibold mb-3 font-sans' htmlFor="username">User Name</label>
              <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="username" id="username" />
            </div>
            <div className='flex gap-6 justify-center p-5 text-xl font-semibold  font-sans'>
              <div className='w-1/2'>
               <label className='text-white' htmlFor="gender">Gender</label>
                <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="firstname" id="firstname"   />
              </div>
              <div className='w-1/2' >
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
      </div>
      <Footer/>
    </div>
    
  )
 
}

export default SignUp
