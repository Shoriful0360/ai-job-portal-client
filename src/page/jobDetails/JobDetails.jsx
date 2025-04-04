import { useParams } from "react-router";
import JobCard from "../../component/Homepage/JobCard";
import JobBanner from "../../component/jobDetails/JobBanner";
import LeftSide from "../../component/jobDetails/LeftSide";
import RightSide from "../../component/jobDetails/RightSide";
import ApplyModal from "../../component/Modal/ApplyModal";

import UseAxios from "../../Utility/UseAxios";
import { useQuery } from "@tanstack/react-query";
import { FaLocationDot } from "react-icons/fa6";

const JobDetails = () => {
    const { id } = useParams()
    
    const axiosSecure = UseAxios()
    const { data: detailsJob = [], refetch } = useQuery({
        queryKey: ['detailsJob',id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/verifyJob/${id}`)
            return data
        }
    })
    // const {category,deadline,description, email,image,jobTime,jobType,location,maxSalary, minSalary, name,status,title,_id} = detailsJob
    return (
       <>
        <div >
            <JobBanner />
            <div className="grid md:px-10 px-4 mt-10 gap-4  lg:grid-cols-9">
                <div className="lg:col-span-6">
                    <LeftSide detailsJob={detailsJob}></LeftSide>
                </div>
                <div className="lg:col-span-3 ">
                    <RightSide />
                </div>
            </div>
<div className="lg:col-span-3 ">
<RightSide />
</div>
         </div>
        
         <div className="md:px-10 px-4 mt-10">
            
            <h1 className="text-4xl font-bold mb-5 text-center">Similiar Job</h1>
            <div className="grid md:grid-cols-2 mb-10  gap-4 lg:grid-cols-3 xl:grid-cols-4">
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
            </div>
        </div>
        </>
    );
};

export default JobDetails;