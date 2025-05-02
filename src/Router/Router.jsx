import { Route, Routes } from "react-router";
import Home from "../page/Home/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import FindJob from "../page/FindJob";
import Employers from "../page/Employers";
import HomePage from "../page/Home/HomePage";
import JobDetails from "../page/jobDetails/JobDetails";
import Dashboard from "../Dashboard/Dashboard";

import ManageJob from "../AdminRoute/ManageJob";
import ManageUser from "../AdminRoute/ManageUser";
import ManageReview from "../AdminRoute/ManageReview";

import AddJob from "../EmployersRoute/AddJob";
import MyAddJob from "../EmployersRoute/MyAddJob";

import HiredCandidates from "../EmployersRoute/HiredCandidates";
import MyAppliedJob from "../JobSeekerRoute/MyAppliedJob";
import MyProfile from "../JobSeekerRoute/MyProfile";

import Wishlist from "../JobSeekerRoute/Wishlist";
import DashBoardHome from "../page/DashBoardHome";
import ForgotPassword from "../page/ForgotPassword";
import UpdatePage from "../page/UpdatePage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkAuthState } from "../Redux/authSlice";

import Suggestion from "../page/Suggestion";
import CategoryJob from "../page/categoryJob/CategoryJob";
import AllCandidates from "../page/AllCandidates";
import Resume from "../page/Resume";
import ContactRequest from "../AdminRoute/ContactRequest";
import Profile from "../page/profile/Profile";
import AdditionalInfoSeeker from "../JobSeekerRoute/profile/AdditionalInfoSeeker";
import AddressSeeker from "../JobSeekerRoute/profile/AddressSeeker";
import EducationSeeker from "../JobSeekerRoute/profile/EducationSeeker";
import ImportantLinkSeeker from "../JobSeekerRoute/profile/ImportantLinkSeeker";
import SkillSeeker from "../JobSeekerRoute/profile/SkillSeeker";
import PrivateRoute from "./PrivateRoute";
import HiredCandidateDetails from "../page/HiredCandidateDetails";
import ResumeForm from "../page/ResumeForm";






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
                    <Route path="/resume" element={<ResumeForm></ResumeForm>}></Route>
                    
                  
                   
                   {/* profile */}
                
                   <Route path="/candidate-profile" element={<PrivateRoute><Profile/></PrivateRoute>}>
                   <Route path="/candidate-profile" element={<MyProfile/>}></Route>
                   <Route path="/candidate-profile/my-profile" element={<MyProfile/>} />
                   <Route path="/candidate-profile/additional-info" element={<AdditionalInfoSeeker/>}></Route>
                   <Route path="/candidate-profile/address" element={<AddressSeeker/>}></Route>
                   <Route path="/candidate-profile/education" element={<EducationSeeker/>}/>
                   <Route path="/candidate-profile/important-link" element={<ImportantLinkSeeker/>}/>
                   <Route path="/candidate-profile/skill-set" element={<SkillSeeker/>}/>
                   
                   </Route>
                </Route>

                {/* dashboard route */}

                <Route path="/dashboard" element={<Dashboard></Dashboard>}>

                    <Route path="/dashboard" element={<DashBoardHome></DashBoardHome>}></Route>

               
                    <Route path="/dashboard/manageJob" element={<PrivateRoute allowedRoles={["Admin"]}>
                            <ManageJob></ManageJob>
                        </PrivateRoute>}></Route>
                    <Route path="/dashboard/manageUsers" element={<PrivateRoute allowedRoles={["Admin"]}>
                            <ManageUser></ManageUser>
                        </PrivateRoute>}></Route>
                    <Route path="/dashboard/manageReview" element={ <PrivateRoute allowedRoles={["Admin"]}>
                            <ManageReview></ManageReview>
                        </PrivateRoute>}></Route>
                    <Route path="/dashboard/contactUs" element={ <PrivateRoute allowedRoles={["Admin"]}>
                            <ContactRequest></ContactRequest>
                        </PrivateRoute>}></Route>

    
                    <Route path="/dashboard/addJob" element={<PrivateRoute allowedRoles={["Employer"]}>
                            <AddJob></AddJob>
                        </PrivateRoute>}></Route>
                    <Route path="/dashboard/myAddJob" element={<PrivateRoute allowedRoles={["Employer"]}>
                            <MyAddJob></MyAddJob>
                        </PrivateRoute>}></Route>                 
                    <Route path="/dashboard/hiredCandidates" element={<PrivateRoute allowedRoles={["Employer"]}>
                            <HiredCandidates></HiredCandidates>
                        </PrivateRoute>}></Route>
                    <Route path="/dashboard/hiredCandidates/hiredCandidateDetails" element={<PrivateRoute allowedRoles={["Employer"]}>
                            <HiredCandidateDetails></HiredCandidateDetails>
                        </PrivateRoute>}></Route>
                    <Route path="/dashboard/myAddJob/updatePage/:id" element={<PrivateRoute allowedRoles={["Employer"]}>
                                <UpdatePage></UpdatePage>
                        </PrivateRoute>}></Route>
                    <Route path="/dashboard/myAddJob/candidate/:id" element={<PrivateRoute allowedRoles={["Employer"]}>
                                <AllCandidates></AllCandidates>
                        </PrivateRoute>}></Route>
                    <Route path="/dashboard/myAddJob/candidate/resume/:id" element={<PrivateRoute allowedRoles={["Employer"]}>
                                <Resume></Resume>
                        </PrivateRoute>}></Route>

                    <Route path="/dashboard/myAppliedJob" element={<PrivateRoute allowedRoles={["Job Seeker"]}>
                                <MyAppliedJob></MyAppliedJob>
                        </PrivateRoute>}></Route>
             
                    <Route path="/dashboard/myWishlist" element={<PrivateRoute allowedRoles={["Job Seeker"]}>
                                <Wishlist></Wishlist>
                        </PrivateRoute>}></Route>
                </Route>
            </Routes>
        </div>
    );
};

export default Router;