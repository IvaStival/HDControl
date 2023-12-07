import "./JobBox.css";

import { useSelector } from "react-redux";

import Panel from "../../../../../../components/common/Panel/Panel";
import HdList from "../HdList/HdList";
import HdJobHeader from "./JobHeader";

import { selectHds } from "../../../../../../store/api/hds/hdSlice";
import { selectHdStatus } from "../../../../../../store/api/hds/hdSlice";
// import { selectJobs } from "../../../../../../store/api/jobs/jobSlice";

const HdJobBox = ({ id, title, hd_list, handleShowMenu }) => {
  const hds = useSelector(selectHds);
  const hdsStatus = useSelector(selectHdStatus);

  // const jobs = useSelector(selectJobs);
  // const jobsStatus = useSelector(selectJobStatus);

  let job_hds;

  // const dispatch = useDispatch();

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log(id);
  };

  const handlePositionAndTitle = (e, x, y) => {
    handleShowMenu(e, x, y, title);
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
        <div className="job-content">
          <HdJobHeader
            title={title}
            handleDelete={handleDelete}
            showDropdown={handlePositionAndTitle}
          />
          <HdList data={job_hds} />
        </div>
      </Panel>
    </div>
  );
};

export default HdJobBox;
