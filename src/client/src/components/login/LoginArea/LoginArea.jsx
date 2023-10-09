import { useSelector } from "react-redux";

import "./LoginArea.css";
import { font, title } from "../../../styles";
import Button from "../../../components/common/Button/Button";

const LoginArea = ({ handleSubmit, handleChange, inputs }) => {
  const { loading } = useSelector((state) => state.user);

  return (
    <div className="login-area">
      <h1 className="login-common-style" style={{ fontSize: title.L }}>
        HD Control
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="login-form-control login-common-style">
          <label style={{ fontSize: font.S }}>Email Address</label>
          <input
            onChange={handleChange}
            style={{ fontSize: font.S }}
            type="text"
            name="email"
            placeholder="name@company.com"
          />
        </div>
        <div className="login-form-control login-common-style pass">
          <label style={{ fontSize: font.S }}>Password</label>
          <input
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="••••••••"
          />
        </div>
        <div className="login-links">
          <a href="/" style={{ fontSize: font.S }}>
            Forgot your password?
          </a>
        </div>
        <Button primary>{loading ? "Loading ..." : "Login"}</Button>
      </form>

      <div className="login-info-content">
        <div>
          <p style={{ fontSize: font.S }}>Problem to access?</p>
          <p style={{ fontSize: font.S }}>Send a message to (41) 996836428</p>
        </div>
        <div>
          <p style={{ fontSize: font.S }}>or a email to:</p>
          <p style={{ fontSize: font.S }}>
            fantastica_admin@fantasticafilmes.com
          </p>
        </div>
        <div>
          <p style={{ fontSize: font.S }}>Fantastica Filmes ltda.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginArea;
