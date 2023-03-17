import "./HdHome.css";
import HdLocationList from "./components/HdLocationList";

import { useFetchLocWithHdsQuery } from "../../../store";

import "../../index.css";

const HdHome = () => {
  const { data, error, isFetching } = useFetchLocWithHdsQuery();
  // const config_home = [
  //   {
  //     id: 1,
  //     name: "FFHD001",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 2,
  //     name: "FFHD010",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 3,
  //     name: "FFHD011",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 4,
  //     name: "FFHD100",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 5,
  //     name: "FFHD101",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 6,
  //     name: "FFHD102",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 7,
  //     name: "FFHD103",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 8,
  //     name: "FFHD104",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 9,
  //     name: "FFHD105",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 10,
  //     name: "FFHD106",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 11,
  //     name: "FFHD107",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 12,
  //     name: "FFHD108",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 13,
  //     name: "FFHD109",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 14,
  //     name: "FFHD110",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 15,
  //     name: "FFHD111",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 16,
  //     name: "FFHD112",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 17,
  //     name: "FFHD113",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 18,
  //     name: "FFHD114",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  //   {
  //     id: 19,
  //     name: "FFHD115",
  //     ishome: true,
  //     size: "4TB",
  //     job: "",
  //   },
  // ];

  // const config_far = [
  //   {
  //     id: 20,
  //     name: "FFHD002",
  //     ishome: false,
  //     size: "4TB",
  //     job: "2022-05-NISSIN",
  //   },
  //   {
  //     id: 21,
  //     name: "FFHD012",
  //     ishome: false,
  //     size: "4TB",
  //     job: "2022-05-NISSIN",
  //   },
  //   {
  //     id: 22,
  //     name: "FFHD041",
  //     ishome: false,
  //     size: "4TB",
  //     job: "2022-05-NISSIN",
  //   },
  //   {
  //     id: 23,
  //     name: "FFHD120",
  //     ishome: false,
  //     size: "4TB",
  //     job: "2022-05-NISSIN",
  //   },
  // ];

  const config_home = [];
  const config_far = [];

  // id: 1,
  //   name: "FFHD001",
  //   ishome: true,
  //   size: "4TB",
  //   job: "",

  // id: 20,
  // name: "FFHD002",
  // ishome: false,
  // size: "4TB",
  // job: "2022-05-NISSIN",

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
