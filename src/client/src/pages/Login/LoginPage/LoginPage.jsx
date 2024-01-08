import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import LoginArea from "../../../components/login/LoginArea/LoginArea";
import LoginArt from "../../../components/login/LoginArt/LoginArt";

import { login } from "../../../store/api/user/actions/login";
import { auth } from "../../../store/api/user/actions/auth";

import "./LoginPage.css";

const LoginPage = () => {
  const [inputs, setInputs] = useState({});

  const location = useLocation();
  const dispatch = useDispatch();

  const { loading, isAuth, success } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(auth());
  }, [isAuth]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login(inputs));
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((old_values) => ({ ...old_values, [name]: value }));
  };

  if (loading) {
    return <div>Loading ...</div>;
  } else if (success) {
    if (isAuth) {
      return <Navigate to="/" state={{ from: location }} replace />;
    } else {
      return (
        <div className="login-content">
          <LoginArea
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            inputs={inputs}
          />
          <LoginArt />
        </div>
      );
    }
  }
};

export default LoginPage;
