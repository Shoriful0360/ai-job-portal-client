import { useContext } from "react";
import { AuthContext } from "../Utility/AuthProvidor";
import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import { Link } from "react-router";
import LoadingSpinner from "../shared/LoadingSpinner";


const MyAppliedJob = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const { data: myApplyJobs = [], refetch, isLoading } = useQuery({
        queryKey: ['myApplyJobs', user],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/applyJob/${user?.email}`)
            return data
        }
    })
    if (isLoading) return <LoadingSpinner />
    return (
        <div className={myApplyJobs.length < 9 ? 'min-h-screen':''}>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-[#857569]">

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
                                <tr className="bg-[#EDE8E0]" key={myApplyJob._id}>

                                    <td className="text-sm font-bold text-gray-600">{myApplyJob.companyName}</td>
                                    <td className="text-sm font-bold text-gray-600">{myApplyJob.title}</td>
                                    <td className="text-sm font-bold text-gray-600">{myApplyJob.location},{myApplyJob.division}</td>
                                    <td className="text-sm font-bold text-gray-600">{myApplyJob.minSalary}$ - {myApplyJob.maxSalary}$</td>
                                    <td className="text-sm font-bold text-gray-600">{myApplyJob.status}</td>
                                    <td><Link className='text-xs font-bold px-1 py-1 rounded-xl bg-[#857569] text-white hover:text-black hover:bg-[#dad2c5]' to={`/job-details/${myApplyJob.jobId}`}>ViewJob</Link></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppliedJob;