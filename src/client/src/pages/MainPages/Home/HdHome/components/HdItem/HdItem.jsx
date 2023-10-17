import "./HdItem.css";

const HdItem = ({ number }) => {
  return (
    <div className="hd-item-content">
      <span className="hd-number">{number}</span>
      <span className="hd-size">4TB</span>
    </div>
  );
};

export default HdItem;
