import React from 'react'
import Header from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { FaUserCircle } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import bgImg from '../assets/New-Login-Bg.jpg'
import '../App.css'

const Login = () => {
  return (
    <div className='app'>
        <Header />
        <div className='bg-cover w-full min-h-screen' style={{backgroundImage: `url(${bgImg})`}}>
        {/* Page Content */}
        <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8'>
            {/* Login */}
            <div className='flex items-center justify-center min-h-screen'>
            <div className='bg-white/10 border-2 border-white/20 backdrop-blur-[30px] h-auto w-auto p-12 rounded-2xl shadow-lg'>
                <h1 className='text-white text-center text-4xl font-bold font-mono mb-5'>LOGIN</h1>
                <div className='flex flex-col justify-center p-5'>
                    <label className='text-white text-xl font-semibold mb-3 font-sans' htmlFor="username">User Name</label>
                    <div className='relative'>
                        <input className='bg-white border border-gray-300 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" name="username" id="username" />
                        <FaUserCircle className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl' />
                    </div>
                </div>
                <div className='flex flex-col justify-center p-5'>
                    <label className='text-white text-xl font-semibold mb-3 font-sans' htmlFor="password">Password</label>
                    <div className='relative'>
                        <input className='bg-white border border-gray-300 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="password" name="password" id="password" />
                        <FaKey className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl' />
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-center sm:space-x-20 space-y-2 sm:space-y-0 p-5'>
                    <label className='text-white' htmlFor="stay-signin"><input type="checkbox" name="stay-signin" id="stay-signin" /> Stay Sign In</label>
                    <a href="#" className='text-gray-300 hover:text-white hover:underline'>Forget Password</a>
                </div>
                <div className='flex justify-center items-center p-5'>
                    <button className='bg-custom-blue-400 text-white w-full h-10 border-none rounded-xl cursor-pointer hover:ring-2 hover:ring-custom-blue-500 hover:bg-custom-blue-500' type='submit'>LOGIN</button>
                </div>
                <div className='flex justify-center mt-5'>
                    <label className='text-white' htmlFor="create-account">Don't have an account.</label><a href="#" className='text-gray-300 hover:text-white hover:underline ml-1'> Register</a>
                </div>
            </div>
            </div>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Login