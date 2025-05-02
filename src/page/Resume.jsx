import { useParams } from "react-router";
import UseAxios from "../Utility/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { PiSubtitlesFill } from "react-icons/pi";
import { FaCompactDisc } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import { SiAnytype } from "react-icons/si";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaArrowCircleDown } from "react-icons/fa";
import LoadingSpinner from "../shared/LoadingSpinner";
import Swal from "sweetalert2";
const Resume = () => {
    const { id } = useParams()
    const axiosSecure = UseAxios()
    const { data: singleCandidateData = [], refetch, isLoading } = useQuery({
        queryKey: ['singleCandidateData', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/single/Candidate/data/${id}`)
            return data
        }
    })
    if (isLoading) return <LoadingSpinner />
    const { companyName, category, companyEmail, deadline, description, experience, jobSeekerEducation, jobSeekerEmail, jobSeekerExperience, jobSeekerName, jobSeekerResume, jobType, location, maxSalary, minSalary, requirement, division, skill, title, status } = singleCandidateData
    // reject Candidate
    const handleReject = async () => {
        try {

            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You Rejected This Candidate!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosSecure.patch(`/reject/candidate/${id}`)
                    Swal.fire({
                        title: "Rejected!",
                        text: "This Candidate has been Rejected.",
                        icon: "success"
                    });
                    refetch()
                }
            });
        } catch {

        } finally {

        }
    }
    // Listed Candidate
    const handleListed = async () => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You Listed This Candidate!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosSecure.patch(`/listed/candidate/${id}`)
                    Swal.fire({
                        title: "Listed!",
                        text: "This Candidate has been Listed.",
                        icon: "success"
                    });
                    refetch()
                }
            });
        } catch {

        } finally {

        }
    }
    // Hired Candidate
    const handleHired = async () => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "Are You Sure? You Hired This Candidate!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosSecure.patch(`/hired/candidate/${id}`)
                    Swal.fire({
                        title: "Hired!",
                        text: "This Candidate has been Hired.",
                        icon: "success"
                    });
                    refetch()
                }
            });
        } catch {

        } finally {

        }
    }

    return (
        <div>
            <div className="sm:my-10">
                <h3 className='text-3xl font-bold text-center my-3'>
                    Professional Resume & Career Profile
                </h3>
                <p className='text-sm font-bold text-center my-3 text-gray-600 px-6'>
                    Explore the detailed resume of the job seeker, including their skills, education, experience, and <br className=" hidden sm:inline" />  career objectives to find the perfect match for your opportunity.
                </p>
            </div>
            {/* Candidate Details */}
            <div>
                <div className="sm:grid sm:grid-cols-2 gap-6 ">
                    <div className="sm:mx-auto">
                        <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span className="text-black font-bold">Name : </span>{jobSeekerName}</p>
                        <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span className="text-black font-bold">Email Address : </span>{jobSeekerEmail}</p>
                    </div>
                    <div className="sm:mx-auto">
                        <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span className="text-black font-bold">Education : </span>{jobSeekerEducation}</p>
                        <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span className="text-black font-bold">Experience : </span>{jobSeekerExperience}</p>
                    </div>
                </div>
                <div>
                    <img className="border-2 border-gray-700 my-7 mx-auto" src={jobSeekerResume} alt="" />
                </div>
                <div className="gap-4 flex justify-center items-center my-8">
                    {
                        status === 'pending' && <button onClick={handleReject} className="block px-3 py-2 rounded-lg bg-red-500 text-white hover:text-black text-sm font-bold">Reject</button>
                    }
                    {
                        status === 'pending' && <button onClick={handleListed} className="block px-3 py-2 rounded-lg bg-blue-500 text-white hover:text-black text-sm font-bold">Listed</button>
                    }
                    {
                        status === 'listed' && <button onClick={handleReject} className="block px-3 py-2 rounded-lg bg-red-500 text-white hover:text-black text-sm font-bold">Reject</button>
                    }
                    {
                        status === 'listed' && <button onClick={handleHired} className="block px-3 py-2 rounded-lg bg-green-500 text-white hover:text-black text-sm font-bold">Hired</button>
                    }
                    {
                        status === 'hired' && <p className="block px-3 py-2 rounded-lg bg-gray-200 text-green-500 text-sm font-bold">This Candidate Already Hired</p>
                    }
                    {
                        status === 'reject' && <p className="block px-3 py-2 rounded-lg bg-gray-200 text-red-500 text-sm font-bold">This Candidate Already Rejected This Job </p>
                    }
                </div>
            </div>
            {/* Job Details */}
            <h3 className="flex gap-1 my-7 items-center font-bold text-2xl justify-center">Job Details <span><FaArrowCircleDown /></span></h3>
            <div className="sm:grid sm:grid-cols-2 gap-6">
                <div>
                    <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span><PiSubtitlesFill /></span>{title}</p>
                    <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span><FaCompactDisc /></span>{companyName}</p>
                    <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span><MdOutlineAlternateEmail /></span>{companyEmail}</p>
                    <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span><MdCategory /></span>{category}</p>
                    <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span><SiAnytype /></span>{jobType}</p>
                    <p className="flex gap-1 mt-3 font-bold text-lg items-center">Key Requirement<FaArrowCircleDown /></p>
                    <p className="font-semibold text-gray-700 text-sm">{requirement}</p>
                </div>
                <div>
                    <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span> <MdOutlineAccessTimeFilled /></span>{deadline}</p>
                    <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span> <FaLocationDot /></span>{location},{division}</p>
                    <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span>  <FaMoneyBillWave /></span>{minSalary} - {maxSalary}</p>
                    <p className="flex gap-3 font-semibold text-gray-700 text-sm items-center"><span><IoShieldCheckmarkOutline /></span>{experience}</p>
                    <p className="flex gap-1 mt-3 font-bold text-lg items-center">Description<FaArrowCircleDown /></p>
                    <p className="font-semibold text-gray-700 text-sm">{description}</p>
                    <div className="">
                        <p className="flex gap-1 mt-3 font-bold text-lg items-center">Skills<FaArrowCircleDown /></p>
                        <ul>
                            {
                                Array.isArray(skill) &&
                                skill.map((singleSkill, index) => (
                                    <li className="font-semibold text-gray-700  text-sm" key={index}>{index + 1}.{singleSkill}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;