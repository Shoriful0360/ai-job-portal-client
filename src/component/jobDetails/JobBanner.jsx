import { Link } from "react-router";

const JobBanner = () => {
  return (
   
    <div
      className="hero bg-cover h-96 bg-center"
      style={{
        backgroundImage: "url(https://cdn.pixabay.com/photo/2016/03/15/09/08/looking-for-a-job-1257233_1280.jpg)",
      }}>
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Job Details</h1>
        </div>
      </div>
    </div>
  );
};

export default JobBanner;