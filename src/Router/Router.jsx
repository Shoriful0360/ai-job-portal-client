import { Route, Routes } from "react-router";
import { useDispatch, useEffect } from "react-redux";
import { checkAuthState } from "../Redux/authSlice";

// Import pages
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
import CategoryJob from "../page/categoryJob/CategoryJob";
import Profile from "../page/profile/Profile";
import AdditionalInfoSeeker from "../JobSeekerRoute/profile/AdditionalInfoSeeker";
import AddressSeeker from "../JobSeekerRoute/profile/AddressSeeker";
import EducationSeeker from "../JobSeekerRoute/profile/EducationSeeker";
import ImportantLinkSeeker from "../JobSeekerRoute/profile/ImportantLinkSeeker";
import SkillSeeker from "../JobSeekerRoute/profile/SkillSeeker";
import Resume from "../page/ResumeForm";

// Import PrivateRoute
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthState());
  }, [dispatch]);

  return (
    <div>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/findJobs" element={<FindJob />} />
          <Route path="/employers" element={<Employers />} />
          <Route path="/job-details/:id" element={<JobDetails />} />
          <Route path="/category-job/:title" element={<CategoryJob />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>

        {/* Candidate Profile Routes */}
        <Route path="/candidate-profile" element={
          <PrivateRoute allowedRoles={["jobseeker"]}>
            <Profile />
          </PrivateRoute>
        }>
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="additional-info" element={<AdditionalInfoSeeker />} />
          <Route path="address" element={<AddressSeeker />} />
          <Route path="education" element={<EducationSeeker />} />
          <Route path="important-link" element={<ImportantLinkSeeker />} />
          <Route path="skill-set" element={<SkillSeeker />} />
        </Route>

        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<PrivateRoute allowedRoles={["admin", "employer", "jobseeker"]}><Dashboard /></PrivateRoute>}>
          <Route path="/dashboard" element={<DashBoardHome />} />

          {/* Admin Routes */}
          <Route path="/dashboard/adminProfile" element={
            <PrivateRoute allowedRoles={["admin"]}>
              <AdminProfile />
            </PrivateRoute>
          } />
          <Route path="/dashboard/manageJob" element={
            <PrivateRoute allowedRoles={["admin"]}>
              <ManageJob />
            </PrivateRoute>
          } />
          <Route path="/dashboard/manageUsers" element={
            <PrivateRoute allowedRoles={["admin"]}>
              <ManageUser />
            </PrivateRoute>
          } />
          <Route path="/dashboard/manageReview" element={
            <PrivateRoute allowedRoles={["admin"]}>
              <ManageReview />
            </PrivateRoute>
          } />

          {/* Employer Routes */}
          <Route path="/dashboard/employerProfile" element={
            <PrivateRoute allowedRoles={["employer"]}>
              <EmployerProfile />
            </PrivateRoute>
          } />
          <Route path="/dashboard/addJob" element={
            <PrivateRoute allowedRoles={["employer"]}>
              <AddJob />
            </PrivateRoute>
          } />
          <Route path="/dashboard/myAddJob" element={
            <PrivateRoute allowedRoles={["employer"]}>
              <MyAddJob />
            </PrivateRoute>
          } />
          <Route path="/dashboard/CandidatesRequest" element={
            <PrivateRoute allowedRoles={["employer"]}>
              <RequestCandidates />
            </PrivateRoute>
          } />
          <Route path="/dashboard/hiredCandidates" element={
            <PrivateRoute allowedRoles={["employer"]}>
              <HiredCandidates />
            </PrivateRoute>
          } />
          <Route path="/dashboard/myAddJob/updatePage/:id" element={
            <PrivateRoute allowedRoles={["employer"]}>
              <UpdatePage />
            </PrivateRoute>
          } />

          {/* JobSeeker Routes */}
          <Route path="/dashboard/myAppliedJob" element={
            <PrivateRoute allowedRoles={["jobseeker"]}>
              <MyAppliedJob />
            </PrivateRoute>
          } />
          <Route path="/dashboard/myProfile" element={
            <PrivateRoute allowedRoles={["jobseeker"]}>
              <MyProfile />
            </PrivateRoute>
          } />
          <Route path="/dashboard/myReview" element={
            <PrivateRoute allowedRoles={["jobseeker"]}>
              <MyReview />
            </PrivateRoute>
          } />
          <Route path="/dashboard/myWishlist" element={
            <PrivateRoute allowedRoles={["jobseeker"]}>
              <Wishlist />
            </PrivateRoute>
          } />
        </Route>
      </Routes>
    </div>
  );
};

export default Router;
