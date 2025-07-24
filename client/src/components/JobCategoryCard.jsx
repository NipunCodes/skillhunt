import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";

const JobCategoryCard = () => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <div className='group bg-custom-blue-100 p-5 rounded-lg shadow-md hover:ring-3 hover:ring-custom-blue-100 hover:shadow-xl transition-shadow duration-300'>
        <div className='flex justify-between items-center text-2xl'>
          <h2 className='font-semibold'>Software Engineer</h2>
          {/* Like button - visible only on hover */}
          <button className='ml-2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300' onClick={toggleLike}>
            {liked ? (
              <FaHeart className="text-red-500" />
            ) : (
              <FaRegHeart className="text-gray-600" />
            )}
          </button>
        </div>
        <p className='text-gray-600 mt-3'>Build and maintain scalable web applications and APIs. We are looking for a skilled developer with strong experience in React, Node.js, or Python to contribute to high-impact projects. Familiarity with Git, RESTful APIs, and agile development is a plus.</p>
        <button>
          <div className='flex items-center mt-2'>
            <FaLocationDot className='text-gray-600 mr-1' />
            <span className='text-gray-600'>Colombo</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default JobCategoryCard;
