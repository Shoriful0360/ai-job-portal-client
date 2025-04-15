import { Outlet } from "react-router";
import Sidebar from "../../component/profile/Sidebar";

const Profile = () => {
    return (
      <div className="min-h-screen bg-[#0f0c29] text-white grid md:grid-cols-12 p-4 md:p-10 gap-6">
        <div className="col-span-2">
            <Sidebar/>
        </div>
        
        <div className="col-span-10">
            <Outlet/>
        </div>
    
      </div>
    );
  };
  
  export default Profile;
  