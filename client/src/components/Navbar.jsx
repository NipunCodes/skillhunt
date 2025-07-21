import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navigate = useNavigate();

    const signIn = () => {
        navigate('/login');
  }


    const buttonClasses = 'text-black font-semibold text-sm px-2 py-1 hover:bg-gray-100 hover:text-gray-800 rounded-lg transition duration-300'
    const buttons = (
        <>
            <button className={buttonClasses}>What's New</button>
            <button className={buttonClasses}>Why SkillHunt</button>
            <button className={buttonClasses}>Find Skills</button>
            <button onClick={signIn} className='text-gray-600 font-semibold text-sm px-2 py-1 hover:text-black hover:bg-gray-400 rounded-lg transition duration-300'>Sign in</button>
            <button className='bg-custom-blue-200 text-black border-1 font-bold text-base px-2 py-1 hover:bg-custom-blue-500 hover:text-white hover:border-white rounded-lg transition duration-300'>Join</button>
        </>
    )

  return (
    <nav className='text-black w-full'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex items-center justify-between h-16'>
                <div className='flex flex-row w-full justify-between'>
                    <div className='text-3xl font-bold'>
                        SkillHunt
                    </div>
                    <div className='hidden md:block'>
                        <div className='flex ml-10 items-baseline space-x-2'>
                            {buttons}
                        </div>
                    </div>
                </div>
                <div className='md:hidden'>
                    <button onClick={() => {setIsOpen(!isOpen)}} type='button' className='fill-gray-100'>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 7H27" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                        <path d="M5 16H27" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                        <path d="M5 25H27" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {
            isOpen && (
                <div className='flex flex-col gap-y-2 md:hidden px-4 sm:px-6 pb-2'>
                    {buttons}
                </div>
            )
        }
    </nav>
  )
}

export default Navbar