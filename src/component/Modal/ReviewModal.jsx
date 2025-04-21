
import Swal from 'sweetalert2';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import pic from '../../../public/Photo/computer-6748244_1280.webp'
import UseAxios from '../../Utility/UseAxios';
const ReviewModal = ({ isOpen, close, user }) => {
    const axiosSecure = UseAxios()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const review = e.target.review.value;
        const profession = e.target.profession.value;
        const name = user?.displayName
        const email = user?.email
        const image = user?.photoURL
        const reviewTime = new Date()
        const status = 'pending'
        if (review.length > 200) {
            return Swal.fire({
                title: 'Review Text Maximum 199 Character!',
                icon: "error",
                draggable: true
            });
        }
        const reviewData = { review, profession, name, email, image, reviewTime,status }
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You Submit This Review!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes , Submit It!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosSecure.post('/pendingReview', reviewData)
                    Swal.fire({
                        title: "Submitted!",
                        text: "Your Review has been Submitted.",
                        icon: "success"
                    });
                    close()
                }
            });
        } catch {

        }
    }
    return (
        <div >
            <Dialog open={isOpen} as="div" className=" relative z-50 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto" >
                    <div className="flex  min-h-full items-center justify-center p-4 " >
                        <form onSubmit={handleSubmit}>
                            <DialogPanel
                                transition
                                className="w-full max-w-md rounded-xl bg-white p-12 shadow-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 bg-cover bg-center" style={{ backgroundImage: `url(${pic})` }}
                            >
                                <DialogTitle as="h3" className="text-2xl  font-bold text-center">
                                    Review
                                </DialogTitle>

                                <div className='lg:w-96 lg:pr-7'>

                                    <label className=" fieldset-label text-sm my-3 font-bold text-gray-200">Your Review (0/199)</label>
                                    <textarea type="text" placeholder="Type Here" name='review' required className="textarea textarea-info w-full"></textarea>

                                    <label className=" fieldset-label text-sm my-3 font-bold text-gray-200">Your Profession</label>
                                    <input type="text" placeholder="Type Here" name='profession' required className="input input-info w-full" />

                                    <button className="btn btn-soft my-3 text-sm font-bold btn-info w-full">Submit</button>
                                </div>

                            </DialogPanel>
                        </form>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default ReviewModal;