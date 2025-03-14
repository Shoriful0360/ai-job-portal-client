import { Route, Routes } from "react-router";
import Home from "../page/Home/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import FindJob from "../page/FindJob";
import Employers from "../page/Employers";
import Candidates from "../page/Candidates";
import HomePage from "../page/Home/HomePage";


const Router = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />}>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/findJobs" element={<FindJob></FindJob>}></Route>
                <Route path="/employers" element={<Employers></Employers>}></Route>
                <Route path="/candidates" element={<Candidates></Candidates>}></Route>
                </Route>

            </Routes>
        </div>
    );
};

export default Router;