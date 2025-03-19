import { Link } from "react-router";
import JobCard from "./JobCard";


const LatestJobs = () => {
  return (
    <>
      <div className="md:mx-10 mx-4 grid md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 mt-10">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
      <div className="flex justify-center mt-10 ">
        <Link to='/findJobs' className="uppercase btn bg-[#26AE61] text-white">Browse All Job</Link>
      </div>
    </>
  );
};

export default LatestJobs;