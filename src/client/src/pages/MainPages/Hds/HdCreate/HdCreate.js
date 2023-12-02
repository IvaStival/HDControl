import "./HdCreate.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CreatePanel from "../components/CreatePanel/CreatePanel";
import { createHd } from "../../../../store/api/hds/actions/createHd";
import { selectStatus } from "../../../../store/api/hds/hdSlice";

const HdCreate = () => {
  const [addError, setAddError] = useState(0);
  const hdStatus = useSelector(selectStatus);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();

    // await addHd(inputs)
    //   .unwrap()
    //   .then((response) => {
    //     navigate("/hds");
    //   })
    //   .catch((error) => {
    //     setAddError(String(error.data.error.code));
    //     console.error(String(error.data.error.code));
    //   });

    const result = await dispatch(createHd(inputs));
    console.log(result);
  };

  return <CreatePanel handleSubmit={handleSubmit} addError={addError} />;
};

export default HdCreate;
