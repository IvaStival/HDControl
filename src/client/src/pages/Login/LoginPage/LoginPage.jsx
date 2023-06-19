import { useEffect } from "react";
import LoginArea from "../../../components/login/LoginArea/LoginArea";
import LoginArt from "../../../components/login/LoginArt/LoginArt";

import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div className="login-content">
      <LoginArea />
      <LoginArt />
    </div>
  );
};

export default LoginPage;
