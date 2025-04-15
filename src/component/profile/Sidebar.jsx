
import { BsCheckCircle } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { MdErrorOutline } from "react-icons/md";
const Sidebar = () => {
    return (
        <div className="w-full  bg-[#1b132a] rounded-xl p-6 shadow-md">
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src="https://i.ibb.co/WxX0WkY/profile-img.png" alt="profile" />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-bold">MD Shoriful Islam</h2>
          <p className="text-sm opacity-80">WEB10-1221</p>
          <p className="text-sm">shorifulbba0360@gmail.com</p>
          <p className="text-sm text-green-400">+8801307177507</p>
        </div>
        <div className="mt-6">
          <p className="text-sm flex justify-between">Complete your profile <span>100%</span></p>
          <progress className="progress progress-success w-full mt-1" value="100" max="100"></progress>
        </div>
        <ul className="menu mt-6  text-[#817691] space-y-6 ">
        
              <NavLink to={'/my-profile'} className="text-2xl flex justify-between items-center gap-4">
               
                <p className="flex items-center gap-3">  <span><FaRegUserCircle /></span> My Profile</p>
                <span className="bg-green-400 w-6 ml-4 text-white   h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
              </NavLink>
              <NavLink to={'/additional-info'} className="text-2xl flex justify-between items-center gap-4">
              
                <p className="flex items-center gap-3"> 
                  <span><MdErrorOutline /></span>Additional Info</p>
                <span className="bg-green-400 w-6 ml-4 text-white   h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
              </NavLink>
              <NavLink to={'/address'} className="text-2xl flex justify-between items-center gap-4">
               
                <p className="flex items-center gap-3">  <span><CiLocationOn /></span>Address</p>
                <span className="bg-green-400 w-6 ml-4 text-white   h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
              </NavLink>
              <NavLink to={'/education'} className="text-2xl flex justify-between items-center gap-4">
              
                <p className="flex items-center gap-3">   <span><IoBookOutline /></span>Education</p>
                <span className="bg-green-400 w-6 ml-4 text-white  h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
              </NavLink>
              <NavLink to={'/important-link'} className="text-2xl flex justify-between items-center gap-4">
               
                <p className="flex items-center gap-3"> <span><FiEdit /></span>Important Link</p>
                <span className="bg-green-400 w-6 ml-4 text-white  h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
              </NavLink>
            
        </ul>
      </div>
    );
};

export default Sidebar;