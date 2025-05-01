import Swal from "sweetalert2";
import UseAxios from "../Utility/UseAxios";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { motion } from 'framer-motion';
const ContactUs = () => {
    const axiosSecure = UseAxios()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const number = e.target.number.value
        const name = e.target.name.value
        const massage = e.target.massage.value
        if (massage.length > 200) {
            return Swal.fire({
                title: 'Contact Massage Maximum 199 Character!',
                icon: "error",
                draggable: true
            });
        }
        const contactData = { email, name, massage, number }
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You Submit This Massage!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes , Submit It!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosSecure.post('/contact/request', contactData)
                    Swal.fire({
                        title: "Submitted!",
                        text: "Your Massage has been Submitted.",
                        icon: "success"
                    });
                }
            });
        } catch {

        } finally {

        }
    }
    return (
        <div className="grid sm:grid-cols-2 bg-[#F8FAFB] items-center gap-5 my-11 p-4 md:px-10">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }} >
                <h3 className='text-3xl font-bold  my-3'>We aim to <span className="text-blue-500">streamline</span> your job search</h3>
                <p className='text-sm font-semibold flex items-center gap-3 my-3 text-gray-700 '><span className="text-xl text-blue-500 mt-1"><MdOutlineMail /></span>jobvision@gmail.com</p>
                <p className='text-sm font-semibold flex items-center gap-3 my-3 text-gray-700 '><span className="text-xl text-blue-500 mt-1"><FaPhoneVolume /></span>+8801*********</p>
                <form onSubmit={handleSubmit}>
                    <div className="lg:flex gap-6 my-1">
                        <div className="my-1">
                            <label className=" fieldset-label text-sm font-bold text-gray-700 my-1">Your Name</label>
                            <input type="text" name="name" className="input w-full my-1" required placeholder="Name" />
                        </div>
                        <div className="my-1">
                            <label className=" fieldset-label text-sm font-bold text-gray-700 my-1">Your Contact No</label>
                            <input type="text" name="number" className="input w-full my-1" required placeholder="Phone No" />
                        </div>

                        <div className="my-1">
                            <label className=" fieldset-label text-sm font-bold my-1 text-gray-700">Your Email</label>
                            <input type="text" name="email" className="input w-full my-1" required placeholder="Your Email" />
                        </div>
                    </div>
                    <label className=" fieldset-label text-sm font-bold text-gray-700 my-1">Message</label>
                    <textarea className="textarea w-full md:w-[330px] lg:w-[600px] my-1" name="massage" placeholder="Type Your Message Here (0/200 Character)"></textarea>
                    <p><button className="px-2 py-1 bg-blue-500 text-sm font-bold text-white rounded-lg mt-3 m ">Submit</button></p>
                </form>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}>
                <div className="collapse collapse-plus my-4 bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-lg font-extrabold">🔍 Advanced Job Search</div>
                    <div className="collapse-content text-sm font-bold text-gray-600"> Filter jobs by location, industry, experience level, and salary.
                        Get AI-powered recommendations for the best job matches.
                        Find the perfect position based on your skills and expertise.</div>
                </div>
                <div className="collapse collapse-plus my-4 bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-lg font-extrabold">📄 Job Posting Builder</div>
                    <div className="collapse-content text-sm font-bold text-gray-600">craft engaging job postings for recruiters.</div>
                </div>
                <div className="collapse collapse-plus my-4 bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-lg font-extrabold">📚 Resources & Guides</div>
                    <div className="collapse-content text-sm font-bold text-gray-600">Explore expert career guides, interview tips, and skill development resources to enhance your career growth.</div>
                </div>
                <div className="collapse collapse-plus my-4 bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-lg font-extrabold">🌍 Community Support</div>
                    <div className="collapse-content text-sm font-bold text-gray-600"> Join our job-seeker community and get advice from professionals.</div>
                </div>
            </motion.div>
        </div >
    );
};

export default ContactUs;