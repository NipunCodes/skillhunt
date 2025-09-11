import React from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai'

const WorkItem = ({ title, status, deadline, progress }) => {
  return (
    <div className="border-b border-gray-200 py-4 hover:bg-gray-50 transition-colors px-3">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="font-medium text-gray-900">{title}</h3>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs ${
          status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
          status === 'Review' ? 'bg-yellow-100 text-yellow-800' :
          'bg-green-100 text-green-800'
        }`}>
          {status}
        </span>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center">
          <AiOutlineClockCircle className="mr-1" />
          <span>Due: {deadline}</span>
        </div>
        <div className="w-32">
          <div className="h-2 bg-gray-200 rounded-full">
            <div 
              className="h-2 bg-blue-600 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkItem