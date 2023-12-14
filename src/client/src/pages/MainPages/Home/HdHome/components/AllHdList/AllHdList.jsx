import "./AllHdList.css";
import Panel from "../../../../../../components/common/Panel/Panel";
import Title from "../../../../../../components/common/Title/Title";

const AllHdList = () => {
  return (
    <div className="all-hd-list-content">
      <Title>HDs List</Title>
      <Panel className="all-hd-panel">
        <div className="content"></div>
      </Panel>
    </div>
  );
};

export default AllHdList;
