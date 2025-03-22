import { useQuery } from "@tanstack/react-query";
import UseAxios from "../Utility/UseAxios";
import JobCard from "../component/Homepage/JobCard";


const FindJob = () => {
    const axiosSecure = UseAxios()
    const { data: verifiedJobs = [], refetch } = useQuery({
        queryKey: ['verifiedJobs'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/verifyJob')
            return data
        }
    })
    const allVerifiedJob = verifiedJobs.sort((first, second) => new Date(second.jobPostTime) - new Date(first.jobPostTime))
    
    return (
        <div >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5 mb-10">
                {
                    allVerifiedJob.map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
        </div>
    );
};

export default FindJob;