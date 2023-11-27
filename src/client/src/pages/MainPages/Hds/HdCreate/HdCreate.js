import { useNavigate } from "react-router-dom";
import { useAddHdMutation, useAddLocMutation } from "../../../../store";

import "./HdCreate.css";
import CreatePanel from "../components/CreatePanel/CreatePanel";
import { useState } from "react";

const HdCreate = () => {
  const [addError, setAddError] = useState(0);

  const [addHd] = useAddHdMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();

    await addHd(inputs)
      .unwrap()
      .then((response) => {
        navigate("/hds");
      })
      .catch((error) => {
        setAddError(String(error.data.error.code));
        console.error(String(error.data.error.code));
      });
  };

  return <CreatePanel handleSubmit={handleSubmit} addError={addError} />;
};

export default HdCreate;
