import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router';


const JobCard = () => {
    return (
        <div className="card group relative bg-gray-200  border-gray-200 border border-spacing-0.5 border-b-fuchsia-200">
            <button className='text-blue-700 font-semibold btn w-fit absolute top-2 left-2 bg-blue-100'><i>FULL TIME</i></button>
           
        <figure className="px-10 pt-10">
          <img
            src="https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png"
            alt="image"
            className="w-28 h-28 group-hover:scale-105 transition-all group-hover:duration-700 rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Product  Redesign</h2>
          <p>2708 Scenic Way, IL 64552</p>
          <div className="card-actions mt-4">
          <Link to={'/job-details'}>
          <button className="btn bg-blue-200 text-blue-700 hover:bg-blue-700 font-bold hover:text-white border-2 text-[#26AE61 ]">APPLY NOW</button>
          </Link>
          </div>
        </div>
      </div>
    );
};

export default JobCard;