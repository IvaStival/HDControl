import "./JobList.css";

import HdJobBox from "../JobBox/JobBox";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobs } from "../../../../../../store/api/jobs/actions/getJobs";

const HdJobList = () => {
  const { loading, fulfilled, error, data } = useSelector((state) => state.job);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  let content;
  let list_temp = [];
  if (loading) {
    content = <div>Fetching Data</div>;
  } else if (error) {
    content = <div>Error Fetching HDs location</div>;
  } else {
    if (fulfilled) {
      for (const [, value] of Object.entries(data.data)) {
        list_temp.push(
          <HdJobBox
            key={value._id}
            id={value._id}
            title={value.title}
            hd_list={value.hdIds}
          />
        );
      }
    }
  }

  return (
    <div className="job-list-content">
      <div className="job-list">{list_temp.length ? list_temp : content}</div>
    </div>
  );
};

export default HdJobList;
