import "./CreateJob.css";

import Field from "../../../../../../components/common/Field/Field";
import { useState } from "react";
import Button from "../../../../../../components/common/Button/Button";

import { createJob } from "../../../../../../store/api/jobs/actions/createJob";
// import { updateJobList } from "../../../../../../store/api/jobs/jobSlice";
import { useDispatch } from "react-redux";

const CreateJob = ({ setShowMenu }) => {
  const [jobName, setJobName] = useState();

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setJobName(e.target.value);
  };

  const handleClick = (e) => {
    setShowMenu(false);
    dispatch(createJob({ title: jobName }));
    // dispatch(
    //   updateJobList({
    //     _id: "6536c9572b243a7f2535e59r",
    //     title: jobName,
    //     hdIds: ["10", "100", "8"],
    //     createdAt: "2023-10-23T19:28:23.170Z",
    //     updatedAt: "2023-10-23T19:28:23.170Z",
    //     __v: 1,
    //   })
    // );
  };

  return (
    <div className="create-job-content">
      <h4>Create New Job</h4>
      <div className="job-info">
        <Field
          name="job-name"
          title="Job Name"
          onChange={handleOnChange}
          defaultValue={jobName || ""}
          placeholder="2022_01_FANTASTICA"
        />
        <Button onClick={handleClick}>Create</Button>
      </div>
    </div>
  );
};

export default CreateJob;
