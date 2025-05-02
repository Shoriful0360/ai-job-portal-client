import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Utility/AuthProvidor';
import pic from '../../public/Photo/icons8-permanent-job-96.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/authSlice';
const Navbar = () => {
  const dispatch=useDispatch()
  const{user}=useSelector((state)=>state.auth || {user:null})

// const{user}=useContext(AuthContext)
  const link = <>
    <li className='text-sm bg-blue-500 bg-clip-text text-transparent font-bold  px-4 py-2'>
      <NavLink to='/'>Home</NavLink>
    </li>
    <li className='text-sm bg-blue-500 bg-clip-text text-transparent font-bold  px-4 py-2'>
      <NavLink to='/findJobs'>FindJobs</NavLink>
    </li>
    <li className='text-sm bg-blue-500 bg-clip-text text-transparent font-bold  px-4 py-2'>
      <NavLink to='/employers'>Employers</NavLink>
    </li>
    <NavLink to='/chatbot' className='flex items-center gap-1'>
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.832L3 20l1.52-4.557A8.973 8.973 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
  ChatBot
</NavLink>

    
  </>
  // const { user, logout } = useContext(AuthContext)
 
  return (
    <div className="navbar fixed backdrop-brightness-100 backdrop-blur-3xl z-50">
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
        <button className='flex items-center sm:gap-2'>
          <img className='w-8 sm:w-10' src={pic} alt="" />
          <Link className="text-lg font-bold p-0 m-0 md:text-2xl  lg:text-4xl sm:font-extrabold bg-gradient-to-r from-blue-600 hidden sm:block to-blue-900 bg-clip-text ">
            <i>JobVision AI</i>
          </Link>
        </button>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">
          {link}
        </ul>
      </div>
      <div className="navbar-end my-3">


        {
          user ?
            <span className='flex justify-center items-center'>
              <div className="dropdown dropdown-end justify-center items-center">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 hidden sm:block rounded-full ">
                    <img
                      referrerPolicy='noreferrer'
                      title={user?.displayName}
                      alt=""
                      src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] pt3 w-52 p-2 shadow">
                  <li className='text-sm  text-gray-700 font-bold'><Link to={'/candidate-profile'}>Profile</Link></li>
                  <li className='text-sm  text-gray-700 font-bold'><Link to="/dashboard">Dashboard</Link></li>
                </ul>
              </div>
              <Link onClick={()=>dispatch(logout())} className="btn  text-sm font-bold text-gray-600 ml-2">log Out</Link>
            </span>
            :
            <button className='btn '> <Link className='className="text-sm font-bold text-gray-600"' to="/login">SignIn</Link></button>
        }


      </div>
    
    </div>
  );
};

export default Navbar;