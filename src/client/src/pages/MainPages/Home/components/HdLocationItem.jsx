import "./HdLocationItem.css";
import Button from "../../../../components/Button";
import { useUpdateLocMutation } from "../../../../store";
import { useState } from "react";

const HdLocationItem = ({ id, name, size, job, ishome, location }) => {
  const [editVisible, setEditVisible] = useState(false);
  const [editJob, setEditJob] = useState(job);
  const [editLocation, setEditLocation] = useState(location);

  const [updateLocation] = useUpdateLocMutation();

  const handleClick = () => {
    setEditVisible(!editVisible);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
  };

  const handleJobInputChange = (e) => {
    setEditJob(e.target.value);
  };

  const handleLocInputChange = (e) => {
    setEditLocation(e.target.value);
  };

  const handleEditClick = async (e) => {
    await updateLocation({
      id: id,
      inputs: {
        job: editJob,
        location: editLocation,
      },
    })
      .unwrap()
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  return (
    <div onClick={handleClick} className="location-item">
      <div className="hd-info">
        <div className="hd-name">{name}</div>
        <div className="size">{size}TB</div>
        <small className="job">{job}</small>
        <small className="location">{location}</small>
        <div
          className="status"
          style={{ backgroundColor: `${ishome ? "green" : "red"}` }}
        ></div>
      </div>
      <div
        onClick={handleInputClick}
        className={`loc-item-edit ${editVisible ? "visible" : ""}`}
      >
        <div className="content">
          <div className="field job-field">
            <label>Job</label>
            <input
              onChange={handleJobInputChange}
              onClick={handleInputClick}
              type="text"
              defaultValue={editJob}
            />
          </div>
          <div className="field location-field">
            <label>Location</label>
            <input
              onChange={handleLocInputChange}
              onClick={handleInputClick}
              type="text"
              defaultValue={editLocation}
            />
          </div>
          <Button onClick={handleEditClick} rounded primary>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HdLocationItem;
