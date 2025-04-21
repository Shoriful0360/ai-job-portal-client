import { useContext } from "react";
import { AuthContext } from "../Utility/AuthProvidor";
import UseAxios from "../Utility/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";
import { BsCreditCard2Back } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import { VscGitStashApply } from "react-icons/vsc";
import { FaMoneyBillWave } from "react-icons/fa";
import Swal from "sweetalert2";
import LoadingSpinner from "../shared/LoadingSpinner";


const MyAddJob = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const { data: allMyAddJobs = [], refetch, isLoading } = useQuery({
        queryKey: ['allMyAddJobs', user],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all/verifyJob/${user?.email}`)
            return data
        }
    })
    const myAddJobs = allMyAddJobs.sort((first, second) => new Date(second.jobPostTime) - new Date(first.jobPostTime))
  
    if(isLoading) return <LoadingSpinner/>

    // job delete
    const handleDelete = async (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You delete This Job!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
              }).then(async(result) => {
                if (result.isConfirmed) {
                await axiosSecure.delete(`/deleteJob/${id}`)
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your job has been deleted.",
                    icon: "success"
                  });
                  refetch()
                }
              });
        } catch {

        }
    }

    return (
        <div className="lg:grid lg:grid-cols-3 gap-5">
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
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"><FaLocationDot />{myAddJob.location},{myAddJob.division}</p>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"><FaMoneyBillWave />{myAddJob.minSalary}k - {myAddJob.maxSalary}k / Month</p>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"><GiDuration />{myAddJob.jobTime}</p>
                            </div>
                            <div className="sm:mr-7">
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold sm:mr-3" > <VscGitStashApply /> Candidates : {
                                    myAddJob.applyCandidate > 0 ? <span className="px-2 py-1 bg-blue-800 rounded-full text-xs font-semibold text-white">{myAddJob.applyCandidate}</span> : <span className="px-2 py-1 bg-blue-800 rounded-full text-xs font-semibold text-white">0</span>
                                }</p>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"> <BsCreditCard2Back />{myAddJob.jobType}</p>
                                <p className="flex text-gray-600 items-center text-sm my-1 sm:my-3 gap-3 font-bold"><MdOutlineAccessTimeFilled />{myAddJob.deadline}</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <p className="sm:px-8 px-5 mx-auto text-center text-sm my-1 sm:my-1 bg-red-200 text-white rounded-xl py-1 font-bold">
                                <button onClick={() => handleDelete(myAddJob._id)} className="text-red-600">Delete</button>
                            </p>
                            <p className="sm:px-8 px-5 mx-auto text-center text-sm my-1 sm:my-1 bg-green-200 text-white rounded-xl py-1 font-bold">
                                <Link to={`/dashboard/myAddJob/updatePage/${myAddJob._id}`} className="text-green-600">Update</Link>
                            </p>
                            <p className="sm:px-8 px-5 mx-auto text-center text-sm my-1 sm:my-1 bg-blue-200 text-white rounded-xl py-1 font-bold">
                            <Link to={`/dashboard/myAddJob/candidate/${myAddJob._id}`} className="text-blue-600">View Candidates</Link>
                            </p>
                        </div>
                    </div>)}
        </div>
    );
};

export default MyAddJob;