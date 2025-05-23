import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';
import { FaMoneyBillWave } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const JobCard = ({job}) => {
 
  
  
  return (
    <Link to={`/job-details/${job?._id}`}>
      <div className="card group bg-gray-200 p-3 h-full border-gray-200 border border-spacing-0.5 shadow-lg border-b-fuchsia-200">
        <div className='flex justify-between items-center '>
          <img className='w-20 h-20 border-2 border-gray-400 rounded-xl' src={job?.image} alt="" />
          <p className='  mb-12 rounded-xl px-2 py-1 bg-blue-100 text-sm font-bold text-blue-500'><i>{job?.jobType}</i></p>
        </div>
        <p className='text-xl font-bold my-4'>{job?.title}</p>
        <div className='flex justify-between items-center mt-auto'>
          <div className='text-sm font-semibold flex items-center gap-2 text-gray-700 '><span><FaMoneyBillWave /></span> {job?.minSalary} - {job?.maxSalary}/Month</div>
          <div className='text-sm font-semibold flex items-center gap-2 text-gray-700 '><span><FaLocationDot /></span> {job?.location}</div>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;