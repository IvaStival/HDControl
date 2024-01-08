import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../../../../components/common/Button/Button";
import Field from "../../../../../components/common/Field/Field";

import "./Form.css";

const Form = ({
  isCreate,
  values = { title: "", size: "", code: "" },
  handleSubmit,
}) => {
  const [inputs, setInputs] = useState(values);
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleClick = () => {
    navigate("/hds");
  };

  return (
    <div className="hd-create-content">
      <h3>{`${isCreate ? "Create New HD" : "Update HD"}`}</h3>
      <Field
        key={Math.random}
        name="title"
        title="Title"
        onChange={handleOnChange}
        defaultValue={inputs.title || ""}
        placeholder="FFHD01"
      />

      <Field
        name="size"
        title="Size"
        onChange={handleOnChange}
        defaultValue={inputs.size || ""}
        placeholder="4"
      />

      <Field
        name="code"
        title="Code"
        onChange={handleOnChange}
        defaultValue={inputs.code || ""}
        placeholder="GTA12321"
      />

      <div className="btns">
        <Button secondary outline rounded onClick={handleClick}>
          Back
        </Button>
        <Button
          className="btn-create"
          primary
          rounded
          onClick={(e) => handleSubmit(e, inputs)}
        >{`${isCreate ? "Create" : "Update"}`}</Button>
      </div>
    </div>
  );
};

export default Form;
