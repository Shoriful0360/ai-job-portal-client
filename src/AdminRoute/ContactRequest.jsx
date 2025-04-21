import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import LoadingSpinner from "../shared/LoadingSpinner";
import Swal from "sweetalert2";


const ContactRequest = () => {
    const axiosSecure = UseAxios()
    const { data: allContactRequests = [], refetch, isLoading } = useQuery({
        queryKey: ['allContactRequests'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/contact/request')
            return data
        }
    })
    console.log(allContactRequests)
    if (isLoading) return <LoadingSpinner />
    const handleContact = async (id) => {
        console.log(id)
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You Contact This Candidate!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosSecure.delete(`/delete/contact/request/${id}`)
                    Swal.fire({
                        title: "Contact Complete!",
                        icon: "success"
                    });
                    refetch()
                }
            });
        } catch {

        }
    }
    return (
        <div>
            <div className="overflow-x-auto border-2 border-gray-200">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-blue-500">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Contact No</th>
                            <th>Massage</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            allContactRequests.map(allContactRequest =>
                                <tr className="bg-base-200" key={allContactRequest._id}>
                                    <th className="text-sm font-bold text-gray-600">{allContactRequest.name}</th>
                                    <td className="text-sm font-bold text-gray-600">{allContactRequest.email}</td>
                                    <td className="text-sm font-bold text-gray-600 ">{allContactRequest.number}</td>
                                    <td title={allContactRequest.massage} className="text-sm font-bold text-gray-600 ">{allContactRequest.massage}</td>
                                    <td>
                                        <button onClick={() => handleContact(allContactRequest._id)} className="text-sm px-2 py-1 rounded-lg font-bold bg-blue-500 hover:bg-blue-800 hover:text-white">Complete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ContactRequest;