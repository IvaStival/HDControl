import { useNavigate } from "react-router-dom";

import { useAddHdMutation } from "../../../../store";

import Panel from "../../../../components/Panel";
import Form from "../components/Form";

import "../../../index.css";

const HdCreate = () => {
  const [addHd] = useAddHdMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();

    await addHd(inputs)
      .unwrap()
      .then((response) => {
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <Panel>
      <Form isCreate={true} handleSubmit={handleSubmit} />
    </Panel>
  );
};

export default HdCreate;
