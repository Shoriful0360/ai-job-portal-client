import { useQuery } from "@tanstack/react-query";
import UseAxios from "../../Utility/UseAxios";
import JobCard from "./JobCard";
import { Link } from "react-router";


const LatestJobs = () => {
  const axiosSecure = UseAxios()
  const { data: verifiedLatestJobs = [], refetch } = useQuery({
    queryKey: ['verifiedLatestJobs'],
    queryFn: async () => {
      const { data } = await axiosSecure.get('/verifyJob')
      return data
    }
  })

  const allLatestJob = verifiedLatestJobs.sort((first, second) => new Date(second.jobPostTime) - new Date(first.jobPostTime))

  return (
    <>
      <div className="md:mx-10 mx-4 grid md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        {
          allLatestJob.slice(0, 8).map((job,index) => <JobCard index={index} key={job._id} job={job}></JobCard>)
        }
      </div>
      <div className="flex justify-center mt-10 ">
        <Link to='/findJobs' className="uppercase btn bg-gradient-to-r from-blue-400 to-blue-950 text-white">Browse All Job</Link >
      </div>
    </>
  );
};

export default LatestJobs;