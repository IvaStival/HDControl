import "./HdCreate.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CreatePanel from "../components/CreatePanel/CreatePanel";
import { createHd } from "../../../../store/api/hds/actions/createHd";

const HdCreate = () => {
  const [addError, setAddError] = useState(0);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();

    const new_hd_data = { ...inputs, qrcode: "ASDAS", type: 1 };

    dispatch(createHd(new_hd_data));
    navigate("/hds");
  };

  return <CreatePanel handleSubmit={handleSubmit} addError={addError} />;
};

export default HdCreate;
