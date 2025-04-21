import { useContext } from "react";
import { AuthContext } from "../Utility/AuthProvidor";
import Loading from "../page/LoadingPage";
import { Navigate } from "react-router";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useSelector } from "react-redux";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useSelector((state)=>state.auth)
    if (loading) {
        return <LoadingSpinner/>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;