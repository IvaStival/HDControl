import HdLocationItem from "./HdLocationItem";
import "./HdLocationList.css";

const HdLocationList = ({ data }) => {
  return (
    <div className="list">
      <h2>{data.title}</h2>
      <HdLocationItem ishome={data.ishome} />
    </div>
  );
};

export default HdLocationList;
