import "./HdJobList.css";

import HdJobBox from "../HdJobBox/HdJobBox";

const HdJobList = ({ data }) => {
  let job_list = [];

  for (const [key, value] of Object.entries(data)) {
    job_list.push(
      <HdJobBox key={value._id} title={value.title} hd_list={value.hdIds} />
    );
  }

  return <div className="job-list">{job_list}</div>;
};

export default HdJobList;
