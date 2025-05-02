import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useSelector } from "react-redux";
import useRole from "../Utility/useRole";

const PrivateRoute = ({ children, allowedRoles }) => {
    const { user, loading } = useSelector((state) => state.auth);
    const { role, isLoading } = useRole();
    const location = useLocation();

    if (loading || isLoading) {
        return <LoadingSpinner />;
    }
    

    // Check if the user is authenticated and has a valid role
    if (user && allowedRoles.includes(role)) {
        return children;
    }

    // Redirect to login if not authenticated or role doesn't match
    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
