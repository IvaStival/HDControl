import "./HdHome.css";
import "../../../index.css";

import Button from "../../../../components/common/Button/Button";
import HdJobList from "./components/JobsList/JobList";
import Dropdown from "../../../../components/common/Dropdown/Dropdown";
import HdInfo from "./components/HdInfo/HdInfo";

import CreateJob from "./components/CreateJob/CreateJob";

import { useState } from "react";

const HdHome = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [clickPos, setClickPos] = useState([0, 0]);

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setClickPos([e.target.offsetLeft, e.target.offsetTop]);
    setShowMenu(!showMenu);
  };

  return (
    <div className="home-content">
      <Button onClick={handleShowMenu} className="btn-add" primary rounded50>
        +
      </Button>

      <Dropdown
        x={clickPos[0]}
        y={clickPos[1]}
        activated={showMenu}
        closeMenu={setShowMenu}
      >
        <CreateJob setShowMenu={setShowMenu} />
      </Dropdown>

      {/* This componets have a list of Jobs and the HDs that are been used in this each Job */}
      <div className="home-main">
        <HdJobList />
        <HdInfo />
      </div>
    </div>
  );
};

export default HdHome;
