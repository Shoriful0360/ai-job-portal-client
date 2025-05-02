
import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useSelector } from "react-redux";
import useRole from "../Utility/useRole";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useSelector((state)=>state.auth)
    const{role,isLoading}=useRole()
    const location=useLocation()
    if (loading || isLoading) {
        return <LoadingSpinner/>
    }
    if (user ||  role) {
        return children
    }
    return <Navigate to='/login' state={{from:location}} replace="true"></Navigate>
};

export default PrivateRoute;