import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../Utility/UseAxios";
import JobCard from "./JobCard";
import { Link } from "react-router";


const RecentJobs = () => {
    const axiosSecure = UseAxios()
    const { data: verifiedRecentJobs = [], refetch } = useQuery({
        queryKey: ['verifiedRecentJobs'],
        queryFn: async () => {
            const { data } = await axiosSecure.get('/verifyJob')
            return data
        }
    })
    return (
        <>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 md:mx-10 mx-4">
                {
                    verifiedRecentJobs.slice(0, 8).map(job => <JobCard key={job._id} job={job}></JobCard>)
                }
            </div>
            <div className="flex justify-center mt-10 ">
                <Link to='/findJobs' className="uppercase btn bg-gradient-to-r from-blue-400 to-blue-950 text-white">Browse All Job</Link >
            </div>
        </>
    );
};

export default RecentJobs;