import JobCard from "./JobCard";


const RecentJobs = () => {
    return (
     <>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-10 md:mx-10 mx-4">
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
          <button className="uppercase btn bg-gradient-to-r from-blue-400 to-blue-950 text-white">Browse All Job</button>
          </div>
          </>
    );
};

export default RecentJobs;