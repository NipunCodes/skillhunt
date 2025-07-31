import React from 'react'
import Header from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import JobCategoryCard from '../components/JobCategoryCard.jsx'
import '../App.css'

const JobCategory = () => {

  return (
    <div className='app'>
        <Header />
        {/* Page Content */}
        <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold'>Job Categories</h1>
            <p className='text-gray-600 mt-2'>Explore various job categories available on our platform.</p>
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                <JobCategoryCard />
                <JobCategoryCard />
                <JobCategoryCard />
                <JobCategoryCard />
                <JobCategoryCard />
                <JobCategoryCard />
            </div>      
        </div>
        <Footer />
    </div>
  )
}

export default JobCategory