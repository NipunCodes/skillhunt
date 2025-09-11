import React from 'react'

const Optionbar = ({ icon, title, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className="flex items-center space-x-2 w-full p-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
    >
      {icon}
      <span>{title}</span>
    </button>
  )
}

export default Optionbar