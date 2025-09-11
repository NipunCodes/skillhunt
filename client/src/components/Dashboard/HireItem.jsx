import React from 'react'
import profile from '../../assets/profile-pic.jpg'
import { FaStar } from 'react-icons/fa'
import { BiMessage } from 'react-icons/bi'

const HireItem = ({name, role, project, image, hourlyRate, rating, totalJobs}) => {
  return (
    <div className='p-4 border border-gray-300 rounded-lg shadow hover:bg-gray-50 transition-all'>
        <div className='flex items-center space-x-4 mb-2'>
            <img 
                src={image || profile} 
                alt={name}    
                className='w-12 h-12 rounded-full object-cover items-center'
            />
            <div className='flex-1'>
                <h4 className='font-medium text-gray-900'>{name}</h4>
                <p className='text-sm text-gray-500'>{role}</p>
                
                <div className='flex items-center space-x-3 mt-1'>
                    {hourlyRate && (
                        <div className='flex items-center text-xs text-gray-600'>
                            <span className='font-medium text-green-600'>${hourlyRate}/hr</span>
                        </div>
                    )}
                    
                    {rating && (
                        <div className='flex items-center text-xs text-gray-600'>
                            <FaStar className='w-3 h-3 text-yellow-400 mr-1' />
                            <span>{rating}</span>
                        </div>
                    )}
                    
                    {totalJobs && (
                        <div className='flex items-center text-xs text-gray-600'>
                            <span>{totalJobs} jobs</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className='mb-3'>
            <p className='text-sm text-gray-600'>Contract: {project}</p>
        </div>
        
        <div className='mt-3 pt-3 border-t border-gray-200'>
            <button className='w-full flex items-center justify-center space-x-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors'>
                <BiMessage className='w-4 h-4' />
                <span>Send Message</span>
            </button>
        </div>
    </div>
  )
}

export default HireItem