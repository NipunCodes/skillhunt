import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
import AboutUs from '../pages/About.jsx'

const Footer = () => {
  return (
    <footer className='bg-custom-blue-100 px-4 md:px-16 lg:px-28 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
            <div>
                <h1 className='text-3xl font-bold mb-4'>SkillHunt</h1>
                <p className='text-black'>Lorem ipsum, dolor sit amet consectetur adipisicing elit!</p>
                <ul className='flex space-x-4 mt-4'>
                    <li><a href=""><FaFacebookF /></a></li>
                    <li><a href=""><FaInstagram /></a></li>
                    <li><a href=""><FaTwitter /></a></li>
                </ul>

            </div>
            <div>
                <h2 className='text-lg font-bold mb-4'>For Job Seekers</h2>
                <ul className='mb-2'>
                    <li><a href="" className='hover:underline text-black'>Find Jobs</a></li>
                    <li><a href="" className='hover:underline text-black'>Career Advice</a></li>
                    <li><a href="" className='hover:underline text-black'>Job Alerts</a></li>
                    <li><a href="" className='hover:underline text-black'>Community Hub</a></li>
                    <li><a href="" className='hover:underline text-black'>Forum</a></li>
                    <li><a href="" className='hover:underline text-black'>Events</a></li>
                </ul>
            </div>
            <div>
                <h2 className='text-lg font-bold mb-4'>For Clients</h2>
                <ul className='mb-2'>
                    <li><a href="" className='hover:underline text-black'>How SkillHunt Works</a></li>
                    <li><a href="" className='hover:underline text-black'>Customer Success Stories</a></li>
                    <li><a href="" className='hover:underline text-black'>SkillHunt Guides</a></li>
                    <li><a href="" className='hover:underline text-black'>Trust & Safety</a></li>
                </ul>
            </div>
            <div>
                <a href="/about"><h2 className='text-lg font-bold mb-4'>About Us</h2></a>
                <ul className='mb-2'>
                    <li><a href="" className='hover:underline text-black'>About SkillHunt</a></li>
                    <li><a href="" className='hover:underline text-black'>Help & Support</a></li>
                    <li><a href="" className='hover:underline text-black'>Terms of Service</a></li>
                    <li><a href="" className='hover:underline text-black'>Privacy Policy</a></li>
                    <li><a href="" className='hover:underline text-black'>Contact Us</a></li>
                </ul>
            </div>
        </div>
        <div className='border-t border-gray-600 pt-6 text-center mt-6'>
            <p>© SkillHunt Sri Lanka Ltd. 2025</p>
        </div>
    </footer>

  )
}

export default Footer