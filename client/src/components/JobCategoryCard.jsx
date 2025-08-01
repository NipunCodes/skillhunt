import React, { useState, useEffect } from 'react';
import { FaBriefcase, FaCode, FaPalette, FaChartLine } from 'react-icons/fa';
import '../App.css';

const JobCategoryCard = ({ onCategorySelect }) => {
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const fetchJobCounts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/jobs/category/counts');
        const data = await response.json();
        console.log('Received category counts:', data);
        const countsMap = data.reduce((acc, item) => {
          // Remove spaces and convert to lowercase
          const categoryKey = item._id.toLowerCase().replace(/\s+/g, '');
          acc[categoryKey] = item.count;
          return acc;
        }, {});
        console.log('Processed counts:', countsMap);
        setCategoryCounts(countsMap);
      } catch (error) {
        console.error('Error fetching job counts:', error);
      }
    };

    fetchJobCounts();
    // Fetch counts every 5 minutes
    const interval = setInterval(fetchJobCounts, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const categories = [
    { 
      name: 'Development',
      icon: <FaCode className="w-8 h-8" />,
      description: 'Software development and programming positions',
      count: categoryCounts['development'] || 0
    },
    { 
      name: 'Design',
      icon: <FaPalette className="w-8 h-8" />,
      description: 'UI/UX and graphic design positions',
      count: categoryCounts['design'] || 0
    },
    { 
      name: 'Marketing',
      icon: <FaChartLine className="w-8 h-8" />,
      description: 'Digital marketing and social media positions',
      count: categoryCounts['marketing'] || 0
    },
    { 
      name: 'Software Engineer',
      icon: <FaBriefcase className="w-8 h-8" />,
      description: 'Software engineering and architecture positions',
      count: categoryCounts['softwareengineer'] || 0
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {categories.map((category) => (
        <div
          key={category.name}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer transform hover:-translate-y-1 duration-200"
          onClick={() => onCategorySelect(category.name)}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="text-blue-600 bg-blue-50 p-3 rounded-lg">
              {category.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="text-gray-500 text-sm">{category.count} jobs available</p>
            </div>
          </div>
          <p className="text-gray-600">{category.description}</p>
        </div>
      ))}
    </div>
  );
};

export default JobCategoryCard;
