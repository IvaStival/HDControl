import "./JobList.css";

import JobBox from "../JobBox/JobBox";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobs } from "../../../../../../store/api/jobs/actions/getJobs";
import { getJobsSelector } from "../../../../../../store/api/jobs/jobSlice";
const HdJobList = () => {
  const jobsData = useSelector(getJobsSelector);
  const jobStatus = useSelector((state) => state.job.status);
  const error = useSelector((state) => state.job.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (jobStatus === "idle") {
      dispatch(getJobs());
    }
  }, [jobStatus, dispatch]);

  let content;

  if (jobStatus === "loading") {
    content = <div>Fetching Data</div>;
  } else if (jobStatus === "failed") {
    content = <div>Error Fetching HDs location: {error}</div>;
  } else if (jobStatus === "succeeded") {
    content = jobsData.map((job) => {
      return (
        <JobBox
          key={job._id}
          id={job._id}
          title={job.title}
          hd_list={job.hdIds}
        />
      );
    });
  }

  return (
    <div className="job-list-content">
      <div className="job-list">{content}</div>
    </div>
  );
};

export default HdJobList;
