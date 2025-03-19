import JobCard from "../../component/Homepage/JobCard";
import JobBanner from "../../component/jobDetails/JobBanner";
import LeftSide from "../../component/jobDetails/LeftSide";
import RightSide from "../../component/jobDetails/RightSide";


const JobDetails = () => {
    return (
        <div >
         <JobBanner />
         <div className="grid md:px-10 px-4 mt-10 gap-4  lg:grid-cols-9">
            <div className="lg:col-span-6">
            <LeftSide />
            </div>
<div className="lg:col-span-3 ">
<RightSide />
</div>
         </div>
         {/* similiar job */}
         <div className="md:px-10 px-4 mt-10">
            <h1 className="text-4xl font-bold mb-5 text-center">Similiar Job</h1>
            <div className="grid md:grid-cols-2 mb-10  gap-4 lg:grid-cols-3 xl:grid-cols-4">
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
                <JobCard></JobCard>
            </div>
         </div>
        </div>
    );
};

export default JobDetails;