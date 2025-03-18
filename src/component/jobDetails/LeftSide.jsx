import { BsCalendar3, BsCreditCard2Back } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { GiSmartphone } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { Link } from "react-router";


const LeftSide = () => {
    return (
        <div className="flex w-full flex-col rounded-xl py-4 border border-gray-200  lg:flex-row">
        <div className="card  rounded-box grid grow place-items-center">
        <div>
        <figure className="px-10 pt-10">
          <img
            src="https://utouchdesign.com/themes/envato/escort/assets/img/company_logo_1.png"
            alt="image"
            className="w-28 h-28 group-hover:scale-105 transition-all group-hover:duration-700 rounded-full" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Product  Redesign</h2>
          <p>2708 Scenic Way, IL 64552</p>
          <div className="card-actions mt-4">
       
          <button className="btn border-[#26AE61] text-[#26AE61] hover:bg-[#26AE61] hover:text-white border-2 text-[#26AE61 ]">APPLY NOW</button>
        
          </div>
        </div>
        </div>
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="card  grow rounded-box grid pt-10 pl-4  space-y-6 md:block ">
        <p className="flex items-center gap-2 text-[#707f8c]">
        <BsCalendar3 />
        20K To 50K/Month
        </p>
        <p className="flex items-center gap-2 text-[#707f8c]">
        <GiSmartphone />
        91 234 567 8765
        </p>
        <p className="flex items-center gap-2 text-[#707f8c]">
        <CiMail />
        mail@example.com
        </p>
        <p className="flex items-center gap-2 text-[#707f8c]">
        <BsCreditCard2Back />
       <span className="text-[#26AE61] bg-[#E4F6EA] py-0.5 px-1 rounded-md">Full Time</span>
        </p>
        <p className="flex items-center gap-2 text-[#707f8c]">
        <HiOutlineUser />
      <span className="text-red-600">  7 Open Position</span>
        </p>
        <p className="flex items-center gap-2 text-[#707f8c]">
        <IoShieldCheckmarkOutline />
        3 Year Exp.
        </p>
        </div>
      </div>
    );
};

export default LeftSide;