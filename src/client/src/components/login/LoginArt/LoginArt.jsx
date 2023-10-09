import "./LoginArt.css";

import logo from "../../../images/login/logo.png";
import ghost from "../../../images/login/ghost.png";
import ufo from "../../../images/login/ufo.png";
import icons from "../../../images/login/icons.png";

const LoginArt = () => {
  return (
    <div className="login-art">
      <img className="logo" src={logo} alt="" />
      <img className="ghost" src={ghost} alt="" />
      <img className="ufo" src={ufo} alt="" />
      <img className="icons" src={icons} alt="" />
    </div>
  );
};

export default LoginArt;
