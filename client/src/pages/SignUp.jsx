import React from 'react'
import Header from '../components/Navbar'
import Footer from '../components/Footer'

function SignUp() {
  
  return (
    <div>
      <Header/>

      {/* Page Content */}
      <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8'>

         {/* Contact us */}
         <div className='flex items-center justify-center h-full '>
          <div className='bg-custom-blue-100 h-auto w-2xl p-12 rounded-2xl shadow-lg'>
            <h1 className='text-center text-4xl font-bold font-mono mb-5'>Sign Up</h1>
            <div className='flex gap-6 justify-center p-5 text-xl font-semibold  font-sans'>
              <div className='w-1/2'>
               <label  htmlFor="firstname">First Name</label>
                <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="firstname" id="firstname"   />
              </div>
              <div className='w-1/2' >
                <label htmlFor="lastname">Last Name</label>
                <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="lastname" id="lastname"   />
              </div>
            </div>
            <div className='justify-center text-xl font-semibold p-5 font-sans'>
              <label htmlFor="email">Email</label>
              <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="email" id="email"   />
            </div>
            <div className='justify-center text-xl font-semibold p-5 font-sans'>
              <label htmlFor="password">Password</label>
              <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300 '     type="text" />
            </div>
            <div className='justify-center text-xl font-semibold p-5 font-sans'>
              <label className='text-xl font-semibold mb-3 font-sans' htmlFor="username">User Name</label>
              <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="username" id="username" />
            </div>
            <div className='flex gap-6 justify-center p-5 text-xl font-semibold  font-sans'>
              <div className='w-1/2'>
               <label htmlFor="gender">Gender</label>
                <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="firstname" id="firstname"   />
              </div>
              <div className='w-1/2' >
                <label htmlFor="calendar">Calendar</label>
                <input className='bg-white border border-gray-300 mt-0.5 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="lastname" id="lastname"   />
              </div>
            </div>

            <div className='flex justify-center items-center p-5'>
              <button className='bg-black text-white w-full h-10 border-none rounded-xl cursor-pointer hover:ring-1 hover:ring-custom-blue-500 hover:bg-custom-blue-500' type='submit'>Sign Up</button>
            </div>
            
          </div>
         </div>

      </div>
      <Footer/>
    </div>
    
  )
 
}

export default SignUp
