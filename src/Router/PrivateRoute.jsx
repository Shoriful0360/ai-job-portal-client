import { useContext } from "react";
import { AuthContext } from "../Utility/AuthProvidor";
import Loading from "../page/LoadingPage";
import { Navigate } from "react-router";



const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;