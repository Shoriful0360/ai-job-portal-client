import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import { SiVerizon } from "react-icons/si";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";

const ManageJob = () => {
    const axiosSecure = UseAxios()
    const { data: pendingJobs = [], refetch } = useQuery({
        queryKey: ['pendingJobs'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/pendingJob')
            return data
        }
    })
    const allPendingJob = pendingJobs.sort((first, second) => new Date(second.jobPostTime) - new Date(first.jobPostTime))
    // reject pending job
    const handleReject = async (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You rejected This Job!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Reject it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosSecure.patch(`/rejectJob/${id}`)
                    Swal.fire({
                        title: "Rejected This Job!",
                        icon: "success",
                        draggable: true
                    });
                    refetch()
                }
            });

        } catch (error) {
        }

    }
    // Accept pending job & Post verified Job Collection
    const handleVerify = async (id) => {

        try {
            await axiosSecure.patch(`/acceptJob/${id}`)
            refetch()
            const { data } = await axiosSecure.get(`/pendingJob/${id}`)
            const updateData = {
                ...data,
                jobPostTime : new Date(),
                applyCandidate : 0
            }
            await axiosSecure.post('/verifyJob', updateData)
            Swal.fire({
                title: "Job Verified Successfully!",
                icon: "success",
                draggable: true
            });
        } catch (error) {

        }
    }
    return (
        <div>

            <div className="overflow-x-auto ">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-blue-500">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Location</th>
                            <th> Price/Value </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allPendingJob.map(pendingJob =>
                                <tr className="bg-base-200" key={pendingJob._id}>
                                    <th className="text-sm font-bold text-gray-600">{pendingJob.name}</th>
                                    <td className="text-sm font-bold text-gray-600">{pendingJob.email}</td>
                                    <td className="text-sm font-bold text-gray-600">{pendingJob.title}</td>
                                    <td className="text-sm font-bold text-gray-600">{pendingJob.location}</td>
                                    <td className="text-sm font-bold text-gray-600">{pendingJob.minSalary}$ - {pendingJob.maxSalary}$</td>
                                    <td>
                                        {
                                            pendingJob.status === 'pending' &&
                                            <span>
                                                <button onClick={() => handleReject(pendingJob._id)} className="sm:p-2 p-1 text-white m-1 bg-red-600 rounded-full"><FaDeleteLeft /></button>
                                                <button onClick={() => handleVerify(pendingJob._id)} className="sm:p-2 p-1 text-white m-1 bg-blue-600 rounded-full "><SiVerizon /></button>
                                            </span>

                                        }
                                        {
                                            pendingJob.status === 'verified' &&
                                            <span className="text-green-500">
                                                Verified
                                            </span>

                                        }
                                        {
                                            pendingJob.status === 'rejected' &&
                                            <span className="text-red-700">
                                                Rejected
                                            </span>

                                        }
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageJob;