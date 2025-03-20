import { useContext } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { Link, NavLink, Outlet } from "react-router";
import { AuthContext } from "../Utility/AuthProvidor";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
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
                            <li><NavLink to='/dashboard/adminProfile'>Admin Profile</NavLink></li>
                            <li><NavLink to='/dashboard/manageJob'>Manage Job</NavLink></li>
                            <li><NavLink to='/dashboard/manageUsers'>Manage Users</NavLink></li>
                            <li><NavLink to='/dashboard/manageReview'>Manage Review</NavLink></li>
                            {/* Employers Route */}
                            <li><NavLink to='/dashboard/employerProfile'>Employer Profile</NavLink></li>
                            <li><NavLink to='/dashboard/addJob'>Add Job</NavLink></li>
                            <li><NavLink to='/dashboard/myAddJob'>My Add Job</NavLink></li>
                            <li><NavLink to='/dashboard/CandidatesRequest'>Candidates Request</NavLink></li>
                            <li><NavLink to='/dashboard/hiredCandidates'>Hired Candidates</NavLink></li>
                            {/* Job Seeker Route */}
                            <li><NavLink to='/dashboard/myProfile'>My Profile</NavLink></li>
                            <li><NavLink to='/dashboard/myAppliedJob'>My Applied Job</NavLink></li>
                            <li><NavLink to='/dashboard/myWishlist'>My WishList</NavLink></li>
                            <li><NavLink to='/dashboard/myReview'>My Review</NavLink></li>
                            <hr className="my-4 h-1 bg-gray-600" />
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/findJobs'>FindJobs</NavLink></li>
                            <li><NavLink to='/employers'>Employers</NavLink></li>
                            <li><NavLink to='/candidates'>Candidates</NavLink></li>
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