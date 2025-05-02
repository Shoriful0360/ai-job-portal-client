import { Navigate, useLocation } from "react-router";
import LoadingSpinner from "../shared/LoadingSpinner";
import { useSelector } from "react-redux";
import useRole from "../Utility/useRole";

const PrivateRoute = ({ children, allowedRoles = [] }) => {
    const { user, loading } = useSelector((state) => state.auth);
    const { role, isLoading } = useRole();
    const location = useLocation();

    if (loading || isLoading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (allowedRoles.length === 0 || allowedRoles.includes(role)) {
        return children;
    }

    // Optional: Navigate to an "unauthorized" page or dashboard
    return <Navigate to="/unauthorized" replace />;
};

export default PrivateRoute;
