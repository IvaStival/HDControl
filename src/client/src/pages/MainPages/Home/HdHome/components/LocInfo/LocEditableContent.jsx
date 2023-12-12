import "./LocEditableContent.css";

import Buttom from "../../../../../../components/common/Button/Button";
import Field from "../../../../../../components/common/Field/Field";
const LocEditableContent = ({ handleClick }) => {
  return (
    <div onClick={handleClick} className="loc-edit-content">
      <Field title="Localization"></Field>
      <Field title="Responsible"></Field>
      <Field title="City"></Field>
      <Field title="Phone"></Field>
      <Field title="Mail"></Field>
      <Field description title="Description"></Field>
      <div className="loc-btns">
        <Buttom className={"loc-update-btn"}>Cancel</Buttom>
        <Buttom primary className={"loc-update-btn"}>
          Update
        </Buttom>
      </div>
    </div>
  );
};

// location
// responsible
// city
// phone
// mail
// description

export default LocEditableContent;
