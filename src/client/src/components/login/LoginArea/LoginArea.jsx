import "./LoginArea.css";
import { font, title } from "../../../styles";
import Button from "../../../components/common/Button/Button";
import { useState } from "react";
import GoogleAuth from "../../auth/GoogleAuth";

const LoginArea = () => {
  const [inputs, setInputs] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(inputs);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((old_values) => ({ ...old_values, [name]: value }));
  };

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
          />
        </div>
        <div className="login-form-control login-common-style pass">
          <label style={{ fontSize: font.S }}>Password</label>
          <input onChange={handleChange} type="password" name="password" />
        </div>
        <div className="login-links">
          <a href="/" style={{ fontSize: font.S }}>
            Forgot your password?
          </a>
        </div>
        <Button primary>Login</Button>
        <GoogleAuth />
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
