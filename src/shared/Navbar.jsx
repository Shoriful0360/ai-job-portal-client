import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
  const link = <>
    <li className='text-sm  text-gray-700 font-bold  px-4 py-2'>
      <Link to='/'>Home</Link>
    </li>
    <li className='text-sm  text-gray-700 font-bold  px-4 py-2'>
      <Link to='/findJobs'>FindJobs</Link>
    </li>
    <li className='text-sm  text-gray-700 font-bold  px-4 py-2'>
      <Link to='/employers'>Employers</Link>
    </li>
    <li className='text-sm  text-gray-700 font-bold  px-4 py-2'>
      <Link to='/candidates'>Candidates</Link>
    </li>
  </>
  return (
    <div className="navbar bg-gray-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box  mt-3 w-52 p-2 shadow">
            {link}
          </ul>
        </div>
        <button className='btn btn-ghost'><Link className="text-lg font-bold p-0 m-0 md:text-2xl lg:text-4xl sm:font-extrabold">JobVision AI</Link></button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">
          {link}
        </ul>
      </div>
      <div className="navbar-end my-3">
        <button className='btn btn-ghost'> <Link className='className="text-sm font-bold text-gray-600"' to="/login">SignIn</Link></button>
      </div>
    </div>
  );
};

export default Navbar;