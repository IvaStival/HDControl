import "./HdItemHeader.css";

import HdName from "./HdName";

const HdItemHeader = ({ children }) => {
  return (
    <div className="hd-item-header-content">
      <HdName>{children}</HdName>
    </div>
  );
};

export default HdItemHeader;
