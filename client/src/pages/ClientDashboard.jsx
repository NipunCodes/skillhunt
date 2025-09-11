import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Dashboard from '../components/Dashboard/Dashboard'

const ClientDashboard = () => {
  return (
    <main className='grid gap-2 grid-cols-[220px_1fr] bg-stone-100'>
        <Sidebar />
        <Dashboard />
    </main>
  )
}

export default ClientDashboard