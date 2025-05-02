import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import { SiVerizon } from "react-icons/si";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import LoadingSpinner from "../shared/LoadingSpinner";



const ManageJob = () => {
    const axiosSecure = UseAxios()
    const { data: pendingJobs = [], refetch, isLoading } = useQuery({
        queryKey: ['pendingJobs'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/pendingJob')
            return data
        }
    })


    const allPendingJob = pendingJobs.sort((first, second) => new Date(second.jobPostTime) - new Date(first.jobPostTime))
    if (isLoading) return <LoadingSpinner />
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
                jobPostTime: new Date(),
                applyCandidate: 0
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
            <div className="sm:my-10">
                <h3 className='text-3xl font-bold text-center my-3'>
                    Manage Job Listings
                </h3>
                <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>
                    Review, edit, or remove posted jobs to keep the platform up-to-date and ensure only verified
                    <br className="hidden sm:inline" />and relevant job listings are visible to users.
                </p>
            </div>

            <div className="overflow-x-auto  pb-10">
                <table className="table  ">
                    {/* head */}
                    <thead>
                        <tr className="text-[#857569]">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Title</th>
                            <th>Division</th>
                            <th> Price/Value </th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allPendingJob.slice(0,51).map(pendingJob =>
                                <tr className="bg-[#EDE8E0]" key={pendingJob._id}>
                                    <th className="text-sm font-bold text-gray-600">{pendingJob.name}</th>
                                    <td className="text-sm font-bold text-gray-600">{pendingJob.email}</td>
                                    <td className="text-sm font-bold text-gray-600">{pendingJob.title}</td>
                                    <td className="text-sm font-bold text-gray-600">{pendingJob.division}</td>
                                    <td className="text-sm font-bold text-gray-600">{pendingJob.minSalary}$ - {pendingJob.maxSalary}$</td>
                                    <td>
                                        {
                                            pendingJob.status === 'pending' &&
                                            <span>
                                                <button onClick={() => handleReject(pendingJob._id)} className="sm:p-2 p-1 font-bold  text-white m-1 bg-[#857569] rounded-full"><FaDeleteLeft /></button>
                                                <button onClick={() => handleVerify(pendingJob._id)} className="sm:p-2 p-1 font-bold text-white m-1 bg-[#857569] rounded-full "><SiVerizon /></button>
                                            </span>

                                        }
                                        {
                                            pendingJob.status === 'verified' &&
                                            <span className="font-bold text-[#857569]">
                                                Verified
                                            </span>

                                        }
                                        {
                                            pendingJob.status === 'rejected' &&
                                            <span className="font-bold text-[#857569]">
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