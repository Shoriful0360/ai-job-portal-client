import { useContext } from "react";
import { AuthContext } from "../Utility/AuthProvidor";
import UseAxios from "../Utility/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";


const Wishlist = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = UseAxios()
    const { data: JobSeekerSaveJobs = [], refetch } = useQuery({
        queryKey: ['JobSeekerSaveJobs', user],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/saveJob/${user?.email}`)
            return data
        }
    })


    return (
        <div>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-blue-500">
                            <th></th>
                            <th>Title</th>
                            <th>Location</th>
                            <th> Price/Value </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            JobSeekerSaveJobs.map(JobSeekerSaveJob =>
                                <tr className="bg-base-200" key={JobSeekerSaveJob._id}>
                                    <th><img title={JobSeekerSaveJob.companyName} className="w-12 h-12 object-cover" src={JobSeekerSaveJob.companyLogo } alt="" /></th>                                  
                                    <td className="text-sm font-bold text-gray-600">{JobSeekerSaveJob.title}</td>
                                    <td className="text-sm font-bold text-gray-600">{JobSeekerSaveJob.location}</td>
                                    <td className="text-sm font-bold text-gray-600">{JobSeekerSaveJob.minSalary}$ - {JobSeekerSaveJob.maxSalary}$</td>
                                    <td><Link className="px-2 py-1 rounded-2xl text-sm font-bold text-gray-800 bg-blue-300" to={`/job-details/${JobSeekerSaveJob.jobId}`}>Details</Link></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Wishlist;