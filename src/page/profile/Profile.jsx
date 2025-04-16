import { Outlet } from "react-router";
import Sidebar from "../../component/profile/Sidebar";

const Profile = () => {
    return (
     <div className=" bg-[#010313] min-h-screen">
       <div className=" text-white md:flex flex-wrap p-4 max-w-[1600px]  md:p-10 mx-auto gap-6">
        <div className="  bg-[#170f21] ">
            <Sidebar/>
        </div>
        
        <div className="flex-1">
            <Outlet/>
        </div>
    
      </div>
     </div>
    );
  };
  
  export default Profile;
  