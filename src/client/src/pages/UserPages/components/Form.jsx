import { useState } from "react";

import Panel from "../../../components/Panel";
import Field from "../../../components/Field";
import CheckBox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Group from "../../../components/Group";

import { font, space, direction, title } from "../../../styles";

import "./Form.css";

const Form = ({ data }) => {
  const [bkpCheck, setBkpCheck] = useState(
    data.type === "backup" ? true : false
  );
  const [masterCheck, setMasterCheck] = useState(
    data.type === "raw" ? true : false
  );
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
      <div className="label-group">
        <label style={{ fontSize: title.M }}>FFHD0{data.id}</label>
      </div>
      <Panel>
        <Field title="Location" defaultValue={data.location} />
        <Field title="Job" defaultValue={data.job} />
        <Field
          title="Size"
          type="number"
          simbol="TB"
          defaultValue={data.size}
        />
        <Group mR={space.M} dir={direction.row}>
          <CheckBox
            disable={masterCheck}
            handleChange={handleBkpChange}
            title="Backup"
            getStatus={bkp_status}
            tS={font.S}
            defaultValue={bkpCheck}
          />
          <CheckBox
            disable={bkpCheck}
            title="Master"
            handleChange={handleMasterChange}
            getStatus={bkp_status}
            tS={font.S}
            mL={space.L}
            defaultValue={masterCheck}
          />
        </Group>
        <Field
          title="Description"
          description
          defaultValue={data.description}
        />
        <Group dir={direction.row}>
          <Button primary rounded onClick={handleSave}>
            Save
          </Button>
          <Button secondary rounded style={{ marginLeft: space.S }}>
            Reset
          </Button>
        </Group>
      </Panel>
    </div>
  );
};
export default Form;
