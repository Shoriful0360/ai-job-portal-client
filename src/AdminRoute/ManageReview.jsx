import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../shared/LoadingSpinner";
import UseAxios from "../Utility/UseAxios";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import Swal from "sweetalert2";
const ManageReview = () => {
    const axiosSecure = UseAxios()
    const { data: pendingReviews = [], refetch, isLoading } = useQuery
        ({
            queryKey: ['pendingReviews'],
            queryFn: async () => {
                const { data } = await axiosSecure.get('/pendingReview')
                return data
            }
        })
    const allPendingReviews = pendingReviews.sort((first, second) => new Date(second.reviewTime) - new Date(first.reviewTime))
    const reviews = allPendingReviews.filter(PendingReview => PendingReview.status === 'pending')
    if (isLoading) return <LoadingSpinner />

    // Review Accept 
    const handleAccept = async (id, image, review, name, profession, email, reviewTime) => {
        const reviewData = {
            image, review, name, profession, email, reviewTime
        }
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You Verified This Review!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosSecure.post('/verifiedReview', reviewData)
                    await axiosSecure.patch(`/verified/review/status/${id}`,)
                    await axiosSecure.delete(`/review/delete/${email}`,)
                    await axiosSecure.delete(`/single/review/delete/${id}`,)
                    Swal.fire({
                        title: "Review Verified Successfully!",
                        icon: "success",
                        draggable: true
                    });
                    refetch()
                }
            });
        } catch {

        }
    }
    // Review Reject 
    const handleReject = (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You Rejected This Review!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosSecure.delete(`/single/review/delete/${id}`)
                    Swal.fire({
                        title: "Review Rejected!",
                        icon: "success",
                        draggable: true
                    });
                    refetch()
                }
            });
        } catch {

        }
    }
    return (
        <div>
            <div className="sm:my-10">
                <h3 className='text-3xl font-bold text-center my-3'>
                    Manage User Reviews
                </h3>
                <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>
                    View, approve, or delete user-submitted reviews to ensure quality feedback and
                    <br className="hidden sm:inline" /> maintain a trustworthy platform experience.
                </p>
            </div>
            <div className=" sm:grid lg:grid-cols-4 md:grid-cols-2 gap-6  my-10">
                {
                    reviews.map(review =>
                        <div key={review._id} className="relative py-16 " >
                            <img className=" absolute rounded-full border-4 border-white top-4 left-32 " src={review.image} alt="" />
                            <div className="bg-gray-300 rounded-xl py-12 text-gray-700 px-6">
                                <p className="text-5xl "><RiDoubleQuotesL /></p>
                                <p className="text-sm font-bold text-center">{review.review}</p>
                                <p className="text-5xl ml-64"><RiDoubleQuotesR /></p>
                                <p className="text-lg font-bold text-center  text-black">{review.name}</p>
                                <p className="text-sm font-bold text-center mb-5 text-black">{review.profession}</p>
                                {
                                    review.status === 'pending' &&
                                    <div className="flex items-center justify-around gap-3 ">
                                        <button
                                            onClick={() =>
                                                handleAccept(
                                                    review._id,
                                                    review.image,
                                                    review.review,
                                                    review.name,
                                                    review.profession,
                                                    review.email,
                                                    review.reviewTime
                                                )}
                                            className="text-sm font-bold text-black px-3 py-1 bg-green-200 border-2 border-green-600 rounded-lg hover:text-white hover:bg-green-600  hover:border-white">Accept</button>
                                        <button onClick={() => handleReject(review._id)} className="text-sm font-bold text-black px-3 py-1 bg-red-200 border-2 border-red-600 rounded-lg hover:text-white hover:bg-red-600  hover:border-white">Reject</button>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ManageReview;