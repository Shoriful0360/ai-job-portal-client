import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import JobCard from "../component/Homepage/JobCard";
import { FaFilter } from "react-icons/fa";
import { useState } from "react";







const FindJob = () => {
    const [division, setDivision] = useState('')
    const [jobType, setJobType] = useState('')
    const [search, setSearch] = useState('')
    const axiosSecure = UseAxios()
    const { data: verifiedJobs = [], refetch, isLoading } = useQuery({
        queryKey: ['verifiedJobs', division, jobType, search],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/verifyJob?division=${division}&jobType=${jobType}&search=${search}`)
            return data
        }
    })
    const allVerifiedJob = verifiedJobs.sort((first, second) => new Date(second.jobPostTime) - new Date(first.jobPostTime))

    return (
        <div className={allVerifiedJob.length < 12?"min-h-screen sm:px-10 px-4":"sm:px-10 px-4" } >
            <div className="sm:my-10">
                <h3 className='text-3xl font-bold text-center my-3'>
                    Explore All Job Opportunities
                </h3>
                <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>
                    Explore all available job listings in one place! From tech to teaching, startups to enterprises — we’ve got something for everyone. <br className="hidden sm:inline" /> Start scrolling, find your fit, and apply with confidence.
                </p>
            </div>
            <div className="flex items-center gap-2 justify-center  my-7">

                {/* Search ber */}
                <div className="">
                    <label className="input input-bordered flex mx-auto my-2 items-center gap-2 bg-[#EDE8E0] shadow-sm text-black">
                        <input onChange={e => setSearch(e.target.value)} type="text" className="sm:w-96 " placeholder="Search By Job Title" />
                        <button className="text-sm font-bold bg-[#A59488] text-black hover:text-white px-2 py-1 rounded-sm">search</button>
                    </label>
                </div>
                {/* Filter job */}
                <div className="">
                    <div className="dropdown dropdown-end justify-center items-center">
                        <div tabIndex={0} role="button" className=" flex items-center gap-1 px-2 py-1 border bg-[#EDE8E0] shadow-sm border-gray-300 rounded-sm  btn-circle avatar">
                            <p><FaFilter /></p>
                            <p className="text-sm font-bold py-1">Filter</p>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#EDE8E0] rounded-box z-[1]  w-52  shadow">
                            <li className='text-sm  text-gray-700 font-bold'>
                                <label className=" fieldset-label text-xm p-0 m-0 font-semibold text-gray-700">Division</label>
                                <select onChange={e => setDivision(e.target.value)} type="text" name="division">
                                    <option ></option>
                                    <option value="Dhaka">Dhaka</option>
                                    <option value="Chittagong">Chittagong</option>
                                    <option value="Khulna">Khulna</option>
                                    <option value="Rajshahi">Rajshahi</option>
                                    <option value="Rangpur">Rangpur</option>
                                    <option value="Barishal">Barishal</option>
                                    <option value="Mymonsingh">Mymonsingh</option>
                                    <option value="Sylhet">Sylhet</option>
                                </select>
                            </li>
                            <li className='text-sm  text-gray-700 font-bold'>
                                <label className=" fieldset-label text-xm p-0 m-0 font-semibold text-gray-700 ">Job Type</label>
                                <select onChange={e => setJobType(e.target.value)} type="text" name="jobType"   >
                                    <option ></option>
                                    <option value="Part Time">Part Time</option>
                                    <option value="Full Time">Full Time</option>
                                    <option value="Remote">Remote</option>
                                    <option value="Internship">Internship</option>
                                </select>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 pb-18">
                {
                    allVerifiedJob.map((job, index) => <JobCard index={index} key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default FindJob;