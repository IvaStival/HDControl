import { useState } from "react";

import { useParams } from "react-router-dom";

import Panel from "../../components/Panel";
import Field from "../../components/Field";
import CheckBox from "../../components/CheckBox";
import Button from "../../components/Button";
import Group from "../../components/Group";
import "./EditLocationPage.css";

import { font, space, direction } from "../../styles";
const EditLocationPage = () => {
  const { id } = useParams();
  const [bkpCheck, setBkpCheck] = useState(false);
  const [masterCheck, setMasterCheck] = useState(false);

  let bkp_status;

  const handleSave = (e) => {
    console.log(bkpCheck);
  };

  const handleBkpChange = (e) => {
    setBkpCheck(!bkpCheck);
  };

  const handleMasterChange = (e) => {
    setMasterCheck(!masterCheck);
  };

  return (
    <div className="edit-loc-content">
      <label>FFHD0{id}</label>
      <Panel>
        <Field title="Location" />
        <Field title="Job" />
        <Field title="Size" type="number" />
        <Group mR={space.M} dir={direction.row}>
          <CheckBox
            disable={masterCheck}
            handleChange={handleBkpChange}
            title="Backup"
            getStatus={bkp_status}
            tS={font.S}
          />
          <CheckBox
            disable={bkpCheck}
            title="Master"
            handleChange={handleMasterChange}
            getStatus={bkp_status}
            tS={font.S}
            mL={space.L}
          />
        </Group>
        <Field title="Description" description />
        <Button primary rounded onClick={handleSave}>
          Save
        </Button>
      </Panel>
    </div>
  );
};

export default EditLocationPage;
