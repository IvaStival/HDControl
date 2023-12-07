import "./HdItem.css";

import HdItemHeader from "./HdItemHeader";

const HdItem = ({ id, number, interactive, disable, handleAddHd }) => {
  const handleClick = (e) => {
    if (interactive) {
      handleAddHd(e, id);

      console.log(disable);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`hd-item-content ${disable ? "hd-disable" : ""}`}
    >
      <HdItemHeader interactive={interactive}>{number}</HdItemHeader>
    </div>
  );
};

export default HdItem;
