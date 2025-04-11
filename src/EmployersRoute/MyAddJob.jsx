import { useContext } from "react";
import { AuthContext } from "../Utility/AuthProvidor";
import UseAxios from "../Utility/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { BsCalendar3, BsCreditCard2Back } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import { VscGitStashApply } from "react-icons/vsc";
import { IoSave } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { AiFillExperiment } from "react-icons/ai";

const MyAddJob = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const { data: allMyAddJobs = [], refetch } = useQuery({
        queryKey: ['allMyAddJobs', user],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all/verifyJob/${user?.email}`)
            return data
        }
    })

    const myAddJobs = allMyAddJobs.sort((first, second) => new Date(second.jobPostTime) - new Date(first.jobPostTime))
 
    return (
        <div className="lg:grid lg:grid-cols-2 gap-5">
            {
                myAddJobs.map(myAddJob =>
                    <div key={myAddJob._id} className=" border-2 border-gray-700 p-4 rounded-xl my-4  mt-auto">
                        <div className="sm:flex  items-center mt-auto">
                            <div>
                                <img className='w-20 h-20 border-2 border-gray-400 rounded-xl' src={myAddJob?.image} alt="" />
                            </div>
                            <div className="sm:ml-5">
                                <h3 className="font-extrabold text-xl ">{myAddJob.name}</h3>
                                <p className="text-lg font-bold text-gray-600">{myAddJob.title}</p>
                                <p className="text-lg font-bold text-gray-600">{myAddJob.category}</p>
                            </div>
                        </div>

                        <div className="sm:flex justify-between items-center mt-3 ">
                            <div>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"><FaLocationDot />{myAddJob.location}</p>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"><FaMoneyBillWave />{myAddJob.minSalary}k - {myAddJob.maxSalary}k / Month</p>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"><GiDuration />{myAddJob.jobTime}</p>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"><AiFillExperiment />{myAddJob.experience}</p>
                            </div>
                            <div className="sm:mr-7">
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold sm:mr-3" > <VscGitStashApply /> Candidates : {
                                    myAddJob.applyCandidate > 0 ? <span className="px-2 py-1 bg-blue-800 rounded-full text-xs font-semibold text-white">{myAddJob.applyCandidate}</span> : <span className="px-2 py-1 bg-blue-800 rounded-full text-xs font-semibold text-white">0</span>
                                }</p>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"> <BsCreditCard2Back />{myAddJob.jobType}</p>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"><MdOutlineAccessTimeFilled />{myAddJob.deadline}</p>
                                <p className="mr-40 sm:mr-0 text-sm my-1 sm:my-3 bg-blue-500 text-white rounded-xl p-2 font-bold"><Link className="ml-4">View Candidates</Link></p>
                            </div>
                        </div>


                    </div>)
            }
        </div>
    );
};

export default MyAddJob;