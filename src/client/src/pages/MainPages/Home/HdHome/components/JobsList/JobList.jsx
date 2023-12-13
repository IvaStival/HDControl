import "./JobList.css";

import JobBox from "../JobBox/JobBox";
import Dropdown from "../../../../../../components/common/Dropdown/Dropdown";
import HdList from "../HdList/HdList";
import Title from "../../../../../../components/common/Title/Title";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobs } from "../../../../../../store/api/jobs/actions/getJobs";
import { selectJobs } from "../../../../../../store/api/jobs/jobSlice";
import { updateJob } from "../../../../../../store/api/jobs/actions/updateJob";

import { getHds } from "../../../../../../store/api/hds/actions/getHds";
import { selectHdStatus } from "../../../../../../store/api/hds/hdSlice";
import { selectHds } from "../../../../../../store/api/hds/hdSlice";

// This component is a list with all the Jobs
// It uses JobBox component to each Job
// Here we develop one FloatWindow that will show all hds that exists
const HdJobList = () => {
  let content;
  let usedHds = []; // List with all Hds that already are in a Job

  const [showMenu, setShowMenu] = useState(false); // This will control when the FloatWindo will be showed
  const [clickPos, setClickPos] = useState([0, 0]); // Clicked position x, y variable
  const [currentJobName, setCurrentJobName] = useState(""); // Save the current job clicked (This is used as title in the FloatWindow)
  const [currentJobId, setCurrentJobId] = useState("");

  // Recover Job Redux State data
  const jobs = useSelector(selectJobs);
  const jobStatus = useSelector((state) => state.job.status);
  const error = useSelector((state) => state.job.error);

  // Recover Hds Redux State data
  const hds = useSelector(selectHds);
  const hdStatus = useSelector(selectHdStatus);

  const dispatch = useDispatch();

  // Call the redux to recover data from database
  useEffect(() => {
    if (jobStatus === "idle") {
      dispatch(getJobs());
    }

    if (hdStatus === "idle") {
      dispatch(getHds());
    }
  }, [jobStatus, hdStatus, dispatch]);

  // Handle function that will show the or close the window, set the current clicked position and set current job
  const handleShowMenu = (e, x, y, title, id) => {
    e.stopPropagation();

    setClickPos([x, y]);
    setShowMenu(!showMenu);
    setCurrentJobName(title);
    setCurrentJobId(id);
  };

  // Handle the selected Hd on the FloatWindow list and add this Hd to the current clicked Job
  const handleAddHd = (e, id_hd) => {
    e.stopPropagation();

    // console.log(currentJobId, id_hd);
    let currentJobHds = jobs.find((job) => job._id === currentJobId).hdIds;

    const resultJobHds = [...currentJobHds, id_hd];

    dispatch(
      updateJob({
        id: currentJobId,
        title: currentJobName,
        hdIds: resultJobHds,
      })
    );
  };

  if (jobStatus === "loading") {
    content = <div>Fetching Data</div>;
  } else if (jobStatus === "failed") {
    content = <div>Error Fetching HDs location: {error}</div>;
  } else if (jobStatus === "succeeded") {
    content = jobs.map((job) => {
      // Populate usedHds list with the hds that already are in the jobs
      usedHds = [...usedHds, ...job.hdIds];
      return (
        <JobBox
          key={job._id}
          id={job._id}
          title={job.title}
          hd_list={job.hdIds}
          handleShowMenu={handleShowMenu}
        />
      );
    });
  }

  return (
    <>
      <div className="job-list-content">
        <Title className={"job-list-title"}>Jobs</Title>
        <div className="job-list">{content}</div>
      </div>
      <Dropdown
        classname={"job-dropdown"}
        x={clickPos[0]}
        y={clickPos[1]}
        activated={showMenu}
        title={currentJobName}
        closeMenu={() => setShowMenu(false)}
      >
        <HdList
          interactive={true}
          handleAddHd={handleAddHd}
          small={true}
          data={hds}
          hd_list={usedHds}
        />
      </Dropdown>
    </>
  );
};

export default HdJobList;
