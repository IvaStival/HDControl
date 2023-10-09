import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import Field from "../../../components/common/Field/Field";
import Group from "../../../components/common/Group/Group";
import Panel from "../../../components/common/Panel/Panel";

import { font, space, colors } from "../../../styles";

import "./RegisterPage.css";

const RegisterPage = () => {
  const values = {
    name: "",
    last: "",
    email: "",
    pass: "",
    confirm_pass: "",
  };

  const [inputs, setInputs] = useState(values);
  const [wrongPass, setWrongPass] = useState(false);

  const handleOnChangeInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleRegister = (e) => {
    if (inputs["pass"] !== inputs["confirm_pass"]) {
      setWrongPass(true);
      console.log("The passwords are differents.");
    } else {
      setWrongPass(false);
    }

    console.log(inputs);
  };

  return (
    <div className="register-content">
      <Panel>
        <h3>Regiter</h3>
        <Field
          top_title
          name="name"
          title="Name"
          onChange={handleOnChangeInputs}
        />
        <Field
          top_title
          name="last"
          title="Last Name"
          onChange={handleOnChangeInputs}
        />
        <Field
          top_title
          name="email"
          title="Email"
          onChange={handleOnChangeInputs}
        />
        <Group dir="column" mT={space.L}>
          <Field
            bg_color={wrongPass ? colors.danger : ""}
            top_title
            type="password"
            name="pass"
            title="Password"
            onChange={handleOnChangeInputs}
          />
          <Field
            bg_color={wrongPass ? colors.danger : ""}
            top_title
            type="password"
            name="confirm_pass"
            title="Confirm"
            onChange={handleOnChangeInputs}
          />
          {wrongPass ? (
            <div style={{ fontSize: font.S, top: "-10px" }}>
              Passwords not matching
            </div>
          ) : (
            ""
          )}
        </Group>

        <Group justifyContent="flex-end">
          <Button outline rounded style={{ fontSize: font.M }}>
            Cancel
          </Button>
          <Button
            primary
            rounded
            onClick={handleRegister}
            style={{ fontSize: font.M, marginLeft: "3px" }}
          >
            Register
          </Button>
        </Group>
      </Panel>
    </div>
  );
};

export default RegisterPage;
