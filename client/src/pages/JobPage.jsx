import React from 'react'
import Header from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../App.css'

const JobPage = () => {
  return (
    <div className='app'>
        <Header />
        {/* Page Content */}
        <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='main content flex'>
                <div className='Details bg-gray-500 p-10'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta magnam totam sapiente sequi explicabo voluptates. Nihil numquam cupiditate, quisquam nulla omnis molestias? Voluptates nisi dicta accusantium accusamus vero eum ipsum!
                </div>
                <div className='side bar bg-amber-300 p-10 flex flex-col gap-5'>
                    <div className='like,comment,share bg-gray-500'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nesciunt perspiciatis voluptate quae omnis quisquam eum? Eos autem assumenda iusto!
                    </div>
                    <div className='payment options bg-gray-500 p-10'>
                        lorem40
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobPage