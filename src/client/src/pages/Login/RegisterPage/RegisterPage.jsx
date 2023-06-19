import { useState } from "react";
import Button from "../../../components/common/Button/Button";
import Field from "../../../components/common/Field/Field";
import Group from "../../../components/common/Group/Group";
import Panel from "../../../components/common/Panel/Panel";

import { font } from "../../../styles";

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

  const handleOnChangeInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleRegister = (e) => {
    console.log(inputs);
  };

  return (
    <div className="register-content">
      <Panel>
        <h3>Regiter</h3>
        <Field name="name" title="Name" onChange={handleOnChangeInputs} />
        <Field name="last" title="Last Name" onChange={handleOnChangeInputs} />
        <Field name="email" title="Email" onChange={handleOnChangeInputs} />
        <Field
          type="password"
          name="pass"
          title="Password"
          onChange={handleOnChangeInputs}
        />
        <Field
          type="password"
          name="confirm_pass"
          title="Confirm"
          onChange={handleOnChangeInputs}
        />

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
