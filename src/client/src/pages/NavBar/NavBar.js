import "./NavBar.css";

import { useDispatch } from "react-redux";

import { logout } from "../../store/api/user/actions/logout";

import NavBarContent from "../../components/navbar/NavBarContent/NavBarContent";

const NavBar = () => {
  const dispatch = useDispatch();

  // CALL DISPATCH TO LOGOUT
  const handleLogout = (e) => {
    dispatch(logout());
  };

  return <NavBarContent handleLogout={handleLogout} />;
};

export default NavBar;
