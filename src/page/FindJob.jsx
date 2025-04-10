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
        <div className="">
            <div className="flex items-center gap-2 justify-center  my-7">

                {/* Search ber */}
                <div className="">
                    <label className="input input-bordered flex mx-auto my-2 items-center gap-2 text-black">
                        <input onChange={e => setSearch(e.target.value)} type="text" className="sm:w-96 " placeholder="Search By Job Title" />
                        <button>search</button>
                    </label>
                </div>
                {/* Filter job */}
                <div className="">
                    <div className="dropdown dropdown-end justify-center items-center">
                        <div tabIndex={0} role="button" className=" flex items-center gap-1 px-2 py-1 border border-gray-200 hover:bg-gray-200 rounded-sm btn-circle avatar">
                            <p><FaFilter /></p>
                            <p className="text-sm font-bold py-1">Filter</p>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1]  w-52  shadow">
                            <li className='text-sm  text-gray-700 font-bold'>
                                <label className=" fieldset-label text-xm p-0 m-0 font-semibold text-gray-700 bg-white">Division</label>
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
                                <label className=" fieldset-label text-xm p-0 m-0 font-semibold text-gray-700 bg-white">Job Type</label>
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

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mb-10">
                {
                    allVerifiedJob.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default FindJob;