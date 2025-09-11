import React from 'react'

const ActivityCard = ({ title, count, onView}) => {
  return (
    <div>
      <div>
        <h4 className='text-gray-600 text-sm font-medium'>{title}</h4>  
        <p className='text-xl font-semibold mt-1'>{count}</p>
      </div>
      <button
        onClick={onView}
        className='text-blue-600 hover:underline text-xs'
      >
        View {title}
      </button>
    </div>
  )
}

export default ActivityCard