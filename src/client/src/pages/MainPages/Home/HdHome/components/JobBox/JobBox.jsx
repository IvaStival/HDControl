import "./JobBox.css";

import Panel from "../../../../../../components/common/Panel/Panel";
import HdList from "../HdList/HdList";
import HdJobHeader from "./JobHeader";
import Dropdown from "../../../../../../components/common/Dropdown/Dropdown";
import { useState, useEffect, useRef } from "react";

const HdJobBox = ({ id, title, hd_list }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [clickPos, setClickPos] = useState([0, 0]);
  const menuRef = useRef();

  // This part of code is used to close the Menu when we click on outiside of the current
  // job window.
  useEffect(() => {
    let handler = (e) => {
      // Here I use a Ref to store the current Job Box to avoid that the dropdown close when
      // we interact with something on this Job Box
      if (!menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const handleDelete = (e) => {
    e.stopPropagation();
    console.log(id);
  };

  const handleShowDetail = (e) => {
    setShowDetail(!showDetail);
    console.log(hd_list);
  };

  const handleShowMenu = (e) => {
    e.stopPropagation();
    setClickPos([e.target.offsetLeft, e.target.offsetTop]);
    setShowMenu(!showMenu);
  };

  return (
    <div onClick={handleShowDetail} ref={menuRef} className="job-box">
      <Panel>
        <div className="job-content">
          <HdJobHeader
            title={title}
            handleDelete={handleDelete}
            showDropdown={handleShowMenu}
          />

          <Dropdown x={clickPos[0]} y={clickPos[1]} activated={showMenu}>
            ASDASDasjdalksjdlk
          </Dropdown>

          <HdList data={hd_list} />
        </div>
      </Panel>
    </div>
  );
};

export default HdJobBox;
