import JobBanner from "../../component/jobDetails/JobBanner";
import LeftSide from "../../component/jobDetails/LeftSide";
import RightSide from "../../component/jobDetails/RightSide";


const JobDetails = () => {
    return (
        <div>
         <JobBanner />
         <div className="grid px-10 mt-10 lg:grid-cols-9">
            <div className="col-span-6">
            <LeftSide />
            </div>
<div>
<RightSide />
</div>
         </div>
        </div>
    );
};

export default JobDetails;