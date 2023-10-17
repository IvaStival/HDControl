import HdLocationList from "../../../../components/home/HdLocationList/HdLocationList";
import { useFetchLocWithHdsQuery } from "../../../../store";
import "./HdHome.css";
import "../../../index.css";
import HdJobList from "./components/HdJobsList/HdJobList";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getJobs } from "../../../../store/api/jobs/actions/getJobs";

const HdHome = () => {
  // const { data, error, isFetching } = useFetchLocWithHdsQuery();
  const { loading, fulfilled, error, data } = useSelector((state) => state.job);
  // const config_home = [];
  // const config_far = [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, []);

  let content;

  if (loading) {
    content = <div>Fetching Data</div>;
  } else if (error) {
    content = <div>Error Fetching HDs location</div>;
  } else {
    if (fulfilled) {
      content = <HdJobList data={data.data} />;
    }
  }

  return (
    <div className="home-content">
      {/* <div className="hd-lists">
        {content}
        <HdLocationList title="Home" data={config_home} />
        <HdLocationList title="Far Away" data={config_far} />
      </div> */}
      {content}
    </div>
  );
};

export default HdHome;
