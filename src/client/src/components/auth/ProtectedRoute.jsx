import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

import { auth } from "../../store/api/user/actions/auth";

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { loading, isAuth, success } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(auth());
  }, []);

  if (loading) {
    console.log("Wainting...");
  } else if (success) {
    console.log("[ProtectedRoute] - Success");
    if (isAuth) {
      console.log("[ProtectedRoute] - isAuth");
      return children;
    } else {
      console.log("[ProtectedRoute] - Logout");
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }
};

export default ProtectedRoute;
