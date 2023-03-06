import "./HdLocationItem.css";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/Button";
import { useState } from "react";

const HdLocationItem = ({ id, name, size, job, ishome }) => {
  const [editVisible, setEditVisible] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate(`/update-loc/${id}`);
    setEditVisible(!editVisible);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleClick} className="location-item">
      <div className="hd-info">
        <div className="hd-name">{name}</div>
        <div className="size">{size}</div>
        <div className="job">{job}</div>
        <div
          className="status"
          style={{ backgroundColor: `${ishome ? "green" : "red"}` }}
        ></div>
      </div>
      <div className={`loc-item-edit ${editVisible ? "visible" : ""}`}>
        <label>Job</label>
        <input onClick={handleInputClick} type="text" defaultValue={job} />
        <Button rounded primary>
          Edit
        </Button>
      </div>
    </div>
  );
};

export default HdLocationItem;
