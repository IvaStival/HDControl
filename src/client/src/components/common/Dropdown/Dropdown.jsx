import { useEffect, useRef, useState } from "react";
import "./Dropdown.css";

const Dropdown = ({
  x,
  y,
  activated,
  classname,
  title,
  closeMenu,
  children,
}) => {
  const ref = useRef();
  const [currentWidth, setCurrentWidth] = useState();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setCurrentWidth(ref.current.offsetWidth);

    let handler = (e) => {
      // Here I use a Ref to store the current Job Box to avoid that the dropdown close when
      // we interact with something on this Job Box
      if (!ref.current.contains(e.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
    // console.log(currentWidth);
  }, []);

  const activated_height = activated
    ? {
        top: `${y + 15}px`,
        left: `${x - currentWidth - 0}px`,
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
      className={`dd-content ${classname}`}
      style={activated_height}
    >
      <span>{title}</span>
      {children}
    </div>
  );
};

export default Dropdown;
