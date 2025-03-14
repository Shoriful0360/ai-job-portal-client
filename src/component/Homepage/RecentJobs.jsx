import JobCard from "./JobCard";


const RecentJobs = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 mx-10">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
        </div>
    );
};

export default RecentJobs;