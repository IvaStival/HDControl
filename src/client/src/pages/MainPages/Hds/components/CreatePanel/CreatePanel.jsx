import "./CreatePanel.css";

import Panel from "../../../../../components/common/Panel/Panel";
import Form from "../Form/Form";

const CreatePanel = ({ handleSubmit, addError }) => {
  return (
    <Panel>
      <div className="create-panel-content">
        <Form isCreate={true} handleSubmit={handleSubmit} />
        {addError === "11000" ? <span>HD Already exists</span> : ""}
      </div>
    </Panel>
  );
};

export default CreatePanel;
