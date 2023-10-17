import { useNavigate } from "react-router-dom";

import { useAddHdMutation, useAddLocMutation } from "../../../../store";

import Panel from "../../../../components/common/Panel/Panel";
import Form from "../components/Form/Form";

import "../../../index.css";

const HdCreate = () => {
  const [addHd] = useAddHdMutation();
  const [addLoc] = useAddLocMutation();
  const navigate = useNavigate();

  const addEmptyLocation = async (hd_id) => {
    const inputs = {
      location: "",
      responsible: "",
      phone: "",
      mail: "",
      date: "",
      job: "",
      type: "none",
      size: "0",
      hd_id: hd_id,
    };

    await addLoc(inputs)
      .unwrap()
      .then((response) => {
        navigate(0);
        return;
      })
      .catch((error) => console.error(error));
  };

  const handleSubmit = async (e, inputs) => {
    e.preventDefault();

    await addHd(inputs)
      .unwrap()
      .then((response) => {
        addEmptyLocation(response.id);
        navigate("/hds");
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
