import "./JobHeader.css";

import SmallButton from "../SmallButtom/SmallButton";

const HdJobHeader = ({ title, handleDelete, showDropdown }) => {
  return (
    <div className="hd-job-header-content">
      <span className="job-title">{title}</span>
      <div className="job-btns">
        <SmallButton handleClick={handleDelete}>-</SmallButton>
        <SmallButton handleClick={showDropdown}>+</SmallButton>
      </div>
    </div>
  );
};

export default HdJobHeader;
