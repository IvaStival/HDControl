import "./HdJobBox.css";

import Panel from "../../../../../../components/common/Panel/Panel";
import HdItemList from "../HdItemList/HdItemList";

const HdJobBox = ({ title, hd_list }) => {
  return (
    <div className="job-box">
      <Panel>
        <div className="job-content">
          <span className="job-title">{title}</span>
          <HdItemList data={hd_list} />
        </div>
      </Panel>
    </div>
  );
};

export default HdJobBox;
