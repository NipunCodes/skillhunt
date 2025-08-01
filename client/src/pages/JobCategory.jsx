import React, { useState, useEffect } from 'react'
import Header from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import JobCategoryCard from '../components/JobCategoryCard.jsx'
import '../App.css'
import axios from 'axios'

const JobCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/jobs");
        setAllJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    const filtered = allJobs.filter(job => {
      // Normalize both strings for comparison
      const jobCategory = job.jobCategory?.toLowerCase().replace(/[-_\s]+/g, '');
      const selectedCategory = category.toLowerCase().replace(/[-_\s]+/g, '');
      return jobCategory === selectedCategory;
    });
    setFilteredJobs(filtered);
    console.log('Selected category:', category);
    console.log('Filtered jobs:', filtered);
  };

  return (
    <div className='app'>
        <Header />
        {/* Page Content */}
        <div className='max-w-7xl p-10 mx-auto px-4 sm:px-6 lg:px-8'>
            <h1 className='text-3xl font-bold'>Job Categories</h1>
            <p className='text-gray-600 mt-2'>Explore various job categories available on our platform.</p>
            
            {!selectedCategory ? (
              <div className='mt-6'>
                <JobCategoryCard onCategorySelect={handleCategorySelect} />
              </div>
            ) : (
              <div className="mt-6">
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="mb-4 px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300"
                >
                  ← Back to Categories
                </button>
                
                <h2 className="text-2xl font-semibold mb-4">{selectedCategory} Jobs</h2>
                
                {filteredJobs.length === 0 ? (
                  <p className="text-gray-500">No jobs found in this category.</p>
                ) : (
                  <div className="space-y-6">
                    {filteredJobs.map((job) => (
                      <div key={job._id} className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-bold mb-2">{job.jobTitle}</h3>
                        <p className="text-gray-600 mb-2">{job.jobDescription}</p>
                        <div className="text-gray-500 text-sm">
                          Location: {job.location}
                        </div>
                        <button 
                          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                          onClick={() => window.location.href = `/jobs/${job._id}`}
                        >
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
        </div>
        <Footer />
    </div>
  )
}

export default JobCategory