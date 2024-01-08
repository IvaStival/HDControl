import "./HdStateList.css";
import Panel from "../../../../../../components/common/Panel/Panel";
import Title from "../../../../../../components/common/Title/Title";
import HdIcon from "./HdIcon/HdIcon";

const HdStateList = () => {
  return (
    <div className="all-hd-list-content">
      <Title>Available HDs</Title>
      <Panel className="all-hd-panel">
        <div className="hd-list-content">
          <HdIcon title="FFHD01" size="4" type={1} />
          <HdIcon title="FFHD01" size="2" type={1} />
        </div>
      </Panel>
    </div>
  );
};

export default HdStateList;
