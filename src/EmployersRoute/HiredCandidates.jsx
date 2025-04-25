import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import { useSelector } from "react-redux";
import { Link } from "react-router";


const HiredCandidates = () => {
    const { user } = useSelector((state) => state.auth || { user: null })
    const axiosSecure = UseAxios()
    const { data: allHiredCandidates = [], refetch, isLoading } = useQuery({
        queryKey: ['allHiredCandidates', user],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/hired/all/Candidates/${user?.email}`)
            return data
        }
    })
    const myAllHiredCandidates = allHiredCandidates.filter(allHiredCandidate => allHiredCandidate.status === 'hired')
    console.log(myAllHiredCandidates)
    return (
        <div className="overflow-x-auto ">
            <table className="table">
                {/* head */}
                <thead>
                    <tr className="text-blue-500">
                        <th>Job Title</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        myAllHiredCandidates.map(myAllHiredCandidate =>
                            <tr className="bg-base-200" key={myAllHiredCandidate._id}>
                                <th className="text-sm font-bold text-gray-600">{myAllHiredCandidate.title}</th>
                                <td className="text-sm font-bold text-gray-600">{myAllHiredCandidate.jobSeekerName}</td>
                                <td className="text-sm font-bold text-gray-600">{myAllHiredCandidate.jobSeekerEmail}</td>
                                <td className="text-sm font-bold text-green-600">{myAllHiredCandidate.status}</td>
                                <td><Link  className="px-2 py-1 rounded-2xl text-sm font-bold text-gray-800 bg-blue-300">Profile</Link></td>

                            </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default HiredCandidates;