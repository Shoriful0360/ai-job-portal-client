
import { Link, useParams } from "react-router";
import UseAxios from "../Utility/UseAxios";
import { useQuery } from "@tanstack/react-query";



const AllCandidates = () => {
    
    return (
        <div className={allCandidates.length < 11 ? 'min-h-screen' : ''} >
            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                {/* All Candidates */}
                <input type="radio" name="my_tabs_3" className="tab font-bold text-[#857569] " aria-label="All Candidates" defaultChecked />
                <div className="tab-content bg-[#EDE8E0] border-base-300 p-6">
                    <div className="overflow-x-auto border-2 border-gray-200">

                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#EDE8E0]">
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
                                        <tr className="bg-[#EDE8E0]" key={allCandidate._id}>
                                            <th className="text-sm font-bold text-gray-600">{allCandidate.jobSeekerName}</th>
                                            <td className="text-sm font-bold text-gray-600">{allCandidate.jobSeekerEmail}</td>
                                            <td className="text-sm font-bold text-gray-600">{allCandidate.experience}</td>
                                            <td className='text-gray-600 font-bold'>{allCandidate.status}</td>
                                            <td><Link to={`/dashboard/myAddJob/candidate/resume/${allCandidate._id}`} className="px-2 py-1 rounded-2xl text-sm font-bold text-white  hover:text-black hover:bg-[#dad2c5] bg-[#857569]">Profile</Link></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Listed Candidates */}
                <input type="radio" name="my_tabs_3" className="tab font-bold text-[#857569]" aria-label="Listed" />
                <div className="tab-content bg-[#EDE8E0] border-base-300 p-6">
                    <div className="overflow-x-auto border-2 border-gray-200">

                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#EDE8E0]">
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
                                        <tr className="bg-[#EDE8E0]" key={listedCandidate._id}>
                                            <th className="text-sm font-bold text-gray-600">{listedCandidate.jobSeekerName}</th>
                                            <td className="text-sm font-bold text-gray-600">{listedCandidate.jobSeekerEmail}</td>
                                            <td className="text-sm font-bold text-gray-600">{listedCandidate.experience}</td>
                                            <td className='text-gray-600 font-bold'>{listedCandidate.status}</td>
                                            <td><Link to={`/dashboard/myAddJob/candidate/resume/${listedCandidate._id}`} className="px-2 py-1 rounded-2xl text-sm font-bold text-white  hover:text-black hover:bg-[#dad2c5] bg-[#857569]">Profile</Link></td>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Hired Candidates */}
                <input type="radio" name="my_tabs_3" className="tab font-bold text-[#857569]" aria-label="Hired" />
                <div className="tab-content bg-[#EDE8E0] border-base-300 p-6">
                    <div className="overflow-x-auto border-2 border-gray-200">

                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className="bg-[#EDE8E0]">
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
                                        <tr className="bg-[#EDE8E0]" key={hiredCandidate._id}>
                                            <th className="text-sm font-bold text-gray-600">{hiredCandidate.jobSeekerName}</th>
                                            <td className="text-sm font-bold text-gray-600">{hiredCandidate.jobSeekerEmail}</td>
                                            <td className="text-sm font-bold text-gray-600">{hiredCandidate.experience}</td>
                                            <td className='text-gray-600 font-bold'>{hiredCandidate.status}</td>
                                            <td><Link to={`/dashboard/myAddJob/candidate/resume/${hiredCandidate._id}`} className="px-2 py-1 rounded-2xl text-sm font-bold text-white  hover:text-black hover:bg-[#dad2c5] bg-[#857569]">Profile</Link></td>
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