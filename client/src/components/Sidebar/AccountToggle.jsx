import React from 'react'
import { MoreVertical } from 'lucide-react'

const AccountToggle = ({ expanded }) => {
  return (
    <div className='border-t flex p-3 mt-auto border-stone-300'>
        <img src="https://api.dicebear.com/9.x/initials/svg?seed=MV" alt="avatar" className='w-10 h-10 rounded-md' />
        <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}`}>
            <div className='leading-4'>
            <h4 className='font-semibold text-black'>Max Verstappen</h4>
            <span className='text-xs text-gray-600'>simplylovely@gmail.com</span>
            </div>
            <MoreVertical className='text-gray-600' size={20} />
        </div>
    </div>
        
  )
}

export default AccountToggle