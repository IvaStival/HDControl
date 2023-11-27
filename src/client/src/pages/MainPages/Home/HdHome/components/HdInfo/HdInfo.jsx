import "./HdInfo.css";

import Panel from "../../../../../../components/common/Panel/Panel";
import InfoData from "./InfoData";

const HdInfo = ({ data }) => {
  return (
    <Panel className="info-panel">
      <InfoData data={data} />
    </Panel>
  );
};

export default HdInfo;
