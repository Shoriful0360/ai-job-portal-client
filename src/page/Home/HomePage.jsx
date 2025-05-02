
import { useState } from "react";
import Banner from "../../component/Homepage/Banner";
import State from "../../Section/State";
import SuggestedJob from "../../Section/SuggestedJob";
import LatestJobs from "../../component/Homepage/LatestJobs";
import RecentJobs from "../../component/Homepage/RecentJobs";
import Category from "../../component/category/Category";
import OurWork from "../../Section/OurWork";
import ContactUs from "../../Section/ContactUs";
import Review from "../../Section/Review";
import useRole from "../../Utility/useRole";


const HomePage = () => {
    const [visible, setVisible] = useState(true)
    const{role}=useRole()
    console.log(role)
    return (
        <div className="">
            <div><Banner></Banner></div>
            {/* latest and recent job */}
            <div className="flex   justify-center mt-10">
                <div className="bg-[#A59488] py-2 rounded-md px-2">
                    <button onClick={() => setVisible(true)} className={` ${visible ? 'bg-gray-100 text-lg font-extrabold text-gray-700' : 'text-white text-lg font-extrabold'} md:px-14 px-10 font-semibold py-2 rounded-md cursor-pointer`}>Latest Jobs</button>
                    <button onClick={() => setVisible(false)} className={` ${visible ? 'text-white text-lg font-extrabold' : 'bg-gray-100 text-lg font-extrabold text-gray-700'} md:px-14 px-10 font-semibold py-2 rounded-md cursor-pointer`}>Recents Jobs</button>
                </div>
            </div>
            {/* conditional job  */}

            {
                visible ?
                    <LatestJobs />
                    :
                    <RecentJobs />
            }

            <div className="bg-[#F8FAFB]"><Category /></div>

            <div><SuggestedJob></SuggestedJob></div>
            <div><OurWork></OurWork></div>
            <div><ContactUs></ContactUs></div>
            <div><Review></Review></div>
        </div>
    );
};

export default HomePage;