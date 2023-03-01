import "./HdHome.css";
import HdLocationList from "../components/HdLocationList";

import "./index.css";

const HdHome = () => {
  const config_home = [
    {
      hd: "FFHD01",
      ishome: true,
    },
    {
      hd: "FFHD010",
      ishome: true,
    },
    {
      hd: "FFHD011",
      ishome: true,
    },
    {
      hd: "FFHD100",
      ishome: true,
    },
  ];

  const config_far = [
    {
      hd: "FFHD02",
      ishome: false,
    },
    {
      hd: "FFHD012",
      ishome: false,
    },
    {
      hd: "FFHD041",
      ishome: false,
    },
    {
      hd: "FFHD120",
      ishome: false,
    },
  ];

  return (
    <div className="home-content">
      <div className="hd-lists">
        <HdLocationList title="Home" data={config_home} />
        <HdLocationList title="Far Away" data={config_far} />
      </div>
    </div>
  );
};

export default HdHome;
