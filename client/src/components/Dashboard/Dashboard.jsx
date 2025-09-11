import React from 'react'
import Topbar from './Topbar.jsx' 
import ActivityCard from './ActivityCard.jsx'
import Optionbar from './Optionbar.jsx'
import WorkItem from './WorkItem.jsx'
import { FaBriefcase, FaUserPlus, FaQuestionCircle } from 'react-icons/fa'
import { BsClockHistory, BsCheckCircle } from 'react-icons/bs'
import HireItem from './HireItem.jsx'

const Dashboard = () => {
  return (
    <div className='p-2 flex space-x-4 h-full'>
      <div className='bg-white rounded-lg pb-4 shadow h-full flex-1 overflow-auto'>
        <Topbar />

         {/* Manage Work Section */}
        <div className='px-6 pb-6'>
          <div className="flex justify-between items-center mb-4">
            <h2 className='text-xl font-semibold'>Manage Work</h2>
            <div className="flex gap-4">
              <button className="text-sm text-gray-600 flex items-center">
                <BsClockHistory className="mr-1" /> In Progress (2)
              </button>
              <button className="text-sm text-gray-600 flex items-center">
                <BsCheckCircle className="mr-1" /> Completed
              </button>
              <button className='text-sm text-blue-600 hover:text-blue-700 font-medium'>
              View All
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200">
            <WorkItem 
              title="Website Redesign Project"
              status="In Progress"
              deadline="Sep 15, 2025"
              progress={75}
            />
            <WorkItem 
              title="Mobile App Development"
              status="Review"
              deadline="Sep 20, 2025"
              progress={90}
            />
            <WorkItem 
              title="UI/UX Design for Dashboard"
              status="In Progress"
              deadline="Sep 25, 2025"
              progress={45}
            />
          </div>
        </div>

        {/* Your Hires Section */}
        <div className='px-6 pb-6 mt-6'>
          <div className='flex justify-between items-center mb-4'>
            <h2 className='text-xl font-semibold'>Your Hires</h2>
            <button className='text-sm text-blue-600 hover:text-blue-700 font-medium'>
              View All
            </button>
          </div>

          <div className='flex justify-between items-start space-x-2'>
            <HireItem
              name="Lewis Hamilton"
              role="Frontend Developer"
              hourlyRate={75}
              rating={4.8}
              totalJobs={12}
              project="Website Redesign Project"
              image=""
            />
            <HireItem
              name="Oscar Piastri"
              role="UI/UX Designer"
              hourlyRate={60}
              rating={4.6}
              totalJobs={8}
              project="Mobile App Development"
              image=""
            />
            <HireItem
              name="Lando Norris"
              role="Backend Developer"
              hourlyRate={80}
              rating={4.9}
              totalJobs={15}
              project="UI/UX Design for Dashboard"
              image=""
            />
          </div>
        </div>
      </div>

      {/* Optionbar */}
      <div className='bg-white rounded-lg shadow w-80 p-4 h-fit sticky top-2'>
        <div className='mb-8'>
          <h3 className='text-lg font-semibold mb-4'>Quick Actions</h3>
          <div className='space-y-3'>
            <Optionbar 
              icon={<FaBriefcase className="text-xl" />}
              title="Post a Job"
              onClick={() => {/* Add your navigation logic */}}
            />
            <Optionbar 
              icon={<FaUserPlus className="text-xl" />}
              title="Rehire"
              onClick={() => {/* Add your navigation logic */}}
            />
            <Optionbar 
              icon={<FaQuestionCircle className="text-xl" />}
              title="Get Help"
              onClick={() => {/* Add your navigation logic */}}
            />
          </div>  
        </div>

        {/* Activity Section */}
        <div className='pt-6 border-t border-gray-200'>
          <h2 className='text-lg font-semibold mb-4'>Your Activity</h2>
          <div className='grid grid-cols-3 gap-3 space-x-2'>
            <ActivityCard 
              title="Job Posts" 
              count={5}
              onView={() => handleView('jobPosts')} 
            />
            <ActivityCard 
              title="Offers" 
              count={3}
              onView={() => handleView('offers')}
            />
            <ActivityCard 
              title="Contracts" 
              count={2}
              onView={() => handleView('contracts')} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard