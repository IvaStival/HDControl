import "./JobHeader.css";

import SmallButton from "../SmallButtom/SmallButton";

const HdJobHeader = ({ title, handleDelete, showDropdown }) => {
  const handleClick = (e) => {
    // console.log(e.target.offsetLeft, e.target.offsetTop);

    const { left, top } = e.currentTarget.getBoundingClientRect();
    showDropdown(e, left, top);
  };

  return (
    <div className="hd-job-header-content">
      <span className="job-title">{title}</span>
      <div className="job-btns">
        <SmallButton handleClick={handleDelete}>-</SmallButton>
        <SmallButton handleClick={handleClick}>+</SmallButton>
      </div>
    </div>
  );
};

export default HdJobHeader;
