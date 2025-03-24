import { useContext } from "react";
import { AuthContext } from "../Utility/AuthProvidor";
import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import { Link } from "react-router";


const MyAppliedJob = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const { data: myApplyJobs = [], refetch } = useQuery({
        queryKey: ['myApplyJobs', user],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/applyJob/${user?.email}`)
            return data
        }
    })
    console.log(myApplyJobs)
    return (
        <div>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-blue-500">
                          
                            <th>Name</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th> Price/Value </th>
                            <th> Status </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            myApplyJobs.map(myApplyJob =>
                                <tr className="bg-base-200" key={myApplyJob._id}>
                                    
                                    <td className="text-sm font-bold text-gray-600">{myApplyJob.companyName}</td>
                                    <td className="text-sm font-bold text-gray-600">{myApplyJob.title}</td>
                                    <td className="text-sm font-bold text-gray-600">{myApplyJob.location}</td>
                                    <td className="text-sm font-bold text-gray-600">{myApplyJob.minSalary}$ - {myApplyJob.maxSalary}$</td>
                                    <td>
                                        {
                                            myApplyJob.status === 'pending' &&
                                            <span className="text-xs font-bold text-blue-500">
                                                pending
                                            </span>

                                        }
                                        {
                                            myApplyJob.status === 'Accepted' &&
                                            <span className="text-xs font-bold text-blue-500">
                                                Listing
                                            </span>

                                        }
                                        {
                                            myApplyJob.status === 'rejected' &&
                                            <span className="text-xs font-bold text-red-700">
                                                Rejected
                                            </span>
                                        }
                                        {
                                            myApplyJob.status === 'Hired' &&
                                            <span className="text-xs font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
                                                Hired
                                            </span>
                                        }
                                    </td>
                                    <td><Link className='text-xs font-bold  text-blue-500 px-1 py-1 rounded-xl bg-blue-200' to={`/job-details/${myApplyJob.jobId}`}>ViewJob</Link></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppliedJob;