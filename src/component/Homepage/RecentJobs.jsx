import JobCard from "./JobCard";


const RecentJobs = () => {
    return (
     <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 mx-10">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
          <div className="flex justify-center mt-10 ">
          <button className="uppercase btn bg-[#26AE61] text-white">Browse All Job</button>
          </div>
          </>
    );
};

export default RecentJobs;