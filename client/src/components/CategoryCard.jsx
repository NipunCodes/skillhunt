import React from 'react'
import { FaCode } from "react-icons/fa6";

const card = () => {
  return (
    <div className='mb-5 ml-8'>
        <div className="bg-blue-200 border border-gray-300 shadow-[5px_5px_5px_hsla(244,100%,10%,0.493)] p-5 w-30 h-30 text-center rounded-xl">
            <FaCode className='mx-6 text-3xl' />
            <h2 className="text-lg text-black font-semibold font-sans">Software Engineer</h2>
        </div>
    </div>
  )
}

export default card