import SmallButton from "../../../../../../../components/common/SmallButtom/SmallButton";
import "./HdItem.css";

import HdItemHeader from "./HdItemHeader/HdItemHeader";

const HdItem = ({
  id,
  title,
  interactive,
  disable,
  handleAddHd,
  handleDeleteHd,
}) => {
  const handleClick = (e) => {
    if (interactive) {
      handleAddHd(e, id);
    }
  };

  const handleDeleteClick = (e) => {
    handleDeleteHd(e, id);
  };

  return (
    <div
      onClick={handleClick}
      className={`hd-item-content ${disable ? "hd-disable" : ""}`}
    >
      <HdItemHeader interactive={interactive}>{title}</HdItemHeader>
      {!interactive ? (
        <SmallButton
          onClick={handleDeleteClick}
          bg={true}
          verySmall={true}
          className={"hd-item-delete-btn"}
        >
          -
        </SmallButton>
      ) : (
        ""
      )}
    </div>
  );
};

export default HdItem;
