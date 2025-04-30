import { useContext } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, NavLink, Outlet } from "react-router";
import useRole from "../Utility/useRole";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useSelector } from "react-redux";



const Dashboard = () => {
    const{user}=useSelector((state)=>state.auth)
const{role,isLoading}=useRole()
if(isLoading) return <LoadingSpinner/>
console.log(role?.role)
    


    return (
        <div className="">

            <div className="flex justify-between px-8 py-5 ">
                <div className="drawer drawer-end z-50">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="flex items-center gap-5">
                        <div className="drawer-content">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-4" className="btn font-bold text-2xl"><TiThMenuOutline /></label>
                        </div>
                        <div><Link to='/' className="text-lg font-bold p-0 m-0 md:text-2xl lg:text-4xl sm:font-extrabold">JobVision AI</Link></div>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            {/* Sidebar content here */}
                            {/* Admin Route */}

                            {

                                role?.role === "Admin" && <div>
                                     <li><NavLink className='text-sm font-bold' to='/dashboard/adminProfile'>Admin Profile</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/manageJob'>Manage Job</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/manageUsers'>Manage Users</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/manageReview'>Manage Review</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to="/dashboard/contactUs">Contact Request</NavLink></li>
                                </div>

                            }

                            {/* Employers Route */}
                            {
                                role?.role === 'Employer' &&
                                <div>

                                    <li><NavLink className='text-sm font-bold' to='/dashboard/employerProfile'>Employer Profile</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/addJob'>Add Job</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/myAddJob'>My Add Job</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/CandidatesRequest'>Candidates Request</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/hiredCandidates'>Hired Candidates</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/message'>Message</NavLink></li>
                                </div>
                            }
                            {/* Job Seeker Route */}
                            {
                                role?.role === 'Job Seeker' &&
                                <div>
                                    <li><NavLink className='text-sm font-bold' to='/dashboard/myProfile'>My Profile</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/myAppliedJob'>My Applied Job</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/myWishlist'>My WishList</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/dashboard/myReview'>My Review</NavLink></li>
                                </div>
                            }



                            <hr className="my-4 h-1 bg-gray-600" />
                            <li><NavLink className='text-sm font-bold' to='/'>Home</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/findJobs'>FindJobs</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to='/employers'>Employers</NavLink></li>
                            <li><NavLink className='text-sm font-bold' to="/suggestJob">Suggest Job</NavLink></li>

                        </ul>
                    </div>
                </div>
                <div>
                    {
                        user &&
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

                            </div>

                        </span>

                    }
                </div>
            </div>

            <div className="mx-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;