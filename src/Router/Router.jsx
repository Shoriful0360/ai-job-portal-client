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
import CategoryJob from "../page/categoryJob/CategoryJob";
import Profile from "../page/profile/Profile";
import AdditionalInfoSeeker from "../JobSeekerRoute/profile/AdditionalInfoSeeker";
import AddressSeeker from "../JobSeekerRoute/profile/AddressSeeker";
import EducationSeeker from "../JobSeekerRoute/profile/EducationSeeker";
import ImportantLinkSeeker from "../JobSeekerRoute/profile/ImportantLinkSeeker";
import SkillSeeker from "../JobSeekerRoute/profile/SkillSeeker";
import PrivateRoute from "./PrivateRoute";
import Resume from "../page/ResumeForm";

const Router = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuthState());
    }, [dispatch]);

    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<HomePage />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="findJobs" element={<FindJob />} />
                <Route path="employers" element={<Employers />} />
                <Route path="job-details/:id" element={<JobDetails />} />
                <Route path="category-job/:title" element={<CategoryJob />} />
                <Route path="resume" element={<Resume />} />
                <Route path="forgot-password" element={<ForgotPassword />} />

                {/* Job Seeker Profile Routes */}
                <Route
                    path="candidate-profile"
                    element={
                        <PrivateRoute allowedRoles={["Job Seeker"]}>
                            <Profile />
                        </PrivateRoute>
                    }
                >
                    <Route index element={<MyProfile />} />
                    <Route path="my-profile" element={<MyProfile />} />
                    <Route path="additional-info" element={<AdditionalInfoSeeker />} />
                    <Route path="address" element={<AddressSeeker />} />
                    <Route path="education" element={<EducationSeeker />} />
                    <Route path="important-link" element={<ImportantLinkSeeker />} />
                    <Route path="skill-set" element={<SkillSeeker />} />
                </Route>
            </Route>

            {/* Dashboard (with nested role-specific routes) */}
            <Route
                path="/dashboard"
                element={
                    <PrivateRoute allowedRoles={["Admin", "Employer", "Job Seeker"]}>
                        <Dashboard />
                    </PrivateRoute>
                }
            >
                <Route index element={<DashBoardHome />} />

                {/* Admin Routes */}
                <Route
                    path="adminProfile"
                    element={
                        <PrivateRoute allowedRoles={["Admin"]}>
                            <AdminProfile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="manageJob"
                    element={
                        <PrivateRoute allowedRoles={["Admin"]}>
                            <ManageJob />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="manageUsers"
                    element={
                        <PrivateRoute allowedRoles={["Admin"]}>
                            <ManageUser />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="manageReview"
                    element={
                        <PrivateRoute allowedRoles={["Admin"]}>
                            <ManageReview />
                        </PrivateRoute>
                    }
                />

                {/* Employer Routes */}
                <Route
                    path="employerProfile"
                    element={
                        <PrivateRoute allowedRoles={["Employer"]}>
                            <EmployerProfile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="addJob"
                    element={
                        <PrivateRoute allowedRoles={["Employer"]}>
                            <AddJob />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="myAddJob"
                    element={
                        <PrivateRoute allowedRoles={["Employer"]}>
                            <MyAddJob />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="CandidatesRequest"
                    element={
                        <PrivateRoute allowedRoles={["Employer"]}>
                            <RequestCandidates />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="hiredCandidates"
                    element={
                        <PrivateRoute allowedRoles={["Employer"]}>
                            <HiredCandidates />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="myAddJob/updatePage/:id"
                    element={
                        <PrivateRoute allowedRoles={["Employer"]}>
                            <UpdatePage />
                        </PrivateRoute>
                    }
                />

                {/* Job Seeker Routes */}
                <Route
                    path="myAppliedJob"
                    element={
                        <PrivateRoute allowedRoles={["Job Seeker"]}>
                            <MyAppliedJob />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="myProfile"
                    element={
                        <PrivateRoute allowedRoles={["Job Seeker"]}>
                            <MyProfile />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="myReview"
                    element={
                        <PrivateRoute allowedRoles={["Job Seeker"]}>
                            <MyReview />
                        </PrivateRoute>
                    }
                />
                <Route
                    path="myWishlist"
                    element={
                        <PrivateRoute allowedRoles={["Job Seeker"]}>
                            <Wishlist />
                        </PrivateRoute>
                    }
                />
            </Route>
        </Routes>
    );
};

export default Router;
