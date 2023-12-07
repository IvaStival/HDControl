import "./HdList.css";
import { useSelector } from "react-redux";

import HdItem from "../HdItem/HdItem";
import { selectJobs } from "../../../../../../store/api/jobs/jobSlice";
import { selectJobStatus } from "../../../../../../store/api/jobs/jobSlice";

import { jobsHdCheck } from "../../../../../../utils/jobsHdCheck";

const HdList = ({ interactive, data, handleAddHd }) => {
  const jobs = useSelector(selectJobs);
  const jobsStatus = useSelector(selectJobStatus);

  let rendered_list = [];

  const handleClick = (e) => {
    e.stopPropagation();
  };

  // CREATE ALL HDS ITEMS TO RENDER
  if (data && jobsStatus === "succeeded") {
    rendered_list = data.map((hd) => {
      return (
        <HdItem
          id={hd._id}
          handleAddHd={handleAddHd}
          interactive={interactive}
          key={hd._id}
          number={hd.title}
          disable={interactive ? jobsHdCheck(hd._id, jobs) : ""}
        />
      );
    });
  }

  return (
    <div onClick={handleClick} className="hd-item-list">
      {rendered_list}
    </div>
  );
};

export default HdList;
