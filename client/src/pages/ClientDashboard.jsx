import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'


const ClientDashboard = () => {
  return (
    <div  className='grid grid-cols-2 gap-4 p-4'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default ClientDashboard