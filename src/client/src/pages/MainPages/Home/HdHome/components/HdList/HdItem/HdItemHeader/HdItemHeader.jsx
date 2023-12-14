import "./HdItemHeader.css";

import HdName from "../HdName/HdName";

const HdItemHeader = ({ interactive, children }) => {
  return (
    <div className={"hd-item-header-content"}>
      <HdName interactive={interactive}>{children}</HdName>
    </div>
  );
};

export default HdItemHeader;
