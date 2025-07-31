import React from 'react'
import DP from '../assets/profile-pic.jpg'

const UserReviewCard = () => {

  return (
      <div className='bg-custom-blue-200 border border-blue-200 shadow-[5px_5px_5px_hsla(244,100%,10%,0.493)] p-10 max-w-70 text-center rounded-xl m-10 inline-block'>
        <img src={DP} alt="profile-pic" className='rounded-full' />
        <h1 className="text-3xl font-semibold text-black font-sans mt-5">USER</h1>
        <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas error, nobis rem doloremque illum praesentium nesciunt perferendis quos voluptatem dolorum?</p>
      </div>
  )
}

export default UserReviewCard