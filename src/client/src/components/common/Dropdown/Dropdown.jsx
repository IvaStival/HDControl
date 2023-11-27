import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ x, y, activated, children }) => {
  const ref = useRef();
  const [currentWidth, setCurrentWitdth] = useState();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setCurrentWitdth(ref.current.offsetWidth);
    // console.log(currentWidth);
  }, []);

  const activated_height = activated
    ? {
        top: `${y + 15}px`,
        left: `${x - currentWidth - 10}px`,
        visibility: "visible",
        opacity: 1,
      }
    : {
        top: `${y + 40}px`,
        left: `${x - currentWidth - 10}px`,
      };
  return (
    <div
      ref={ref}
      onClick={handleClick}
      className="dd-content"
      style={activated_height}
    >
      {children}
    </div>
  );
};

export default Dropdown;
