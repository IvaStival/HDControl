import HdLocationItem from "./HdLocationItem";
import "./HdLocationList.css";

const HdLocationList = ({ title, data }) => {
  const renderItems = data.map((item) => {
    return (
      <HdLocationItem
        key={item.name}
        id={item.id}
        name={item.name}
        ishome={item.ishome}
        size={item.size}
        location={item.location}
        job={item.job}
      />
    );
  });
  return (
    <div className="item-content">
      <h2>{title}</h2>
      <div className="list">{renderItems}</div>
    </div>
  );
};

export default HdLocationList;
