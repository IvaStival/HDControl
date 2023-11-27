import "./HdItem.css";

import HdItemHeader from "./HdItemHeader";

const HdItem = ({ number }) => {
  return (
    <div className="hd-item-content">
      <HdItemHeader>{number}</HdItemHeader>
    </div>
  );
};

export default HdItem;
