
import { Link, useParams } from "react-router";
import UseAxios from "../Utility/UseAxios";
import { useQuery } from "@tanstack/react-query";



const AllCandidates = () => {
    const { id } = useParams()
    const axiosSecure = UseAxios()

    const { data: allCandidates = [], refetch } = useQuery({
        queryKey: ['allCandidates', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/singleJob/all/Candidates/${id}`)
            return data
        }
    })

    const listedCandidates = allCandidates.filter(allCandidate => allCandidate.status === 'listed')
    const hiredCandidates = allCandidates.filter(allCandidate => allCandidate.status === 'hired')
    return (
        <div>
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                {/* All Candidates */}
                <input type="radio" name="my_tabs_3" className="tab" aria-label="All Candidates" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="overflow-x-auto border-2 border-gray-200">

                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-blue-500">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Experience</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    allCandidates.map(allCandidate =>
                                        <tr className="bg-base-200" key={allCandidate._id}>
                                            <th className="text-sm font-bold text-gray-600">{allCandidate.jobSeekerName}</th>
                                            <td className="text-sm font-bold text-gray-600">{allCandidate.jobSeekerEmail}</td>
                                            <td className="text-sm font-bold text-gray-600">{allCandidate.experience}</td>
                                            <td className={
                                                allCandidate.status === 'pending' && "text-sm font-bold text-gray-600" ||
                                                allCandidate.status === 'listed' && "text-sm font-bold text-blue-600" ||
                                                allCandidate.status === 'hired' && "text-sm font-bold text-green-600" ||
                                                allCandidate.status === 'reject' && "text-sm font-bold text-red-600"
                                            }>{allCandidate.status}</td>
                                            <td><Link to={`/dashboard/myAddJob/candidate/resume/${allCandidate._id}`}  className="px-2 py-1 rounded-2xl text-sm font-bold text-gray-800 bg-blue-300">Profile</Link></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Listed Candidates */}
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Listed" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="overflow-x-auto border-2 border-gray-200">

                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-blue-500">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Experience</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    listedCandidates.map(listedCandidate =>
                                        <tr className="bg-base-200" key={listedCandidate._id}>
                                            <th className="text-sm font-bold text-gray-600">{listedCandidate.jobSeekerName}</th>
                                            <td className="text-sm font-bold text-gray-600">{listedCandidate.jobSeekerEmail}</td>
                                            <td className="text-sm font-bold text-gray-600">{listedCandidate.experience}</td>
                                            <td className={
                                                listedCandidate.status === 'pending' && "text-sm font-bold text-gray-600" ||
                                                listedCandidate.status === 'listed' && "text-sm font-bold text-blue-600" ||
                                                listedCandidate.status === 'hired' && "text-sm font-bold text-green-600" ||
                                                listedCandidate.status === 'rejected' && "text-sm font-bold text-red-600"
                                            }>{listedCandidate.status}</td>
                                            <td><Link to={`/dashboard/myAddJob/candidate/resume/${listedCandidate._id}`}   className="px-2 py-1 rounded-2xl text-sm font-bold text-gray-800 bg-blue-300">Profile</Link></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Hired Candidates */}
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Hired" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <div className="overflow-x-auto border-2 border-gray-200">

                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="text-blue-500">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Experience</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    hiredCandidates.map(hiredCandidate =>
                                        <tr className="bg-base-200" key={hiredCandidate._id}>
                                            <th className="text-sm font-bold text-gray-600">{hiredCandidate.jobSeekerName}</th>
                                            <td className="text-sm font-bold text-gray-600">{hiredCandidate.jobSeekerEmail}</td>
                                            <td className="text-sm font-bold text-gray-600">{hiredCandidate.experience}</td>
                                            <td className={
                                                hiredCandidate.status === 'pending' && "text-sm font-bold text-gray-600" ||
                                                hiredCandidate.status === 'listed' && "text-sm font-bold text-blue-600" ||
                                                hiredCandidate.status === 'hired' && "text-sm font-bold text-green-600" ||
                                                hiredCandidate.status === 'rejected' && "text-sm font-bold text-red-600"
                                            }>{hiredCandidate.status}</td>
                                            <td><Link to={`/dashboard/myAddJob/candidate/resume/${hiredCandidate._id}`}  className="px-2 py-1 rounded-2xl text-sm font-bold text-gray-800 bg-blue-300">Profile</Link></td>
                                        </tr>)
                                }
                            </tbody>
                           
                        </table>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default AllCandidates;