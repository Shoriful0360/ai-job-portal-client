import { Route, Routes } from "react-router";
import Home from "../page/Home/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import FindJob from "../page/FindJob";
import Employers from "../page/Employers";
import HomePage from "../page/Home/HomePage";
import JobDetails from "../page/jobDetails/JobDetails";
import Dashboard from "../Dashboard/Dashboard";
import AdminProfile from "../AdminRoute/AdminProfile";
import ManageJob from "../AdminRoute/ManageJob";
import ManageUser from "../AdminRoute/ManageUser";
import ManageReview from "../AdminRoute/ManageReview";
import EmployerProfile from "../EmployersRoute/EmployerProfile";
import AddJob from "../EmployersRoute/AddJob";
import MyAddJob from "../EmployersRoute/MyAddJob";
import RequestCandidates from "../EmployersRoute/RequestCandidates";
import HiredCandidates from "../EmployersRoute/HiredCandidates";
import MyAppliedJob from "../JobSeekerRoute/MyAppliedJob";
import MyProfile from "../JobSeekerRoute/MyProfile";
import MyReview from "../JobSeekerRoute/MyReview";
import Wishlist from "../JobSeekerRoute/Wishlist";
import DashBoardHome from "../page/DashBoardHome";
import ForgotPassword from "../page/ForgotPassword";
import UpdatePage from "../page/UpdatePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuthState } from "../Redux/authSlice";
import SuggestedJob from "../Section/SuggestedJob";
import Suggestion from "../page/Suggestion";
import CategoryJob from "../page/categoryJob/CategoryJob";
import AllCandidates from "../page/AllCandidates";
import Resume from "../page/Resume";
import ContactRequest from "../AdminRoute/ContactRequest";
import Profile from "../page/profile/Profile";






const Router = () => {
  
const dispatch=useDispatch()

useEffect(()=>{
 dispatch(checkAuthState());
},[dispatch])

    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/findJobs" element={<FindJob></FindJob>}></Route>
                    <Route path="/employers" element={<Employers></Employers>}></Route>
                    <Route path="/" element={<HomePage></HomePage>}></Route>
                    <Route path="/job-details/:id" element={<JobDetails></JobDetails>}></Route>
                    <Route path="/category-job/:title" element={<CategoryJob/>}></Route>
      

                    <Route path="/login" element={<Login></Login>}></Route>
                    <Route path="/register" element={<Register></Register>}></Route>
                    <Route path="/findJobs" element={<FindJob></FindJob>}></Route>
                    <Route path="/employers" element={<Employers></Employers>}></Route>
                    <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
                    <Route path="/suggestJob" element={<Suggestion></Suggestion>}></Route>
                    
                  
                   
                   {/* profile */}
                   <Route path="/profile" element={<Profile/>}>
                   <Route path="/profile/my-profile" element={<MyProfile/>}></Route>
                   </Route>
                </Route>

                {/* dashboard route */}

                <Route path="/dashboard" element={<Dashboard></Dashboard>}>

                    <Route path="/dashboard" element={<DashBoardHome></DashBoardHome>}></Route>

                    <Route path="/dashboard/adminProfile" element={<AdminProfile></AdminProfile>}></Route>
                    <Route path="/dashboard/manageJob" element={<ManageJob></ManageJob>}></Route>
                    <Route path="/dashboard/manageUsers" element={<ManageUser></ManageUser>}></Route>
                    <Route path="/dashboard/manageReview" element={<ManageReview></ManageReview>}></Route>
                    <Route path="/dashboard/contactUs" element={<ContactRequest></ContactRequest>}></Route>

                    <Route path="/dashboard/employerProfile" element={<EmployerProfile></EmployerProfile>}></Route>
                    <Route path="/dashboard/addJob" element={<AddJob></AddJob>}></Route>
                    <Route path="/dashboard/myAddJob" element={<MyAddJob></MyAddJob>}></Route>
                    <Route path="/dashboard/CandidatesRequest" element={<RequestCandidates></RequestCandidates>}></Route>
                    <Route path="/dashboard/hiredCandidates" element={<HiredCandidates></HiredCandidates>}></Route>
                    <Route path="/dashboard/myAddJob/updatePage/:id" element={<UpdatePage></UpdatePage>}></Route>
                    <Route path="/dashboard/myAddJob/candidate/:id" element={<AllCandidates></AllCandidates>}></Route>
                    <Route path="/dashboard/myAddJob/candidate/resume/:id" element={<Resume></Resume>}></Route>

                    <Route path="/dashboard/myAppliedJob" element={<MyAppliedJob></MyAppliedJob>}></Route>
                    <Route path="/dashboard/myProfile" element={<MyProfile/>}></Route>
                    <Route path="/dashboard/myReview" element={<MyReview></MyReview>}></Route>
                    <Route path="/dashboard/myWishlist" element={<Wishlist></Wishlist>}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default Router;