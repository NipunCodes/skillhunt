import React, { useState } from 'react'
import '../App.css'
import Header from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateJobForm = () => {
    const jobs = {
        jobTitle: "",
        shortDescription: "",
        jobDescription: "",
        jobCategory: "",
        location: "",
    };
    const [job, setJob] = useState(jobs);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setJob(prev => ({...prev, [name]: value }));
    };

    const submitHandler = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:5000/api/jobs/createjobform", job)
            .then((res) => {
                console.log(res.data);
                navigate("/jobpage");
            })
            .catch((err) => {
                console.error(err);
            });
    }

return (
    <div className='app'>
        <Header />
        <div className='h-auto'>
            {/* Page Content */}
            <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Form */}
                <div className='flex items-center justify-center min-h-screen'>
                    <div className='bg-custom-blue-100 p-12 w-4xl rounded-2xl shadow-lg'>
                        <form onSubmit={submitHandler}>
                            <h1 className='text-center text-4xl font-bold mb-5'>CREATE JOB</h1>
                            <div className='mb-5'>
                                <label className='text-xl font-semibold mb-3' htmlFor="jobTitle">Job Title</label>
                                <input className='bg-white border border-gray-300 mt-1 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" onChange={inputHandler} name="jobTitle" id="jobTitle" />
                            </div>
                            <div className='mb-5'>
                                <label className='text-xl font-semibold mb-3' htmlFor="jobDescription">Job Description</label>
                                <textarea className='bg-white border border-gray-300 mt-1 h-40 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' onChange={inputHandler} name="jobDescription" id="jobDescription" placeholder=' Type full description . . .'></textarea>
                            </div>
                            <div className='mb-5'>
                                <label className='text-xl font-semibold mb-3' htmlFor="shortDescription">Short Description</label>
                                <textarea className='bg-white border border-gray-300 mt-1 h-20 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300'  name="shortDescription" id="shortDescription" onChange={inputHandler} placeholder=' Type short description . . .'></textarea>
                            </div>
                            <div className='mb-5'>
                                <label className='text-xl font-semibold mb-3' htmlFor="jobCategory">Job Category</label>
                                <select className='bg-white border border-gray-300 mt-1 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' onChange={inputHandler} name="jobCategory" id="jobCategory">
                                    <option value="">Select Category</option>
                                    <option value="development">Development</option>
                                    <option value="design">Design</option>
                                    <option value="marketing">Marketing</option>
                                    <option value="software-engineer">Software Engineer</option>
                                </select>
                            </div>
                            <div className='mb-5'>
                                <label className='text-xl font-semibold mb-3' htmlFor="location">Location</label>
                                <input className='bg-white border border-gray-300 mt-1 h-10 rounded-xl pr-10 w-full focus:outline-none focus:ring-1 focus:ring-blue-300' type="text" onChange={inputHandler} name="location" id="location" />
                            </div>
                            <div className='flex justify-center mt-10 space-x-4 sm:flex-row flex-col sm:space-x-6 space-y-4 sm:space-y-0'>
                                <button className='bg-black text-white w-full h-10 border-none rounded-xl cursor-pointer hover:ring-1 hover:ring-custom-blue-500 hover:bg-custom-blue-500' type='submit' >Create</button>
                                <button className='bg-gray-300 text-black w-full h-10 border-none rounded-xl cursor-pointer hover:ring-1 hover:ring-gray-400 hover:bg-gray-400' type='button' onClick={() => window.history.back()} >Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
)
}

export default CreateJobForm