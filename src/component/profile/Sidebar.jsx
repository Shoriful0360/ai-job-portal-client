
import { BsCheckCircle } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { MdErrorOutline } from "react-icons/md";
import useRole from "../../Utility/useRole";
import { HiLightBulb } from "react-icons/hi";
import LoadingSpinner from "../../shared/LoadingSpinner";
const Sidebar = () => {
  const{role,isLoading}=useRole()
  if(isLoading) return <LoadingSpinner/>
  const{name,email,number,_id,photoUrl}=role || {}
    return (
        <div className="w-full  bg-[#1b132a] min-h-screen rounded-xl p-6 shadow-md">
        <div className="flex flex-col items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img src={photoUrl} alt="profile" />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-bold">{name}</h2>
          <p className="text-sm opacity-80">{`JVI-${_id?.slice(-5)}`}</p>
          <p className="text-sm">{email}</p>
          <p className="text-sm text-green-400">+88{number}</p>
        </div>
        <div className="mt-6">
          <p className="text-sm flex justify-between">Complete your profile <span>100%</span></p>
          <progress className="progress progress-success w-full mt-1" value="100" max="100"></progress>
        </div>
        <ul className="menu mt-6  text-[#817691] space-y-6 ">
          {/* MY profile */}
              <NavLink to={'my-profile'} className="text-2xl flex justify-between items-center p-2 gap-4">
               
                <p className="flex items-center gap-3">  <span><FaRegUserCircle /></span> My Profile</p>
                <span className="bg-green-400 w-6 ml-4 text-white   h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
              </NavLink>
              {/* Additional Info */}
              <NavLink to={'additional-info'} className="text-2xl p-2 flex justify-between items-center gap-4">
              
                <p className="flex items-center gap-3"> 
                  <span><MdErrorOutline /></span>Additional Info</p>
                <span className="bg-green-400 w-6 ml-4 text-white   h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
              </NavLink>
              {/* Address */}
              <NavLink to={'address'} className="text-2xl p-2 flex justify-between items-center gap-4">
               
                <p className="flex items-center gap-3">  <span><CiLocationOn /></span>Address</p>
                <span className="bg-green-400 w-6 ml-4 text-white   h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
              </NavLink>
            
              {/* Important LInk */}
              <NavLink to={'important-link'} className="text-2xl p-2 flex justify-between items-center gap-4">
               
                <p className="flex items-center gap-3"> <span><FiEdit /></span>Important Link</p>
                <span className="bg-green-400 w-6 ml-4 text-white  h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
              </NavLink>
              {role?.role==="Job Seeker" &&
              <>
                 {/* Skill  set */}
                  {/* Education */}
              <NavLink to={'education'} className="text-2xl p-2 flex justify-between items-center gap-4">
              
              <p className="flex items-center gap-3">   <span><IoBookOutline /></span>Education</p>
              <span className="bg-green-400 w-6 ml-4 text-white  h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
            </NavLink>

                 <NavLink to={'skill-set'} className="text-2xl p-2 flex justify-between items-center gap-4">
               
               <p className="flex items-center gap-3"> <span><HiLightBulb /></span>Skill Set</p>
               <span className="bg-green-400 w-6 ml-4 text-white  h-6 rounded-full flex justify-center"><BsCheckCircle /></span>
             </NavLink>
              </>
              }
           
            
        </ul>
      </div>
    );
};

export default Sidebar;