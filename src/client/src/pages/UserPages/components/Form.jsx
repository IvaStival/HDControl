import { useState } from "react";

import Panel from "../../../components/Panel";
import Field from "../../../components/Field";
import CheckBox from "../../../components/CheckBox";
import Button from "../../../components/Button";
import Group from "../../../components/Group";

import { font, space, direction, title } from "../../../styles";

import "./Form.css";
import { useUpdateLocMutation } from "../../../store";
import { getDate } from "../../../utils/getDate";

const Form = ({ data }) => {
  const [location, setLocation] = useState(data.location);
  const [job, setJob] = useState(data.job);
  const [size, setSize] = useState(data.size);
  const [description, setDescription] = useState(data.description);
  const [bkpCheck, setBkpCheck] = useState(
    data.type === "backup" ? true : false
  );
  const [masterCheck, setMasterCheck] = useState(
    data.type === "raw" ? true : false
  );

  const [updateLocation] = useUpdateLocMutation();

  const handleSave = async (e) => {
    const date = getDate();
    console.log(date);

    let data_type = "";
    if (bkpCheck) data_type = "backup";
    else if (masterCheck) data_type = "raw";

    await updateLocation({
      id: data.id,
      inputs: {
        location: location,
        job: job,
        size: size,
        type: data_type,
        description: description,
        date: date,
      },
    });
  };

  const handleBkpChange = (e) => {
    setBkpCheck(!bkpCheck);
  };

  const handleMasterChange = (e) => {
    setMasterCheck(!masterCheck);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };
  const handleJob = (e) => {
    setJob(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const resetForm = (e) => {
    setLocation("");
    setJob("");
    setSize("");
    setDescription("");
    setBkpCheck(false);
    setMasterCheck(false);
  };

  return (
    <div className="edit-loc-content">
      <div className="label-group">
        <label style={{ fontSize: title.M }}>FFHD0{data.id}</label>
      </div>
      <Panel>
        <Field title="Location" onChange={handleLocation} value={location} />
        <Field title="Job" value={job} onChange={handleJob} />
        <Field
          title="Size"
          type="number"
          simbol="TB"
          value={size}
          onChange={handleSize}
        />
        <Group mR={space.M} dir={direction.row}>
          <CheckBox
            disable={masterCheck}
            handleChange={handleBkpChange}
            title="Backup"
            tS={font.S}
            value={bkpCheck}
          />
          <CheckBox
            disable={bkpCheck}
            title="Master"
            handleChange={handleMasterChange}
            tS={font.S}
            mL={space.L}
            value={masterCheck}
          />
        </Group>
        <Field
          title="Description"
          description
          value={description}
          onChange={handleDescription}
        />
        <Group dir={direction.row}>
          <Button primary rounded onClick={handleSave}>
            Save
          </Button>
          <Button
            secondary
            rounded
            style={{ marginLeft: space.S }}
            onClick={resetForm}
          >
            Reset
          </Button>
        </Group>
      </Panel>
    </div>
  );
};
export default Form;
