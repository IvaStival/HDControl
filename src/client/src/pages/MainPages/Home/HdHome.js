import "./HdHome.css";
import HdLocationList from "./components/HdLocationList";

import { useFetchLocWithHdsQuery } from "../../../store";

import "../../index.css";

const HdHome = () => {
  const { data, error, isFetching } = useFetchLocWithHdsQuery();
  const config_home = [];
  const config_far = [];

  let content;

  if (isFetching) {
    content = <div>Fetching Data</div>;
  } else if (error) {
    content = <div>Error Fetching HDs location</div>;
  } else {
    for (let i = 0; i < data.length; ++i) {
      if (data[i].location === "") {
        config_home.push({
          id: data[i].id,
          name: data[i].hd.title,
          ishome: true,
          size: data[i].hd.size,
          job: "",
        });
      } else {
        config_far.push({
          id: data[i].id,
          name: data[i].hd.title,
          ishome: false,
          size: data[i].hd.size,
          location: data[i].location,
          job: data[i].job,
        });
      }
    }
  }

  return (
    <div className="home-content">
      <div className="hd-lists">
        {content}
        <HdLocationList title="Home" data={config_home} />
        <HdLocationList title="Far Away" data={config_far} />
      </div>
    </div>
  );
};

export default HdHome;
