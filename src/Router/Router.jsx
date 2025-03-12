import { Route, Routes } from "react-router";
import Home from "../page/Home/Home";


const Router = () => {
    return (
        <div>
            <Routes>
           <Route path="/" element={<Home/>}>
            
           </Route>
            </Routes>
        </div>
    );
};

export default Router;