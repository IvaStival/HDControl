import "./JobList.css";

import JobBox from "../JobBox/JobBox";
import Dropdown from "../../../../../../components/common/Dropdown/Dropdown";
import HdList from "../HdList/HdList";

import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobs } from "../../../../../../store/api/jobs/actions/getJobs";
import { selectJobs } from "../../../../../../store/api/jobs/jobSlice";

import { getHds } from "../../../../../../store/api/hds/actions/getHds";
import { selectHdStatus } from "../../../../../../store/api/hds/hdSlice";
import { selectHds } from "../../../../../../store/api/hds/hdSlice";

const HdJobList = () => {
  let content;
  let usedHds = [];
  const [showMenu, setShowMenu] = useState(false);
  const [clickPos, setClickPos] = useState([0, 0]);
  const [currentJobName, setCurrentJobName] = useState("");

  const jobsData = useSelector(selectJobs);
  const jobStatus = useSelector((state) => state.job.status);
  const error = useSelector((state) => state.job.error);

  const hds = useSelector(selectHds);
  const hdStatus = useSelector(selectHdStatus);

  const dispatch = useDispatch();

  // This part of code is used to close the Menu when we click on outiside of the current
  // job window.

  useEffect(() => {
    if (jobStatus === "idle") {
      dispatch(getJobs());
    }

    if (hdStatus === "idle") {
      dispatch(getHds());
    }
  }, [jobStatus, hdStatus, dispatch]);

  const handleShowMenu = (e, x, y, title) => {
    e.stopPropagation();

    setClickPos([x, y]);
    setShowMenu(!showMenu);
    setCurrentJobName(title);
  };

  const handleAddHd = (e, id_job, id_hd) => {
    e.stopPropagation();

    console.log(id_job, id_hd);
  };

  if (jobStatus === "loading") {
    content = <div>Fetching Data</div>;
  } else if (jobStatus === "failed") {
    content = <div>Error Fetching HDs location: {error}</div>;
  } else if (jobStatus === "succeeded") {
    content = jobsData.map((job) => {
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
