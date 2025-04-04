import { BsCalendar3, BsCreditCard2Back } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { FaMinus } from "react-icons/fa";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
import { VscGitStashApply } from "react-icons/vsc";
import { IoSave } from "react-icons/io5";
import { Link } from "react-router";
import ApplyModal from "../Modal/ApplyModal";
const LeftSide = ({ detailsJob }) => {

  const [file,setFile]=useState(null)
  const [fileInfo,setFileInfo]=useState(null);

 const [isOpen, setIsOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const { category, deadline, description, email, image, jobTime, skill, jobType, location, maxSalary, minSalary, name, status, title, _id, experience, requirement } = detailsJob
  const axiosSecure = UseAxios()

//  modal functionality
  function open() {
    
      setIsOpen(true)
    }
  
    function close() {
      setIsOpen(false)
    }

// file upload
const handlefileChange=(event)=>{
const selectedFile=event.target.files[0]
if(selectedFile){
setFile(selectedFile)
setFileInfo({
  name:selectedFile.name,
  type:selectedFile.type,
  size: formatFilesizes(selectedFile.size)
})
}
}
// file format
const formatFilesizes=(bytes)=>{
  const kilobytes=bytes/1024;
  if(kilobytes <1024){
    return`${kilobytes.toFixed(2)}KB`
  }
  const megabytes=kilobytes /1024;
  return `${megabytes.toFixed(2)}MB`
}

  //  Job Save in WishList Route
  const handleSave = async () => {
    const saveData = { category, deadline, description, companyEmail: email, companyLogo: image, jobTime, skill, jobType, location, maxSalary, minSalary, companyName: name, status, title, jobId: _id, experience, requirement, jobSeekerEmail: user?.email }
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "Are You Sure? You Save This Job!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Save it!"
      }).then(async (result) => {
        if (result.isConfirmed) {
          const data  = await axiosSecure.post(`/saveJob/${user?.email}?jobId=${_id}`, saveData)
          if (data.data.insertedId) {
            Swal.fire({
              title: "Save SuccessFully!",
              icon: "success",
              draggable: true
            });
          } else {
            Swal.fire({
              title: "This Job All Ready Save Your Wishlist!",
              icon: "error",
              draggable: true
            });
          }
        }
      });
    } catch (error) {

    }
  }

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

                <button onClick={open} className="btn flex justify-between items-center border-blue-500 text-blue-600 font-bold hover:bg-blue-700 bg-blue-100 hover:text-white border-2 text-[#26AE61 ]">
                 <span className="text-lg font-bold"><VscGitStashApply /></span>APPLY NOW
                </button>
                <button onClick={handleSave}>
                  <Link className="btn flex justify-between items-center border-blue-500 text-blue-600 font-bold hover:bg-blue-700 bg-blue-100 hover:text-white border-2 text-[#26AE61 ]"><span className="text-lg font-bold"><IoSave /></span>SAVE JOB</Link>
                </button>
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
        <p className="px-10 py-2">
        "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue.

At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
        </p>

      </div>
      {/* job skil */}
      <div className="border border-gray-200 mt-10   rounded-md">
        <h1 className="bg-[#424242] py-4 px-10 text-white text-2xl rounded-t-md  font-bold ">Job Skill</h1>
        <div className="py-4  px-10 space-y-3 text-[#707f8c]">
        <p className="flex  place-items-baseline md:place-items-center gap-2" ><span className="block"><FaMinus /> </span> Contrary to popular belief, Lorem Ipsum is not simply random text</p>
        <p className="flex  place-items-baseline md:place-items-center gap-2" ><span className="block"><FaMinus /> </span> Contrary to popular belief, Lorem Ipsum is not simply random text</p>
        <p className="flex  place-items-baseline md:place-items-center gap-2" ><span className="block"><FaMinus /> </span> Contrary to popular belief, Lorem Ipsum is not simply random text</p>
        <p className="flex  place-items-baseline md:place-items-center gap-2" ><span className="block"><FaMinus /> </span> Contrary to popular belief, Lorem Ipsum is not simply random text</p>
       
        </div>

      </div>
      {/* location */}
      <div className="border border-gray-200 mt-10   rounded-md">
        <h1 className="bg-[#424242] py-4 px-10 text-white text-2xl rounded-t-md  font-bold ">Location</h1>
        <p className="px-10 py-2">
     location
        </p>

      </div>
      {/* Requirement */}
      <div className="border border-gray-200 mt-10   rounded-md">
        <h1 className="bg-[#424242] py-4 px-10 text-white text-2xl rounded-t-md  font-bold ">Requirement</h1>
        <div className="py-4  px-10 space-y-3 text-[#707f8c]">
        <p className="flex  place-items-baseline md:place-items-center gap-2" ><FaMinus />  Contrary to popular belief, Lorem Ipsum is not simply random text</p>
        <p className="flex  place-items-baseline md:place-items-center gap-2" ><FaMinus />  Contrary to popular belief, Lorem Ipsum is not simply random text</p>
        <p className="flex  place-items-baseline md:place-items-center gap-2" ><FaMinus />  Contrary to popular belief, Lorem Ipsum is not simply random text</p>
        <p className="flex  place-items-baseline md:place-items-center gap-2" ><FaMinus />  Contrary to popular belief, Lorem Ipsum is not simply random text</p>
        </div>

      </div>
      <ApplyModal isOpen={isOpen} close={close} fileInfo={fileInfo} handlefileChange={handlefileChange} />
    </div>
  );
};

export default LeftSide;