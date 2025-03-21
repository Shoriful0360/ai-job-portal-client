import { BsCalendar3, BsCreditCard2Back } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import { VscGitStashApply } from "react-icons/vsc";
import { IoSave } from "react-icons/io5";
const LeftSide = ({ detailsJob }) => {
  const { category, deadline, description, email, image, jobTime, skill, jobType, location, maxSalary, minSalary, name, status, title, _id, experience,requirement } = detailsJob
  return (
    <div>
      <div className="flex w-full flex-col px-2 rounded-xl py-4 border border-gray-200  lg:flex-row">
        <div className="card  rounded-box grid grow place-items-center">
          <div>
            <figure className="px-10 pt-10">
              <img
                src={image}
                alt="image"
                className="w-28 h-28 group-hover:scale-105 transition-all group-hover:duration-700 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{title}</h2>
              <p>{category}</p>
              <div className="card-actions mt-4">

                <button className="btn flex justify-between items-center border-blue-500 text-blue-600 font-bold hover:bg-blue-700 bg-blue-100 hover:text-white border-2 text-[#26AE61 ]"><span className="text-lg font-bold"><VscGitStashApply /></span>APPLY NOW</button>
                <button className="btn flex justify-between items-center border-blue-500 text-blue-600 font-bold hover:bg-blue-700 bg-blue-100 hover:text-white border-2 text-[#26AE61 ]"><span className="text-lg font-bold"><IoSave /></span>SAVE JOB</button>

              </div>
            </div>
          </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card  grow rounded-box grid  pl-4  space-y-6 md:block ">
          <p className="font-bold flex items-center gap-2 text-[#707f8c]">
            <BsCalendar3 />
            {minSalary}k - {maxSalary}k / Month
          </p>
          <p className="font-bold flex items-center gap-2 text-[#707f8c]">
            <CiMail />
            {email}
          </p>
          <p className="font-bold flex items-center gap-2 text-[#707f8c]">
            <FaLocationDot />
            {location}
          </p>
          <p className="font-bold flex items-center gap-2 text-[#707f8c]">
            <BsCreditCard2Back />
            <span className="text-[#26AE61] bg-[#E4F6EA] py-0.5 px-1 rounded-md">{jobType}</span>
          </p>
          <p className="font-bold flex items-center gap-2 text-[#707f8c]">
          <GiDuration />
            <span className="text-[#26AE61] bg-[#E4F6EA] py-0.5 px-1 rounded-md">{jobTime}</span>
          </p>
          <p className="font-bold flex items-center gap-2 text-[#707f8c]">
            <MdOutlineAccessTimeFilled />
            <span className="text-red-600"> {deadline}</span>
          </p>
          <p className="font-bold flex items-center gap-2 text-[#707f8c]">
            <IoShieldCheckmarkOutline />
            {experience}
          </p>
        </div>
      </div>
      {/* job description */}
      <div className="border border-gray-200 mt-10   rounded-md">
        <h1 className="bg-[#424242] py-4 px-10 text-white text-2xl rounded-t-md  font-bold ">Job Description</h1>
        <p className="font-bold px-10 py-2">
          {description}
        </p>

      </div>
      {/* job skill */}
      <div className="border border-gray-200 mt-10   rounded-md">
        <h1 className="bg-[#424242] py-4 px-10 text-white text-2xl rounded-t-md  font-bold ">Job Skill</h1>
        <div className="py-4  px-10 space-y-3 text-[#707f8c]">
          <ul>
            {
              Array.isArray(skill) && 
              skill.map((singleSkill, index) => (
                <li className="font-bold" key={index}>{singleSkill}</li>
              ))
            }
          </ul>

        </div>

      </div>
      {/* Requirement */}
      <div className="border border-gray-200 mt-10   rounded-md">
        <h1 className="bg-[#424242] py-4 px-10 text-white text-2xl rounded-t-md  font-bold ">Requirement</h1>
        <div className="py-4  px-10 space-y-3 text-[#707f8c] font-bold">
         {requirement}
        </div>

      </div>
    </div>
  );
};

export default LeftSide;