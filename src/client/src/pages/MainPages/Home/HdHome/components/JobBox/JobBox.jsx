import "./JobBox.css";

import { useSelector, useDispatch } from "react-redux";

import Panel from "../../../../../../components/common/Panel/Panel";
import HdList from "../HdList/HdList";
import HdJobHeader from "./JobHeader";

import { selectHds } from "../../../../../../store/api/hds/hdSlice";
import { selectHdStatus } from "../../../../../../store/api/hds/hdSlice";

import {
  selectJobs,
  updateJobHds,
} from "../../../../../../store/api/jobs/jobSlice";
import { updateJob } from "../../../../../../store/api/jobs/actions/updateJob";
import { deleteJob } from "../../../../../../store/api/jobs/actions/deleteJob";

const HdJobBox = ({ id, title, hd_list, handleShowMenu }) => {
  const hds = useSelector(selectHds);
  const hdsStatus = useSelector(selectHdStatus);

  const jobs = useSelector(selectJobs);
  // const jobsStatus = useSelector(selectJobStatus);

  let job_hds;

  const dispatch = useDispatch();

  // -------------- HANDLERS --------------
  const handleDelete = (e) => {
    e.stopPropagation();

    dispatch(deleteJob({ id: id }));
  };

  const handleDeleteHd = (e, hd_id) => {
    e.stopPropagation();

    const currentJob = jobs.find((job) => job._id === id);

    const result = currentJob.hdIds.filter((hd) => hd !== hd_id);

    dispatch(updateJob({ id, title: currentJob.title, hdIds: result }));
  };

  const handlePositionAndTitle = (e, x, y) => {
    handleShowMenu(e, x, y, title, id);
  };

  // UPDATE THE STATE jobHds WITH THE CURRENT CLICKED HDS JOB
  const handleJobBoxClick = (e) => {
    console.log(id);
    dispatch(updateJobHds(hd_list));
  };

  // THIS HDS LIST IS SHOWED ON EACH JOB PANEL
  if (hdsStatus === "succeeded") {
    job_hds = hd_list.map((id) => {
      return hds.find((hd) => hd._id === id);
    });
  }

  return (
    <div className="job-box">
      <Panel>
        <div onClick={handleJobBoxClick} className="job-content">
          <HdJobHeader
            title={title}
            handleDelete={handleDelete}
            showDropdown={handlePositionAndTitle}
          />
          <HdList data={job_hds} handleDeleteHd={handleDeleteHd} />
        </div>
      </Panel>
    </div>
  );
};

export default HdJobBox;
