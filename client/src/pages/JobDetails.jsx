import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import '../App.css'
import axios from 'axios'

const JobDetails = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/jobs/${id}`);
                setJob(res.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching job details:", error);
                setLoading(false);
            }
        };
        fetchJobDetails();
    }, [id]);

    if (loading) {
        return <div className='loading'></div>;
    }

    if (!job) {
        return <div>Job not found</div>;
    }

    return (
        <div className='app'>
            <Header />
            <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="bg-custom-blue-100 rounded-lg shadow-md p-8">
                    <div className="mb-6">
                        <h1 className="text-4xl font-bold mb-2">{job.jobTitle}</h1>
                        <div className="text-gray-600">Posted on {new Date(job.createdAt).toLocaleDateString()}</div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4">Job Description</h2>
                                <p className="text-gray-700 whitespace-pre-line">{job.jobDescription}</p>
                            </section>

                            <section className="mb-8">
                                <h2 className="text-2xl font-semibold mb-4">Key Details</h2>
                                <div className="bg-white rounded-lg p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="font-semibold text-gray-600">Job Category</h3>
                                            <p className="mt-1">{job.jobCategory}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-600">Job Location</h3>
                                            <p className="mt-1">{job.location}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-600">Employment Type</h3>
                                            <p className="mt-1">{job.jobType}</p>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-600">Posted Date</h3>
                                            <p className="mt-1">{new Date(job.createdAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">
                            {/* Company Info Card */}
                            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
                                <div className="flex flex-col items-center mb-4">
                                    {job.companyPicture ? (
                                        <img 
                                            src={job.companyPicture} 
                                            alt={`${job.companyName} logo`} 
                                            className="w-20 h-20 rounded-full object-cover mb-3"
                                        />
                                    ) : (
                                        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-3">
                                            <span className="text-2xl font-bold text-gray-400">
                                                {job.companyName?.charAt(0)}
                                            </span>
                                        </div>
                                    )}
                                    <h3 className="text-xl font-semibold">{job.companyName}</h3>
                                </div>
                                
                                <div className="border-t border-gray-100 pt-4">
                                    <div className="flex items-center mb-3">
                                        <svg className="w-5 h-5 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span className="text-gray-600">{job.companyLocation}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Apply Now Card */}
                            <div className="bg-white rounded-lg p-6 shadow-sm sticky top-4">
                                <h2 className="text-xl font-semibold mb-4">Apply for this position</h2>
                                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-200">
                                    Apply Now
                                </button>
                                <div className="mt-4 text-gray-600 text-sm">
                                    <p>This job was posted on {new Date(job.createdAt).toLocaleDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default JobDetails
