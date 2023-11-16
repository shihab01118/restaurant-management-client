import PropTypes from "prop-types";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading: isUserLoading } = useAuth();
  const { isAdmin, isLoading: isAdminLoading } = useAdmin();
  const location = useLocation();

  if (isUserLoading || isAdminLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-spinner text-warning text-4xl"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

AdminRoute.propTypes = {
  children: PropTypes.node,
};

export default AdminRoute;
