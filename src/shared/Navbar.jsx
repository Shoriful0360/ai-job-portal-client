import React from 'react';

const Navbar = () => {
 const link=<>
    <li><a>Homes</a></li>
      <li>
        <details>
          <summary>FindJobs</summary>
          <ul className="p-2">
            <li><a>All Jobs</a></li>
            <li><a>Job Details</a></li>
            <li><a>Job Dashboard</a></li>
          </ul>
        </details>
      </li>
      <li><a>Candidate</a></li>
 </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Job-Hunter</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
   {link}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">SignIn</a>
  </div>
</div>
    );
};

export default Navbar;