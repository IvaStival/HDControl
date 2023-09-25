import "./NavBar.css";

import { useDispatch, useSelector } from "react-redux";

import { logout } from "../../store/api/user/actions/logout";
import { Navigate, useLocation } from "react-router-dom";

import NavBarContent from "../../components/navbar/NavBarContent/NavBarContent";

const NavBar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  // ACCESS REDUX STORE VARIABLES TO CHECK BACKEND RETURNS
  const { loading, isAuth, success } = useSelector((state) => state.user);

  // CALL DISPATCH TO LOGOUT
  const handleLogout = (e) => {
    dispatch(logout());
  };

  // CHECK IF THE THE USER IS LOGGED IN
  if (loading) {
  } else if (success) {
    if (!isAuth) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  }

  return <NavBarContent handleLogout={handleLogout} />;
};

export default NavBar;
