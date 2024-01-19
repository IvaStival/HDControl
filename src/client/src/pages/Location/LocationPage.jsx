import "./LocationPage.css";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getHd } from "../../store/api/hds/actions/getHd";
import { getJobs } from "../../store/api/jobs/actions/getJobs";

import LocationPanel from "./LocationPanel/LocationPanel";
import { selectHdStatus, selectHds } from "../../store/api/hds/hdSlice";
import { selectJobStatus, selectJobs } from "../../store/api/jobs/jobSlice";

const LocationPage = () => {
  const { id } = useParams();

  let loc_id = "";
  let job_title = "";
  let hd_title = "";

  const dispatch = useDispatch();

  const data = useSelector(selectHds);
  const hdStatus = useSelector(selectHdStatus);

  const jobData = useSelector(selectJobs);
  const jobStatus = useSelector(selectJobStatus);

  useEffect(() => {
    // GET DATABASE HD INFO
    if (hdStatus === "idle") {
      dispatch(getHd(id));
    }
    // AND JOB INFO
    if (jobStatus === "idle") {
      dispatch(getJobs());
    }
  }, [hdStatus, dispatch, id, jobStatus]);

  // GET THE LOCALIZATION ID AND HD NAME
  if (hdStatus === "succeeded") {
    loc_id = data["localizationId"];
    hd_title = data["title"];
  }

  // LOOKS FOR A JOB RELATED WITH THE HD id
  if (jobStatus === "succeeded") {
    for (let i = 0; i < jobData.length; ++i) {
      if (jobData[i]["hdIds"].includes(id)) {
        job_title = jobData[i]["title"];
      }
    }
  }

  // RENDER
  return (
    <div className="location-page-content">
      {hdStatus === "succeeded" ? (
        <LocationPanel
          jobTitle={job_title}
          hdTitle={hd_title}
          loc_id={loc_id}
          hd_id={id}
        />
      ) : (
        <div> Loading... </div>
      )}
    </div>
  );
};

export default LocationPage;
