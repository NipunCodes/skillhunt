import React, { useEffect, useState } from 'react'
import Header from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Dp from '../assets/profile-pic.jpg'
import '../App.css'
import axios from 'axios'

const JobPage = () => {
    const [ jobs, setJob ] = useState([]);
    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await axios.get("http://localhost:5000/api/jobs/jobpage");
                setJob(res.data);
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        };
        fetchJob();
    }, []);

    return (
        <div className='app'>
            <Header />
            {/* Page Content */}
            <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8'>
                {jobs.length === 0 ? (
                    <div className="text-center text-gray-500">
                        <p>No job details available.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {jobs.map((job) => (
                            <div key={job._id} className="bg-custom-blue-100 rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-8">
                                {/* Job Details Section */}
                                <div className="flex-1">
                                    <h1 className="text-3xl font-bold mb-2">{job.jobTitle}</h1>
                                    <div className="text-gray-500 mb-4">Acme Corp &middot; {job.location} &middot; Full-time</div>
                                    <div className="mb-6">
                                        <span className="inline-block bg-blue-300 text-blue-800 text-xs px-2 py-1 rounded mr-2">React</span>
                                        <span className="inline-block bg-green-300 text-green-800 text-xs px-2 py-1 rounded mr-2">JavaScript</span>
                                        <span className="inline-block bg-yellow-300 text-yellow-800 text-xs px-2 py-1 rounded">CSS</span>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-2">Job Description</h2>
                                    <p className="text-gray-700 mb-4">
                                        {job.jobDescription || "No description available."}
                                    </p>
                                    <h2 className="text-xl font-semibold mb-2">Job Category</h2>
                                    <p className="text-gray-700 mb-4">
                                        {job.jobCategory || "No category specified."}
                                    </p>
                                    <h2 className="text-xl font-semibold mb-2">Location</h2>
                                    <p className="text-gray-700 mb-4">
                                        {job.location || "No location specified."}
                                    </p>
                                    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
                                        Apply Now
                                    </button>
                                </div>
                                {/* Company Info Section */}
                                <div className="w-full md:w-80 flex-shrink-0 bg-custom-blue-200 rounded-lg p-6 flex flex-col items-center">
                                    <img src={Dp} alt="Company Logo" className="w-20 h-20 rounded-full mb-4" />
                                    <div className="text-lg font-semibold mb-1">Don't Take Corp</div>
                                    <div className="text-gray-700 mb-4">Technology Company</div>
                                    <a href="https://donottake.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline mb-4">
                                        donottake.com
                                    </a>
                                    <div className="text-gray-700 text-sm text-center mb-4">
                                        Acme Corp is a leading provider of innovative tech solutions, empowering businesses worldwide.
                                    </div>
                                    {/* Google Map */}
                                    <div className="w-full h-48 rounded overflow-hidden mt-2">
                                        <iframe title="Company Location" width="100%" height="100%" frameBorder="0" style={{ border: 0 }} src="https://www.google.com/maps?q=San+Francisco,+CA&output=embed" allowFullScreen></iframe>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default JobPage