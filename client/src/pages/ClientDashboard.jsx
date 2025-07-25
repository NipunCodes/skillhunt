import React from 'react'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'


const ClientDashboard = () => {
  return (
    <div  className='grid gap-4 p-4 grid-cols-[200px_1fr]'>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default ClientDashboard