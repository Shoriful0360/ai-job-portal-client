
import { useState } from "react";
import Banner from "../../component/Homepage/Banner";
import State from "../../Section/State";
import SuggestedJob from "../../Section/SuggestedJob";
import LatestJobs from "../../component/Homepage/LatestJobs";
import RecentJobs from "../../component/Homepage/RecentJobs";
import Category from "../../component/category/Category";


const HomePage = () => {
    const [visible,setVisible]=useState(true)
    console.log(visible)
    return (
        <div>
            <div><Banner></Banner></div>
            {/* latest and recent job */}
            <div className="flex   justify-center mt-10">
           <div className="bg-[#26AE61] py-2 rounded-md px-2">
           <button onClick={()=>setVisible(true)} className={` ${visible?'bg-white  text-[#26AE61]':'text-white'} md:px-14 px-10 font-semibold py-2 rounded-md cursor-pointer`}>Latest Jobs</button>
           <button onClick={()=>setVisible(false)} className={` ${visible?'text-white':'bg-white  text-[#26AE61]'} md:px-14 px-10 font-semibold py-2 rounded-md cursor-pointer`}>Recents Jobs</button>
           </div>
            </div>
            {/* conditional job  */}
                  
      {
        visible ?
        <LatestJobs />
        :
        <RecentJobs />
      }
          
            <div className="bg-[#F8FAFB]"><Category/></div>

            <div><SuggestedJob></SuggestedJob></div>
        </div>
    );
};

export default HomePage;