
import { BsCheckCircle } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoBookOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import { MdDashboard, MdErrorOutline } from "react-icons/md";
import useRole from "../../Utility/useRole";
import { HiLightBulb } from "react-icons/hi";
import LoadingSpinner from "../../shared/LoadingSpinner";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const{user}=useSelector((state)=>state.auth)
 
  const{role,isLoading}=useRole()
  if(isLoading) return <LoadingSpinner/>
  const{name,email,number,_id,photoUrl,presentAddress,permanentAddress,companyName,companyDatail,skills}=role || {}
  const{gender,ageRange,deviceType,internetType,experience,employmentRole,areaType,company_type,size,founder_year,about_company,headquarter,achievement}=role?.additionalInfo || {}
  const{cvLink,githubLink,portfolio,linkedin,profileImage,facebook,
    companyWebsite,youtube}=role?.SocialLink || {}
  const{education_level,degree,Institution,passing,cse}=role?.Education || {}

  // check whice section is complete
  const isProfileComplete=companyName && number && photoUrl || name && number && photoUrl
  const isAddressComplete=presentAddress?.country &&presentAddress?.district && presentAddress?.street && permanentAddress?.country && permanentAddress?.district && permanentAddress?.street
  const isImportantLinkComplete=cvLink && githubLink  && portfolio && linkedin && profileImage && facebook || companyWebsite && youtube && facebook && linkedin && profileImage 
  const isSkillComplete=skills && skills.length>0
  const isAdditionalInfoComplete=gender && ageRange && deviceType && internetType && experience && employmentRole && areaType ||company_type && size && founder_year && about_company && headquarter && achievement;
  const isEducationComplete=education_level && degree && Institution && passing && cse ;
  const totalSections = role?.role === "Job Seeker" 
  ? 6 
  : role?.role === "Employer" 
  ? 4
  : role?.role === "Admin" 
  ? 2 
  : 0;

// compete inprogresss
  const completeSectionField=[
    isProfileComplete,
    isAddressComplete,
  ]

  if (role?.role === "Job Seeker") {
    completeSectionField.push(isSkillComplete, isEducationComplete,isAdditionalInfoComplete, isImportantLinkComplete);
  }

  if (role?.role === "Employer") {
    completeSectionField.push(isAdditionalInfoComplete,isImportantLinkComplete);
  }

  const completeSection = completeSectionField.filter(Boolean).length;
  const progress=Math.floor((completeSection/totalSections)*100)
    return (
      <div className="w-full bg-[#1b132a] min-h-screen rounded-xl p-6 shadow-md">
      <div className="flex flex-col items-center">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
            <img src={photoUrl || user?.photoURL} alt="profile" />
          </div>
        </div>
        <h2 className="mt-4 text-xl font-bold">{name}</h2>
        <p className="text-sm opacity-80">{`JVI-${_id?.slice(-5)}`}</p>
        <p className="text-sm">{email}</p>
        <p className="text-sm text-green-400">{number?`+88${number}`:'No number'}</p>
        <h2 className="text-xl font-bold">{role?.role}</h2>
      </div>

      {/* === Profile Progress Section === */}
      <div className="mt-6">
        <p className="text-sm flex justify-between">Complete your profile <span>{progress}%</span></p>
        <progress className="progress progress-success w-full mt-1" value={progress} max="100"></progress>
      </div>

      {/* === Menu Items === */}
      <ul className="menu mt-6 text-[#817691] space-y-6">
        <NavLink to="/dashboard" className="text-2xl flex justify-between items-center p-2 gap-4">
          <p className="flex items-center gap-3"><MdDashboard />Dashboard</p>
          <span className="bg-green-400 w-6 ml-4 text-white h-6 rounded-full flex justify-center items-center"><BsCheckCircle /></span>
        </NavLink>

        {/* My Profile */}
        <NavLink to="my-profile" className="text-2xl flex justify-between items-center p-2 gap-4">
          <p className="flex items-center gap-3"><FaRegUserCircle />My Profile</p>
          {isProfileComplete && (
            <span className="bg-green-400 w-6 ml-4 text-white h-6 rounded-full flex justify-center items-center"><BsCheckCircle /></span>
          )}
        </NavLink>

        {/* Address */}
        <NavLink to="address" className="text-2xl flex justify-between items-center p-2 gap-4">
          <p className="flex items-center gap-3"><CiLocationOn />Address</p>
          {isAddressComplete && (
            <span className="bg-green-400 w-6 ml-4 text-white h-6 rounded-full flex justify-center items-center"><BsCheckCircle /></span>
          )}
        </NavLink>

        {/* Only Employer / Job Seeker */}
        {(role?.role === "Employer" || role?.role === "Job Seeker") && (
          <>
            {/* Additional Info */}
            <NavLink to="additional-info" className="text-2xl flex justify-between items-center p-2 gap-4">
              <p className="flex items-center gap-3"><MdErrorOutline />Additional Info</p>
              {isAdditionalInfoComplete && (
                <span className="bg-green-400 w-6 ml-4 text-white h-6 rounded-full flex justify-center items-center"><BsCheckCircle /></span>
              )}
            </NavLink>

            {/* Important Link */}
            <NavLink to="important-link" className="text-2xl flex justify-between items-center p-2 gap-4">
              <p className="flex items-center gap-3"><FiEdit />Important Link</p>
              {isImportantLinkComplete && (
                <span className="bg-green-400 w-6 ml-4 text-white h-6 rounded-full flex justify-center items-center"><BsCheckCircle /></span>
              )}
            </NavLink>
          </>
        )}

        {/* Only Job Seeker */}
        {role?.role === "Job Seeker" && (
          <>
            {/* Education */}
            <NavLink to="education" className="text-2xl flex justify-between items-center p-2 gap-4">
              <p className="flex items-center gap-3"><IoBookOutline />Education</p>
              {isEducationComplete && (
                <span className="bg-green-400 w-6 ml-4 text-white h-6 rounded-full flex justify-center items-center"><BsCheckCircle /></span>
              )}
            </NavLink>

            {/* Skill Set */}
            <NavLink to="skill-set" className="text-2xl flex justify-between items-center p-2 gap-4">
              <p className="flex items-center gap-3"><HiLightBulb />Skill Set</p>
              {isSkillComplete && (
                <span className="bg-green-400 w-6 ml-4 text-white h-6 rounded-full flex justify-center items-center"><BsCheckCircle /></span>
              )}
            </NavLink>
          </>
        )}
      </ul>
    </div>
    );
};

export default Sidebar;