import "./LoginArea.css";
import { font, title } from "../../../styles";
import Button from "../../../components/Button";

const LoginArea = () => {
  return (
    <div className="login-area">
      <h1 className="login-common-style" style={{ fontSize: title.L }}>
        HD Control
      </h1>
      <form>
        <div className="login-form-control login-common-style">
          <label style={{ fontSize: font.S }}>Email Address</label>
          <input style={{ fontSize: font.S }} type="text" required />
        </div>
        <div className="login-form-control login-common-style pass">
          <label style={{ fontSize: font.S }}>Password</label>
          <input type="password" required />
        </div>
      </form>
      <div className="forgot-password">
        <a href="/" style={{ fontSize: font.S }}>
          Forgot your password?
        </a>
      </div>
      <Button primary>Login</Button>
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
