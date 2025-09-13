import React from 'react'
import { BsBell } from 'react-icons/bs'

const Topbar = () => {
  return (
    <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
        <div className='flex items-center justify-between p-0.5'>
            <div>
                <span className='text-sm font-bold block'>Good morning, Max!</span>
                <span className='text-xs block text-stone-500'>
                    Thursday, Sep 4th 2025
                </span>
            </div>

            {/* Notification Badge */}
            <div className='relative'>
                <button className='p-2 hover:bg-stone-100 rounded-lg transition-colors duration-200 relative'>
                    <BsBell className='text-xl text-stone-600 hover:text-stone-800' />
                    <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
                        3
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Topbar